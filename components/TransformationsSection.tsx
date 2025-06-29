import React, { useState } from 'react';
import Image from 'next/image';

const TransformationsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      before: '/transformations/before1.jpeg',
      after: '/transformations/after1.jpeg',
    },
    {
      before: '/transformations/before2.jpeg',
      after: '/transformations/after2.jpeg',
    },
    {
      before: '/transformations/before3.jpeg',
      after: '/transformations/after3.jpeg',
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-12">
          Nos Transformations
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-video mb-6 sm:mb-8">
            <div className="relative w-full h-full">
              <Image
                src={transformations[activeIndex].before}
                alt="Avant"
                fill
                className="object-cover rounded-lg sm:rounded-xl"
              />
              <div
                className="absolute top-0 left-0 h-full overflow-hidden"
                style={{ width: '50%' }}
              >
                <Image
                  src={transformations[activeIndex].after}
                  alt="Après"
                  fill
                  className="object-cover rounded-l-lg sm:rounded-l-xl"
                />
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                <div className="w-1 h-10 sm:h-12 bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-blue-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Voir la transformation ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationsSection; 