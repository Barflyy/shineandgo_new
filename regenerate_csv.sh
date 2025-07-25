#!/bin/bash

# Script pour régénérer le fichier csvCityContent.ts à partir du CSV source
# Usage: ./regenerate_csv.sh

CSV_SOURCE="Pages_villes_avec_Quartiers___Communes_alentours.csv"
OUTPUT_FILE="src/app/utils/csvCityContent.ts"

echo "🔄 Régénération du fichier csvCityContent.ts..."

# Vérifier si le fichier source existe
if [ ! -f "$CSV_SOURCE" ]; then
    echo "❌ Erreur: Fichier CSV source '$CSV_SOURCE' non trouvé"
    echo "Assurez-vous que le fichier CSV est dans le répertoire racine"
    exit 1
fi

echo "📁 Fichier source trouvé: $CSV_SOURCE"
echo "📝 Génération du fichier TypeScript..."

# Créer le fichier TypeScript avec l'interface
cat > "$OUTPUT_FILE" << 'EOF'
// ⚠️ FICHIER GÉNÉRÉ AUTOMATIQUEMENT. NE PAS MODIFIER À LA MAIN !

export interface CSVCityData {
  Ville: string;
  Postal: string;
  Slug: string;
  URL: string;
  Title: string;
  "Meta Description": string;
  H1: string;
  "Phrase intro (unique)": string;
  "Particularité locale": string;
  "Contrainte logistique": string;
  "Accès / Routes": string;
  "Témoignage local": string;
  "Cas client local": string;
  "FAQ1 - Question": string;
  "FAQ1 - Réponse": string;
  "FAQ2 - Question": string;
  "FAQ2 - Réponse": string;
  "FAQ3 - Question": string;
  "FAQ3 - Réponse": string;
  "FAQ4 - Question": string;
  "FAQ4 - Réponse": string;
  "FAQ5 - Question": string;
  "FAQ5 - Réponse": string;
  "Quartiers / Sections": string;
  "Communes alentours": string;
  "ALT image 1": string;
  "ALT image 2": string;
  "ALT image 3": string;
  "Image File 1": string;
  "Image File 2": string;
  "Long-tail keywords": string;
  "CTA localisé": string;
  "Meta Robots": string;
  "Canonical": string;
  "Hreflang fr-BE": string;
  "Hreflang x-default": string;
  "OG Title": string;
  "OG Description": string;
  "OG Image": string;
  "Twitter Title": string;
  "Twitter Description": string;
  "Twitter Image": string;
  "Preconnect Domains": string;
  "Preload Image": string;
  "JSONLD_Offer_Price": string;
  "JSONLD_Offer_Currency": string;
  "JSONLD_WebPage_datePublished": string;
  "JSONLD_WebPage_dateModified": string;
  "JSONLD_ImageObject_Description": string;
  "Breadcrumb_L1_Name": string;
  "Breadcrumb_L1_URL": string;
  "Breadcrumb_L2_Name": string;
  "Breadcrumb_L2_URL": string;
  "Breadcrumb_L3_Name": string;
  "Breadcrumb_L3_URL": string;
  "X-Robots-Tag (HTTP header)": string;
  "Cache-Control (images)": string;
  "CSP note": string;
  "Geo_Lat": string;
  "Geo_Lon": string;
}

export const csvCityData: Record<string, CSVCityData> = {
EOF

# Utiliser Python pour parser correctement le CSV
python3 -c "
import csv
import json
import sys

# Lire le CSV
with open('$CSV_SOURCE', 'r', encoding='utf-8') as file:
    reader = csv.DictReader(file)
    data = list(reader)

# Générer le code TypeScript
for row in data:
    slug = row['Slug'].strip()
    if slug:
        print(f'  \"{slug}\": {{')
        
        # Générer chaque champ
        fields = []
        for key, value in row.items():
            # Nettoyer la valeur
            value = value.strip() if value else ''
            
            # Échapper les caractères spéciaux
            value = value.replace('\\\\', '\\\\\\\\').replace('\"', '\\\\\"')
            
            # Déterminer si la clé a besoin de guillemets
            if any(c in key for c in ' -()'):
                fields.append(f'    \"{key}\": \"{value}\"')
            else:
                fields.append(f'    {key}: \"{value}\"')
        
        print(',\\n'.join(fields))
        print('  },')
" >> "$OUTPUT_FILE"

# Ajouter la fin du fichier
cat >> "$OUTPUT_FILE" << 'EOF'
};

export function getCSVCityData(slug: string): CSVCityData | null {
  return csvCityData[slug] || null;
}
EOF

echo "✅ Fichier généré avec succès: $OUTPUT_FILE"
echo "📊 Nombre de villes traitées: $(grep -c '^  "' "$OUTPUT_FILE")"
echo ""
echo "🔄 Vous pouvez maintenant redémarrer votre serveur de développement"
echo "   ou recompiler votre application pour voir les changements." 