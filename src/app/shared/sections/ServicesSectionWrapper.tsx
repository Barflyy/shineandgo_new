import ServicesSection from '@/shared/components/ServicesSection';

interface ServicesSectionWrapperProps {
  className?: string;
}

export default function ServicesSectionWrapper({
  className = ""
}: ServicesSectionWrapperProps) {
  return (
    <section id="services-section" className={`w-full py-12 md:py-16 lg:py-20 container-mobile ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <ServicesSection />
      </div>
    </section>
  );
} 