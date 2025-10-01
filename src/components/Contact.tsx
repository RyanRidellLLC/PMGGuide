import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin text-deep-navy mb-8 tracking-widest">ATELIER DIRECT</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Visit our private showroom to experience our stone collections firsthand, 
            or reach out to begin your bespoke design journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <Phone className="h-8 w-8 text-pastel-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light text-deep-navy mb-2 tracking-wide uppercase">Direct Line</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  801-350-1446<br />
                  <span className="text-sm text-gray-500">By appointment only</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <Mail className="h-8 w-8 text-pastel-blue flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-light text-deep-navy mb-2 tracking-wide uppercase">Correspondence</h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  design@artisanstone.com<br />
                  <span className="text-sm text-gray-500">Response within 24 hours</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-pastel-blue mx-auto mb-4" />
              <p className="text-gray-600 font-light">Interactive showroom map</p>
              <p className="text-sm text-gray-500 mt-2">Available upon consultation booking</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;