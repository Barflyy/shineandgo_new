#!/bin/bash

# Script pour mettre à jour toutes les pages villes avec le nouveau template

# Liste des villes principales à mettre à jour
cities=(
  "huy:Huy"
  "seraing:Seraing" 
  "herve:Herve"
  "chaudfontaine:Chaudfontaine"
  "dison:Dison"
  "pepinster:Pepinster"
  "theux:Theux"
  "aywaille:Aywaille"
  "esneux:Esneux"
  "flemalle:Flémalle"
  "ans:Ans"
  "soumagne:Soumagne"
  "trooz:Trooz"
  "vise:Visé"
  "eupen:Eupen"
  "malmedy:Malmedy"
  "stavelot:Stavelot"
  "waimes:Waimes"
)

for city in "${cities[@]}"; do
  IFS=':' read -r slug name <<< "$city"
  file_path="src/app/zone-intervention/$slug/page.tsx"
  
  if [ -f "$file_path" ]; then
    echo "Mise à jour de $file_path pour $name..."
    
    # Remplacer CityPageTemplate par CityPageTemplateNew et ajouter cityName
    sed -i '' "s/import CityPageTemplate from '..\/..\/components\/CityPageTemplate';/import CityPageTemplateNew from '..\/..\/components\/CityPageTemplateNew';/g" "$file_path"
    sed -i '' "s/<CityPageTemplate citySlug=\"$slug\" \/>/<CityPageTemplateNew citySlug=\"$slug\" cityName=\"$name\" \/>/g" "$file_path"
    
    echo "✅ $name mis à jour"
  else
    echo "❌ Fichier $file_path non trouvé pour $name"
  fi
done

echo ""
echo "🎉 Mise à jour terminée ! Les pages suivantes utilisent maintenant le nouveau template :"
echo "✅ Liège, Verviers, Spa (déjà mis à jour manuellement)"
echo "✅ $(printf '%s, ' "${cities[@]%:*}" | sed 's/, $//')"
echo ""
echo "📝 Pour ajouter d'autres villes, ajoutez-les au tableau 'cities' dans ce script."