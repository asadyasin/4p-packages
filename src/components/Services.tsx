
import { Image, FileText, Printer, Book, Layers, Package, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 1,
    title: "Digital Design",
    description: "Professional digital designs for all your marketing needs including logos, brochures, and digital assets.",
    icon: Image
  },
  {
    id: 2,
    title: "Stationery Printing",
    description: "High-quality business cards, letterheads, envelopes, and complete corporate stationery packages.",
    icon: FileText
  },
  {
    id: 3,
    title: "Various Print Technologies",
    description: "Offset printing, flexo printing, gravure printing, and flex printing to meet all your requirements.",
    icon: Printer
  },
  {
    id: 4,
    title: "Booklet Design & Printing",
    description: "Custom booklet design and printing services for catalogs, manuals, and promotional materials.",
    icon: Book
  },
  {
    id: 5,
    title: "Corporate Print Solutions",
    description: "Comprehensive printing services tailored to your company's brand and design specifications.",
    icon: Layers
  },
  {
    id: 6,
    title: "Package Design & Printing",
    description: "Creative packaging solutions that enhance your product's appeal and protect its contents.",
    icon: Package
  }
];

const ServiceCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col h-full">
      <div className="rounded-full bg-brand-lightBlue p-3 w-12 h-12 flex items-center justify-center mb-4">
        <Icon className="text-brand-blue" size={24} />
      </div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
      <a href="#contact" className="text-brand-blue font-medium mt-4 inline-flex items-center hover:text-brand-darkBlue transition-colors">
        Learn more <ArrowRight size={16} className="ml-1" />
      </a>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive print and design solutions for all your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
