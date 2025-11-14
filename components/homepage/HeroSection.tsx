
import React from 'react';

interface HeroSectionProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
  reverse?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ imageUrl, title, subtitle, buttonText, reverse = false }) => {
  const textContainerClasses = `w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center ${reverse ? 'md:order-last' : ''}`;
  
  return (
    <section className="flex flex-col md:flex-row items-center bg-white">
      <div className={textContainerClasses}>
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#002f6c] mb-4">{title}</h1>
        <p className="text-lg text-gray-700 mb-6">{subtitle}</p>
        <a href="#" className="bg-[#005ea2] text-white font-bold py-3 px-6 rounded-md self-start hover:bg-[#002f6c] transition-colors">
          {buttonText}
        </a>
      </div>
      <div className="w-full md:w-1/2 h-64 md:h-auto md:min-h-[500px]">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover"/>
      </div>
    </section>
  );
};

export default HeroSection;
