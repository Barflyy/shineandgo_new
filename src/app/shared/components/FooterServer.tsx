import Link from 'next/link';

export default function FooterServer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold text-white mb-4">Shine&Go</div>
            <p className="text-slate-300 mb-4">
              Service premium de nettoyage automobile mobile en Wallonie. 
              Résultat showroom garanti avec nos produits professionnels.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://wa.me/32472303701"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                WhatsApp
              </Link>
              <Link
                href="https://calendly.com/nathangodfroid/nettoyage-voiture-shine-go"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Réserver
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/nettoyage-interieur-voiture" className="text-slate-300 hover:text-white transition-colors">
                  Nettoyage Intérieur
                </Link>
              </li>
              <li>
                <Link href="/nettoyage-exterieur-voiture" className="text-slate-300 hover:text-white transition-colors">
                  Nettoyage Extérieur
                </Link>
              </li>
              <li>
                <Link href="/nettoyage-complet-voiture" className="text-slate-300 hover:text-white transition-colors">
                  Nettoyage Complet
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-slate-300">
              <p>📞 +32 472 30 37 01</p>
              <p>📧 contact@shinego.be</p>
              <p>📍 Wallonie, Belgique</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Shine&Go. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 