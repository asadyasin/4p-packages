
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import About from '@/components/About';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Main content */}
      <main>
        <Hero />
        
        {/* Features section */}
        <section className="py-12 bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-brand-lightBlue p-6 rounded-lg flex flex-col items-center text-center">
                <span className="font-bold text-xl text-brand-darkBlue mb-2">Expert Design</span>
                <p className="text-gray-600">Creative professionals to bring your ideas to life</p>
              </div>
              
              <div className="bg-brand-lightOrange p-6 rounded-lg flex flex-col items-center text-center">
                <span className="font-bold text-xl text-brand-orange mb-2">Quality Printing</span>
                <p className="text-gray-600">Superior quality materials and printing technology</p>
              </div>
              
              <div className="bg-brand-lightBlue p-6 rounded-lg flex flex-col items-center text-center">
                <span className="font-bold text-xl text-brand-darkBlue mb-2">Fast Turnaround</span>
                <p className="text-gray-600">Quick delivery without compromising on quality</p>
              </div>
            </div>
          </div>
        </section>
        
        <Services />
        <Gallery />
        <About />
        
        {/* CTA section */}
        <section className="py-16 bg-brand-darkBlue">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Next Print Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let us help you bring your ideas to life with our professional design and printing services.
            </p>
            <a href="#contact" className="inline-flex items-center bg-brand-orange hover:bg-amber-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Get a Free Quote <ArrowRight size={20} className="ml-2" />
            </a>
          </div>
        </section>
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
