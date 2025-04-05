
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">
              <span className="text-brand-blue">4P</span>
              <span className="text-brand-orange">Packages</span>
            </h4>
            <p className="text-gray-400 mb-4">
              Professional print and design solutions for all your business needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Our Services</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Digital Design</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Offset Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Flexo Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Stationery Printing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Booklet Design</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contact Info</h4>
            <address className="not-italic text-gray-400">
              <p className="mb-2">Habib shoping centre,</p>
              <p className="mb-2">Multan Rd, Hanjarwal, Lahore, Pakistan</p>
              <p className="mb-2">Phone: +92 (321) 940-9842</p>
              <p className="mb-2">Email: info@4ppackages.com</p>
            </address>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} 4P Packages. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
