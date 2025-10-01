import React from 'react';
import { ArrowRight, Award, Users, Clock } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-cream py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-thin text-deep-navy mb-8 tracking-widest">
            PREMIUM STONE
            <span className="block text-5xl md:text-6xl mt-4 font-light">SERVICES</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed tracking-wide">
            Handcrafted granite surfaces for discerning homeowners who appreciate 
            timeless elegance and uncompromising quality. Each piece is meticulously 
            crafted by master artisans in our private atelier.
          </p>
          <div className="mt-12">
            <a 
              href="#quote" 
              className="inline-flex items-center bg-deep-navy text-cream px-12 py-5 hover:bg-gray-800 transition-all duration-300 text-sm font-light tracking-widest uppercase space-x-4"
            >
              <span>Schedule Private Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          <div className="text-center">
            <Award className="h-12 w-12 text-pastel-blue mx-auto mb-6" />
            <h3 className="text-lg font-light text-deep-navy mb-4 tracking-wide uppercase">Master Craftsmen</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Three generations of stone artistry, creating heirloom pieces for the most discerning clientele.
            </p>
          </div>
          <div className="text-center">
            <Users className="h-12 w-12 text-pastel-blue mx-auto mb-6" />
            <h3 className="text-lg font-light text-deep-navy mb-4 tracking-wide uppercase">White-Glove Service</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              From initial consultation to final installation, experience unparalleled attention to detail.
            </p>
          </div>
          <div className="text-center">
            <Clock className="h-12 w-12 text-pastel-blue mx-auto mb-6" />
            <h3 className="text-lg font-light text-deep-navy mb-4 tracking-wide uppercase">Timeless Warranty</h3>
            <p className="text-gray-600 font-light leading-relaxed">
              Lifetime craftsmanship guarantee on all bespoke installations for complete peace of mind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;