
import React from 'react';

const SupportTools: React.FC = () => {
  return (
    <section className="py-16 bg-[#002f6c] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Support & Tools</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Find Your Local Office</h3>
            <p className="mb-6">Get personalized help from a Rural Development expert in your state.</p>
            <a href="#" className="bg-white text-[#002f6c] font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">Contact Us</a>
          </div>
          <div className="bg-white/10 p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Check Program Eligibility</h3>
            <p className="mb-6">Use our tools to see if you or your project may be eligible for our programs.</p>
            <a href="#" className="bg-white text-[#002f6c] font-bold py-3 px-6 rounded-md hover:bg-gray-200 transition-colors">Eligibility Tools</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportTools;
