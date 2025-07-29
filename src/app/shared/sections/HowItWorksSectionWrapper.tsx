import HowItWorks from '@/shared/components/HowItWorks';

interface HowItWorksSectionWrapperProps {
  className?: string;
}

export default function HowItWorksSectionWrapper({
  className = ""
}: HowItWorksSectionWrapperProps) {
  return (
    <section className={`w-full py-12 md:py-16 lg:py-20 container-mobile ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <HowItWorks />
      </div>
    </section>
  );
} 