
import { Check } from 'lucide-react';

const advantages = [
  "Over 10 years of industry experience",
  "Expert designers with creative vision",
  "High-quality printing technology",
  "Quick turnaround times",
  "Competitive pricing",
  "Exceptional customer service"
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image side */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="4P Packages Team" 
                className="rounded-lg shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-brand-orange p-4 md:p-6 rounded-lg shadow-xl hidden md:block">
                <span className="text-white font-bold text-lg md:text-xl">Since 2014</span>
              </div>
            </div>
          </div>
          
          {/* Text side */}
          <div className="lg:w-1/2">
            <h2 className="section-title">About 4P Packages</h2>
            <p className="text-gray-600 mb-6">
              At 4P Packages, we combine creativity with technical expertise to deliver exceptional print and design solutions. 
              Our team of skilled professionals is dedicated to transforming your ideas into high-quality printed materials 
              that effectively communicate your brand message.
            </p>
            <p className="text-gray-600 mb-8">
              Whether you need digital designs, offset printing, flexo printing, or comprehensive corporate printing solutions, 
              we have the expertise and technology to meet your specific requirements with precision and excellence.
            </p>
            
            {/* Advantages list */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-center">
                  <div className="rounded-full bg-brand-lightBlue p-1 mr-2">
                    <Check className="text-brand-blue w-4 h-4" />
                  </div>
                  <span className="text-gray-700">{advantage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
