import React, { useState } from 'react';
import { Calculator, Send } from 'lucide-react';

const QuoteForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    squareFootage: '',
    graniteType: '',
    timeline: '',
    description: '',
    budget: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Quote request:', formData);
    alert('Thank you for your consultation request! Our design team will contact you within 24 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      squareFootage: '',
      graniteType: '',
      timeline: '',
      description: '',
      budget: ''
    });
  };

  return (
    <section id="quote" className="py-24 bg-deep-navy text-cream">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Calculator className="h-12 w-12 text-pastel-blue mx-auto mb-6" />
          <h2 className="text-5xl font-thin mb-8 tracking-widest">PRIVATE CONSULTATION</h2>
          <p className="text-xl text-gray-300 font-light leading-relaxed">
            Begin your journey with a complimentary design consultation. 
            Our master craftsmen will guide you through our exclusive collections.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-cream text-deep-navy p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Project Type</label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              >
                <option value="">Select Project Type</option>
                <option value="kitchen">Culinary Surface</option>
                <option value="bathroom">Private Retreat</option>
                <option value="fireplace">Architectural Feature</option>
                <option value="commercial">Commercial Elegance</option>
                <option value="other">Bespoke Design</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Square Footage</label>
              <input
                type="number"
                name="squareFootage"
                value={formData.squareFootage}
                onChange={handleChange}
                placeholder="Approximate square footage"
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              />
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Stone Collection</label>
              <select
                name="graniteType"
                value={formData.graniteType}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              >
                <option value="">Select Collection</option>
                <option value="midnight">Midnight Collection</option>
                <option value="arctic">Arctic Collection</option>
                <option value="storm">Storm Collection</option>
                <option value="sand">Sand Collection</option>
                <option value="signature">Signature Collection</option>
                <option value="consultation">Design Phase</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Timeline</label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              >
                <option value="">Select Timeline</option>
                <option value="immediate">Immediate Priority</option>
                <option value="1-month">Within 30 Days</option>
                <option value="2-3-months">2-3 Months</option>
                <option value="3-6-months">3-6 Months</option>
                <option value="planning">Planning Phase</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Investment Range</label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light"
              >
                <option value="">Select Investment Range</option>
                <option value="under-10k">Under $10,000</option>
                <option value="10k-25k">$10,000 - $25,000</option>
                <option value="25k-50k">$25,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">$100,000+</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <label className="block text-sm font-light text-gray-700 mb-3 tracking-wide uppercase">Project Vision</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Share your vision, aesthetic preferences, and any specific requirements..."
              className="w-full px-4 py-4 border border-gray-200 focus:ring-1 focus:ring-pastel-blue focus:border-pastel-blue transition-colors font-light resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-deep-navy text-cream py-5 px-8 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center space-x-3 text-sm font-light tracking-widest uppercase mt-12"
          >
            <Send className="h-4 w-4" />
            <span>Request Consultation</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuoteForm;