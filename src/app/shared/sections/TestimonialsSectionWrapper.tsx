import Testimonials from '@/shared/components/Testimonials';

interface TestimonialsSectionWrapperProps {
  className?: string;
}

export default function TestimonialsSectionWrapper({
  className = ""
}: TestimonialsSectionWrapperProps) {
  return (
    <section id="testimonials-section" className={`w-full py-12 md:py-16 lg:py-20 container-mobile ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <Testimonials />
      </div>
    </section>
  );
} 