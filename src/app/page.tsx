"use client";

import React, { useState, useEffect } from 'react';
import { Car, Sparkles, Star, Phone, MessageCircle, Clock, MapPin, Shield, Droplets, ChevronRight, Menu, X, Award, Zap, Heart, CheckCircle, Users, Calendar, Plus, Minus, Info, TrendingUp, Timer } from 'lucide-react';
import DevisSimulator from './components/DevisSimulator';
import TransformationsSection from './components/TransformationsSection';

// Types pour le configurateur
type VehicleType = 'voiture' | 'camion' | 'autre';

interface VehicleData {
  price: number;
  time: number;
  label: string;
  icon: string;
}

interface ServiceType {
  id: string;
  name: string;
  price: number;
  time: number;
  description: string;
  features: string[];
  duration: string;
  target: string;
}

interface ServiceData {
  base: Record<VehicleType, VehicleData>;
  services: ServiceType[];
}

// Mise à jour des props des composants avec les types
interface VehicleSelectorProps {
  selectedVehicle: VehicleType;
  onSelect: (vehicle: VehicleType) => void;
}

interface StateSliderProps {
  value: number;
  onChange: (value: number) => void;
}

interface ServiceTogglerProps {
  service: ServiceType;
  selected: boolean;
  onToggle: (serviceId: string) => void;
}

interface PriceCalculatorProps {
  basePrice: number;
  selectedServices: string[];
  vehicleState: number;
}

// Données du configurateur
const serviceData: ServiceData = {
  base: {
    voiture: { 
      price: 0, 
      time: 0, 
      label: "Voiture", 
      icon: "🚗"
    },
    camion: { 
      price: 0, 
      time: 0, 
      label: "Camion", 
      icon: "🚚"
    },
    autre: { 
      price: 0, 
      time: 0, 
      label: "Autre", 
      icon: "🚐"
    }
  },
  services: [
    { 
      id: 'deepclean', 
      name: 'Deep Clean', 
      price: 150, 
      time: 180,
      description: "Nettoyage complet intérieur & extérieur haut de gamme",
      features: [
        "Prélavage et lavage à la main sans micro-rayures",
        "Nettoyage des jantes, passages de roues et détails extérieurs",
        "Décontamination ferreuse & goudron (carrosserie et jantes)",
        "Aspiration complète de l'habitacle (sièges, tapis, coffre)",
        "Nettoyage en profondeur des plastiques, grilles, joints",
        "Détachage des tissus, moquettes ou nettoyage du cuir (Pol Star)",
        "Finition nourrissante (Leather Star ou dressing plastiques)",
        "Vitres intérieures/extérieures",
        "Traitement hydrophobe carrosserie & vitres"
      ],
      duration: "2h30 à 3h30 selon l'état du véhicule",
      target: "Clients exigeants, véhicules très sales ou avant une vente"
    },
    { 
      id: 'maintenance', 
      name: 'Maintenance Wash', 
      price: 70, 
      time: 90,
      description: "Entretien régulier pour garder votre voiture impeccable",
      features: [
        "Lavage extérieur complet (prélavage + main)",
        "Nettoyage jantes & passages de roues",
        "Aspiration rapide intérieur (sièges, tapis, coffre)",
        "Dépoussiérage des plastiques et surfaces visibles",
        "Vitres intérieures/extérieures",
        "Retouches hydrophobes si besoin"
      ],
      duration: "1h15 à 1h45",
      target: "Fidélisation, entretien mensuel ou bimensuel"
    }
  ]
};

