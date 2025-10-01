import React from 'react';
import { Home, Coffee, Flame, Building } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Coffee,
      title: "Culinary Surfaces",
      description: "Bespoke kitchen countertops crafted from the world's finest granite selections, designed for the passionate home chef.",
      features: ["Custom edge profiles", "Integrated drainage", "Heat-resistant finish", "Lifetime sealing"]
    },
    {
      icon: Home,
      title: "Private Retreats",
      description: "Luxurious bathroom vanities and surfaces that transform your personal sanctuary into a spa-like retreat.",
      features: ["Waterproof sealing", "Custom vessel integration", "Heated surface options", "Anti-bacterial treatment"]
    },
    {
      icon: Flame,
      title: "Architectural Features",
      description: "Statement fireplaces and accent walls that serve as the centerpiece of sophisticated living spaces.",
      features: ["Heat-resistant materials", "Custom dimensions", "Artistic veining", "Seamless installation"]
    },
    {
      icon: Building,
      title: "Commercial Elegance",
      description: "Premium granite installations for luxury hotels, restaurants, and high-end commercial spaces.",
      features: ["High-traffic durability", "Brand customization", "Expedited timelines", "Maintenance programs"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-deep-navy text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-thin mb-8 tracking-widest">SIGNATURE COLLECTIONS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Each collection represents decades of expertise in stone selection, 
            craftsmanship, and installation excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <service.icon className="h-12 w-12 text-pastel-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-light mb-4 tracking-wide uppercase">{service.title}</h3>
                  <p className="text-gray-300 mb-6 font-light leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400 font-light">
                        <span className="w-2 h-2 bg-pastel-blue rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;