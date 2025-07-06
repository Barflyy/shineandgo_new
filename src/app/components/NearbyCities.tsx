import Link from "next/link";
import { getCityDisplayName } from "../utils/cityData";

interface NearbyCitiesProps {
  currentCity: string;
  nearbyCities: Array<{
    name: string;
    slug: string;
    distance?: string;
  }>;
}

const NearbyCities: React.FC<NearbyCitiesProps> = ({ currentCity, nearbyCities }) => {
  const gradientClasses = [
    "from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30",
    "from-green-600/20 to-teal-600/20 hover:from-green-600/30 hover:to-teal-600/30",
    "from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30",
    "from-orange-600/20 to-red-600/20 hover:from-orange-600/30 hover:to-red-600/30",
    "from-cyan-600/20 to-blue-600/20 hover:from-cyan-600/30 hover:to-blue-600/30",
    "from-emerald-600/20 to-green-600/20 hover:from-emerald-600/30 hover:to-green-600/30",
  ];

  return (
    <div className="mt-16">
      <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Service disponible dans les villes voisines
        </h3>
        <p className="text-white/80 text-center mb-8">
          Shine&Go intervient également dans les communes environnantes de {getCityDisplayName(currentCity)}
        </p>
        <div className="grid grid-cols-3 gap-4">
          {nearbyCities.map((city, index) => (
            <Link 
              key={city.slug}
              href={`/zone-intervention/${city.slug}`}
              className={`bg-gradient-to-r ${gradientClasses[index % gradientClasses.length]} rounded-lg p-3 text-center transition-all duration-300 border border-white/10 hover:border-white/20 min-h-[80px] flex flex-col justify-center`}
            >
              <h4 className="text-white font-semibold text-xs leading-tight truncate">{getCityDisplayName(city.slug)}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbyCities; 