// Composant VehicleSelector
const VehicleSelector: React.FC<VehicleSelectorProps> = ({ selectedVehicle, onSelect }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
      {Object.entries(serviceData.base).map(([key, vehicle]) => (
        <button
          key={key}
          onClick={() => onSelect(key as VehicleType)}
          className={`group relative bg-white/5 backdrop-blur-sm border ${
            selectedVehicle === key ? 'border-blue-400' : 'border-white/10'
          } rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105`}
        >
          <div className="text-2xl sm:text-4xl mb-2 sm:mb-4">{vehicle.icon}</div>
          <div className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">{vehicle.label}</div>
          <div className="text-xs sm:text-sm text-gray-400">À partir de {vehicle.price}€</div>
          <div className="text-xs text-gray-500 mt-1">{vehicle.time} min</div>
          {selectedVehicle === key && (
            <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-5 h-5 sm:w-6 sm:h-6 bg-blue-400 rounded-full flex items-center justify-center">
              <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

// Composant ServiceSelector
const ServiceSelector: React.FC<{ selectedService: string; onSelect: (service: string) => void }> = ({ selectedService, onSelect }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      {serviceData.services.map((service) => (
        <button
          key={service.id}
          onClick={() => onSelect(service.id)}
          className={`w-full group relative bg-gradient-to-br ${
            selectedService === service.id 
              ? 'from-blue-500/20 to-cyan-500/20 border-blue-400' 
              : 'from-white/5 to-white/5 border-white/10'
          } backdrop-blur-sm border rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 transition-all duration-300 hover:from-blue-500/10 hover:to-cyan-500/10`}
        >
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4">
              <div className="mb-3 sm:mb-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2">{service.name}</h3>
                <p className="text-sm sm:text-base text-gray-300">{service.description}</p>
              </div>
              <div className="text-left sm:text-right">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1">{service.price}€</div>
                <div className="text-xs sm:text-sm text-gray-400">TTC</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div className="space-y-2 sm:space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/5 rounded-lg sm:rounded-xl p-3 sm:p-4 space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                  <div className="bg-white/5 rounded-lg p-2 sm:p-3 text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                      <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium">Durée</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">{service.duration}</span>
                  </div>
                  <div className="bg-white/5 rounded-lg p-2 sm:p-3 text-center">
                    <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-1">
                      <Users className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                      <span className="text-xs sm:text-sm font-medium">Public cible</span>
                    </div>
                    <span className="text-xs sm:text-sm text-gray-300">{service.target}</span>
                  </div>
                </div>
              </div>
            </div>

            {selectedService === service.id && (
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

// Composant StateSlider
const StateSlider: React.FC<StateSliderProps> = ({ value, onChange }) => {
  const getEmoji = (value: number): string => {
    if (value <= 3) return "✨";
    if (value <= 6) return "🧹";
    if (value <= 8) return "🧼";
    return "🚿";
  };

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="text-lg font-semibold">État de votre véhicule</div>
        <div className="text-2xl">{getEmoji(value)}</div>
      </div>
      <input
        type="range"
        min="1"
        max="10"
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer"
      />
      <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>Peu sale</span>
        <span>Très sale</span>
      </div>
    </div>
  );
};

// Composant ServiceToggler
const ServiceToggler: React.FC<ServiceTogglerProps> = ({ service, selected, onToggle }) => {
  return (
    <div className="relative">
      <div 
        className={`group bg-white/5 backdrop-blur-sm border ${
          selected ? 'border-blue-400' : 'border-white/10'
        } rounded-2xl p-6 transition-all duration-300 hover:bg-white/10`}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold">{service.name}</h3>
            </div>
            <p className="text-sm text-gray-400 mb-4">{service.description}</p>
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Timer className="w-4 h-4 text-blue-400" />
                <span>{service.time} min</span>
              </div>
              <div className="flex items-center space-x-1">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span>+{service.price}€</span>
              </div>
            </div>
          </div>
          <button
            onClick={() => onToggle(service.id)}
            className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ${
              selected ? 'bg-blue-400' : 'bg-white/20'
            }`}
          >
            <div className={`w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ${
              selected ? 'translate-x-6' : ''
            }`} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Composant PriceCalculator
const PriceCalculator: React.FC<PriceCalculatorProps> = ({ basePrice, selectedServices, vehicleState }) => {
  const calculateTotal = (): number => {
    const service = serviceData.services.find(s => s.id === selectedServices[0]);
    return service?.price || 0;
  };

  const total = calculateTotal();
  const selectedService = serviceData.services.find(s => s.id === selectedServices[0]);

  return (
    <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-400/20 rounded-2xl p-8">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold mb-2">Votre Devis</h3>
        <p className="text-gray-300">Prix final TTC</p>
      </div>

      <div className="space-y-6">
        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Service</span>
            <span className="font-semibold">{selectedService?.name}</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400">Durée</span>
            <span className="font-semibold">{selectedService?.duration}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Public cible</span>
            <span className="font-semibold">{selectedService?.target}</span>
          </div>
        </div>

        <div className="bg-white/5 rounded-xl p-4">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total</span>
            <div className="text-right">
              <div className="text-3xl font-bold text-blue-400">{total}€</div>
              <div className="text-sm text-gray-400">TTC</div>
            </div>
          </div>
        </div>

        <a 
          href="https://wa.me/32472303701"
          className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-full px-6 py-4 rounded-xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 overflow-hidden"
        >
          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 relative z-10" />
          <span className="relative z-10">Réserver maintenant</span>
          <div className="relative z-10 bg-white/20 rounded-full px-2 py-1 text-xs">Gratuit</div>
        </a>

        <div className="text-center text-sm text-gray-400">
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Service garanti et assuré</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const PremiumCarCleaningLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleType>('voiture');
  const [selectedService, setSelectedService] = useState('deepclean');
  const [vehicleState, setVehicleState] = useState(50);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Fonction pour gérer le début du glissement
  const handleSliderStart = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
    handleSliderMove(e);
  };

  // Fonction pour gérer le déplacement du slider
  const handleSliderMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging && e.type !== 'mousedown' && e.type !== 'touchstart') return;

    const container = e.currentTarget.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const position = ((x - container.left) / container.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  // Fonction pour gérer la fin du glissement
  const handleSliderEnd = () => {
    setIsDragging(false);
  };

  // Ajouter les écouteurs d'événements globaux
  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        const container = document.querySelector('.slider-container');
        if (container) {
          const rect = container.getBoundingClientRect();
          const position = ((e.clientX - rect.left) / rect.width) * 100;
          setSliderPosition(Math.min(Math.max(position, 0), 100));
        }
      }
    };

    window.addEventListener('mouseup', handleGlobalMouseUp);
    window.addEventListener('mousemove', handleGlobalMouseMove);

    return () => {
      window.removeEventListener('mouseup', handleGlobalMouseUp);
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Sparkles className="w-10 h-10" />,
      title: "Nettoyage Intérieur Premium",
      description: "Aspiration profonde des sièges et moquettes, nettoyage et protection du cuir, désinfection complète de l'habitacle",
      price: "À partir de 89€",
      features: ["Aspiration haute puissance", "Traitement cuir premium", "Désinfection UV", "Parfum signature"],
      duration: "2-3h",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Droplets className="w-10 h-10" />,
      title: "Lavage Extérieur Détaillé",
      description: "Prélavage mousse active, lavage haute pression, application cire nanotechnologie, lustrage jantes et pneus",
      price: "À partir de 69€",
      features: ["Mousse active pH neutre", "Cire céramique", "Jantes brillantes", "Pneus rénovés"],
      duration: "1.5-2h",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-10 h-10" />,
      title: "Protection Céramique",
      description: "Traitement céramique longue durée, protection UV optimale, effet hydrophobe garantie 2 ans",
      price: "À partir de 299€",
      features: ["Garantie 2 ans", "Protection UV", "Effet hydrophobe", "Brillance durable"],
      duration: "4-6h",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Un service absolument exceptionnel ! Ma BMW n'a jamais été ainsi impeccable. L'équipe est d'un professionnalisme remarquable et d'une ponctualité parfaite.",
      rating: 5,
      car: "BMW Série 5",
      location: "Verviers",
      image: "👩‍💼"
    },
    {
      name: "Pierre Martin",
      text: "Travail extraordinaire sur ma Porsche. Ils ont littéralement redonné une seconde jeunesse à l'intérieur cuir. Je recommande les yeux fermés !",
      rating: 5,
      car: "Porsche Cayenne",
      location: "Spa",
      image: "👨‍💼"
    },
    {
      name: "Sophie Laurent",
      text: "Enfin un service à la hauteur de mes attentes les plus élevées. Le résultat est tout simplement parfait, je suis absolument conquise !",
      rating: 5,
      car: "Audi Q7",
      location: "Dison",
      image: "👩‍🦱"
    }
  ];

  const stats = [
    { number: "500+", label: "Véhicules transformés", icon: <Car className="w-6 h-6" /> },
    { number: "98%", label: "Clients satisfaits", icon: <Heart className="w-6 h-6" /> },
    { number: "7j/7", label: "Service disponible", icon: <Clock className="w-6 h-6" /> },
    { number: "5★", label: "Note moyenne", icon: <Star className="w-6 h-6" /> }
  ];

  // Composant StepIndicator
  const StepIndicator = () => {
    const steps = [
      { number: 1, label: "Véhicule" },
      { number: 2, label: "Service" }
    ];

    return (
      <div className="flex items-center justify-between mb-8">
        {steps.map((step) => (
          <div key={step.number} className="flex items-center">
            <div 
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                currentStep === step.number 
                  ? 'bg-blue-400 text-white' 
                  : currentStep > step.number 
                    ? 'bg-green-400 text-white' 
                    : 'bg-white/10 text-gray-400'
              }`}
            >
              {currentStep > step.number ? <CheckCircle className="w-4 h-4" /> : step.number}
            </div>
            <div className="ml-2 text-sm font-medium text-gray-300">{step.label}</div>
            {step.number < steps.length && (
              <div className="w-12 h-0.5 mx-4 bg-white/10">
                <div 
                  className={`h-full bg-blue-400 transition-all duration-300 ${
                    currentStep > step.number ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  // Composant Header
  const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
      { name: 'Accueil', href: '#accueil' },
      { name: 'Services', href: '#services' },
      { name: 'Transformations', href: '#transformations' },
      { name: 'À propos', href: '#apropos' },
      { name: 'Témoignages', href: '#temoignages' },
      { name: 'Contact', href: '#contact' }
    ];

    const handleNavClick = (href: string) => {
      setIsMobileMenuOpen(false);
      const element = document.querySelector(href) as HTMLElement;
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    return (
      <header className="w-full z-40 transition-all duration-500 bg-gradient-to-r from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex flex-row items-center group cursor-pointer h-full" onClick={() => handleNavClick('#accueil')}>
              <div className="flex flex-col leading-tight">
                <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Shine&Go
                </span>
                <span className="text-xs text-gray-400 -mt-1">Premium Service</span>
              </div>
            </div>

            {/* Navigation Desktop - Espacement contrôlé */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 mx-8 xl:mx-12">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-sm font-medium text-gray-300 hover:text-white transition-all duration-300 relative group nav-link px-2 py-1 whitespace-nowrap"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center space-x-3 xl:space-x-4">
              <a
                href="https://wa.me/32472303701"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-3 xl:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
              >
                <MessageCircle className="w-4 h-4 group-hover:animate-bounce" />
                <span>WhatsApp</span>
              </a>
              <a
                href="tel:+32472303701"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-3 xl:px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 group"
              >
                <Phone className="w-4 h-4 group-hover:animate-pulse" />
                <span>Appeler</span>
              </a>
            </div>

            {/* Menu Mobile Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
              aria-label="Menu mobile"
            >
              <div className={`w-6 h-6 relative transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                <span className={`absolute top-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : '-translate-y-1'
                }`}></span>
                <span className={`absolute top-1/2 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute bottom-1 left-0 w-6 h-0.5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : 'translate-y-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Menu Mobile */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          <div className="bg-gradient-to-br from-slate-900/98 via-slate-800/98 to-slate-900/98 backdrop-blur-xl border-t border-white/10">
            <div className="container mx-auto px-4 py-6">
              {/* Navigation Mobile */}
              <nav className="space-y-2 mb-8">
                {navItems.map((item, index) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className={`w-full text-left text-lg font-medium text-gray-300 hover:text-white transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/10 transform hover:translate-x-2 hover:shadow-lg group ${
                      isMobileMenuOpen ? 'menu-item-enter' : ''
                    }`}
                    style={{ 
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {item.name}
                    </div>
                  </button>
                ))}
              </nav>

              {/* CTA Mobile */}
              <div className="space-y-3 mb-6">
                <a
                  href="https://wa.me/32472303701"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  <span>WhatsApp Direct</span>
                </a>
                <a
                  href="tel:+32472303701"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3 group"
                >
                  <Phone className="w-5 h-5 group-hover:animate-pulse" />
                  <span>Appel Direct</span>
                </a>
              </div>

              {/* Info Mobile */}
              <div className="pt-6 border-t border-white/10">
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-400">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-3 border border-white/5">
                    <Clock className="w-4 h-4 text-blue-400" />
                    <span>7j/7 • 8h-20h</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-3 border border-white/5">
                    <MapPin className="w-4 h-4 text-blue-400" />
                    <span>Verviers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section id="accueil" className="relative h-[calc(100vh-4rem)] sm:h-[calc(100vh-5rem)] overflow-hidden flex items-center justify-center">
        {/* Background Animations */}
        <div className="absolute inset-0 pointer-events-none select-none z-0">
          <div className="absolute top-1/4 left-1/4 w-[18vw] h-[18vw] max-w-[12rem] max-h-[12rem] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[18vw] h-[18vw] max-w-[12rem] max-h-[12rem] bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[24vw] h-[24vw] max-w-[18rem] max-h-[18rem] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
            Votre Véhicule
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mérite l'Excellence
            </span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-gray-300 max-w-[95%] sm:max-w-[90%] mx-auto leading-relaxed px-2">
            Service premium d'excellence en nettoyage automobile. Votre véhicule mérite le meilleur traitement avec mes prestations haut de gamme à Herve et dans la région.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12 px-4">
            <a 
              href="https://wa.me/32472303701"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 relative z-10" />
              <span className="relative z-10">WhatsApp Direct</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </a>
            
            <a 
              href="tel:+32472303701"
              className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-4 md:py-5 rounded-full font-bold text-sm sm:text-base md:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 relative z-10" />
              <span className="relative z-10">Appel Direct</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 group-hover:translate-x-2 transition-transform duration-300 relative z-10" />
            </a>
          </div>

          {/* Preuves Sociales Renforcées */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 lg:space-x-8 text-xs sm:text-sm text-gray-400">
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
              <span>Rejoint par <span className="text-white font-semibold">50+</span> clients satisfaits</span>
            </div>
            <div className="flex items-center space-x-1 sm:space-x-2">
              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400" />
              <span>5/5 sur Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transformations Section */}
      <section id="transformations">
        <TransformationsSection />
      </section>

      {/* Devis Simulator Section */}
      <section id="services">
        <DevisSimulator />
      </section>

      {/* About Section Premium */}
      <section id="apropos" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 mb-4 sm:mb-6 border border-white/20">
                <Award className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" />
                <span className="text-xs sm:text-sm font-medium">Service Premium</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
                Excellence & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Confort</span>
              </h2>
              
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-6 sm:mb-8 leading-relaxed">
                Je m'engage à révolutionner les standards du nettoyage automobile premium en Belgique. 
                En tant qu'artisan passionné, je privilégie votre confort et votre satisfaction en utilisant exclusivement des produits haut de gamme européens et des techniques professionnelles de pointe.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <span className="font-semibold text-sm sm:text-base">Produits Premium</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">Formules biodégradables haut de gamme certifiées</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
                    <Heart className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                    <span className="font-semibold text-sm sm:text-base">Confort Client</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300">Service à domicile et flexibilité totale</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-500/30 to-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-sm border border-white/20">
                  <div className="space-y-4 sm:space-y-6">
                    {[
                      { icon: Award, title: "Service Premium", desc: "Excellence et attention aux détails" },
                      { icon: Clock, title: "Flexibilité Totale", desc: "Horaires adaptés à vos besoins" },
                      { icon: Car, title: "Spécialiste Luxe", desc: "Expertise véhicules haut de gamme" },
                      { icon: Heart, title: "Confort Garanti", desc: "Service à domicile, zéro contrainte" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 sm:space-x-4 group hover:transform hover:translate-x-2 transition-all duration-300">
                        <div className="bg-blue-500/20 p-2 sm:p-3 rounded-lg sm:rounded-xl group-hover:bg-blue-500/30 transition-colors duration-300">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">{item.title}</h4>
                          <p className="text-xs sm:text-sm text-gray-300">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Témoignages */}
      <section id="temoignages" className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Expérience Premium
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
              Découvrez les témoignages de mes clients satisfaits qui ont vécu l'expérience Shine&Go premium
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-white/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="text-3xl sm:text-4xl mr-3 sm:mr-4">{testimonial.image}</div>
                  <div>
                    <div className="font-bold text-blue-400 text-sm sm:text-base">{testimonial.name}</div>
                    <div className="text-xs sm:text-sm text-gray-400">{testimonial.car}</div>
                    <div className="text-xs text-gray-500 flex items-center mt-1">
                      <MapPin className="w-3 h-3 mr-1" />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
                
                <div className="flex mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed text-xs sm:text-sm lg:text-base">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section Ultra Premium */}
      <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-white/20">
            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            <span className="text-xs sm:text-sm font-medium">Service Premium</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 sm:mb-6">
            Prêt à <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Découvrir</span> l'Excellence ?
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
            Contactez-moi dès maintenant pour un devis personnalisé gratuit et vivez l'expérience Shine&Go premium
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 px-4">
            <a 
              href="https://wa.me/32472303701"
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-base sm:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10" />
              <span className="relative z-10">WhatsApp Direct</span>
              <div className="relative z-10 bg-white/20 rounded-full px-2 py-1 text-xs">Gratuit</div>
            </a>
            
            <a 
              href="tel:+32472303701"
              className="group relative bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-full font-bold text-base sm:text-lg lg:text-xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 sm:space-x-3 overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 relative z-10" />
              <span className="relative z-10">+32 472 30 37 01</span>
              <div className="relative z-10 bg-white/20 rounded-full px-2 py-1 text-xs">24h/7j</div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Ultra Premium Moderne */}
      <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 sm:py-16 lg:py-20 border-t border-white/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section Principale */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
            
            {/* Logo et Description */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="flex flex-col items-start mb-6">
                  <span className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Shine&Go
                  </span>
                  <span className="text-sm text-gray-400 -mt-1">Premium Service</span>
                </div>
              </div>
              
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                Service premium d'excellence en nettoyage automobile. Votre véhicule mérite le meilleur traitement avec mes prestations haut de gamme à Herve et dans la région.
              </p>
              
              <div className="flex items-center space-x-4">
                <a 
                  href="https://wa.me/32472303701"
                  className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 text-white group-hover:animate-bounce" />
                </a>
                <a 
                  href="tel:+32472303701"
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Phone className="w-5 h-5 text-white group-hover:animate-pulse" />
                </a>
                <a 
                  href="mailto:contact@shinego.be"
                  className="group bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>Mes Services</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Deep Clean Premium', desc: 'Service complet haut de gamme' },
                  { name: 'Maintenance Wash', desc: 'Entretien régulier premium' },
                  { name: 'Détail Extérieur', desc: 'Finition parfaite premium' },
                  { name: 'Nettoyage Intérieur', desc: 'Habitacle impeccable' },
                  { name: 'Traitement Hydrophobe', desc: 'Protection durable premium' }
                ].map((service, index) => (
                  <li key={index} className="group">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300" />
                      <div>
                        <div className="text-white font-medium text-sm">{service.name}</div>
                        <div className="text-gray-400 text-xs">{service.desc}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Informations */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <Info className="w-5 h-5 text-blue-400" />
                <span>Informations</span>
              </h3>
              <ul className="space-y-3">
                {[
                  { icon: Clock, text: '7j/7 • 8h-20h', desc: 'Flexibilité premium' },
                  { icon: MapPin, text: 'Herve & Région', desc: 'Service à domicile' },
                  { icon: Shield, text: 'Garantie 100%', desc: 'Satisfaction premium' },
                  { icon: Zap, text: 'Intervention 2h', desc: 'Réactivité premium' },
                  { icon: Award, text: 'Service Premium', desc: 'Excellence garantie' }
                ].map((info, index) => (
                  <li key={index} className="group">
                    <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-300">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{info.text}</div>
                        <div className="text-gray-400 text-xs">{info.desc}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Rapide */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                <span>Contact Rapide</span>
              </h3>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/32472303701"
                  className="group block bg-gradient-to-r from-green-500/10 to-green-600/10 hover:from-green-500/20 hover:to-green-600/20 border border-green-500/20 hover:border-green-500/40 rounded-xl p-4 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">WhatsApp Direct</div>
                      <div className="text-green-400 text-xs">Réponse immédiate</div>
                    </div>
                  </div>
                </a>

                <a 
                  href="tel:+32472303701"
                  className="group block bg-gradient-to-r from-blue-500/10 to-cyan-500/10 hover:from-blue-500/20 hover:to-cyan-500/20 border border-blue-500/20 hover:border-blue-500/40 rounded-xl p-4 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">+32 472 30 37 01</div>
                      <div className="text-blue-400 text-xs">24h/7j disponible</div>
                    </div>
                  </div>
                </a>

                <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">5/5 sur Google</div>
                      <div className="text-yellow-400 text-xs">50+ clients satisfaits</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Bas */}
          <div className="border-t border-white/10 pt-8 sm:pt-12">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
              
              {/* Copyright et Informations */}
              <div className="text-center lg:text-left">
                <div className="text-white mb-2">
                  <p className="text-base sm:text-lg font-semibold">&copy; 2025 Shine&Go Premium</p>
                  <p className="text-sm text-gray-400">Car wash & nettoyage automobile à Herve et sa région</p>
                  <p className="text-xs text-gray-400 mt-2">Rue Moreau, 20, 4650 Herve • +32 472 30 37 01</p>
                </div>
              </div>

              {/* Liens Légaux */}
              <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
                {[
                  { name: 'Mentions légales', href: '#' },
                  { name: 'Politique de confidentialité', href: '#' },
                  { name: 'Conditions générales', href: '#' },
                  { name: 'Cookies', href: '#' }
                ].map((link, index) => (
                  <a 
                    key={index}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Message Final */}
            <div className="text-center mt-6 pt-6 border-t border-white/5">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>Fait avec passion pour l'excellence premium automobile</span>
                <TrendingUp className="w-4 h-4 text-green-400" />
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
        <a 
          href="https://wa.me/32472303701"
          className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-110 animate-pulse"
        >
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-white" />
        </a>
      </div>
    </div>
  );
};

export default PremiumCarCleaningLanding;