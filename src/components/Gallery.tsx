
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

// Gallery items
const galleryItems = [
  {
    id: 1,
    title: "Corporate Brochure Design",
    category: "Digital Design",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/338481398/QK/FI/BG/12733862/brochure-1-1000x1000.jpg"
  },
  {
    id: 2,
    title: "Premium Business Cards",
    category: "Stationery",
    image: "https://www.creativefabrica.com/wp-content/uploads/2021/06/02/Stationery-Design-Template-Graphics-12812277-1-1-580x387.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Product Packaging Design",
    category: "Packaging",
    image: "https://kinmasindustries.com/wp-content/uploads/2024/05/3-01-1024x583.png?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Magazine Layout Design",
    category: "Booklets",
    image: "https://cms-assets.tutsplus.com/cdn-cgi/image/width=850/uploads/users/1631/posts/37387/image-upload/BookletDesign040.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=100"
  },
  {
    id: 5,
    title: "Large Format Banners",
    category: "Flex Printing",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/coca-cola-design-template-1b5a32042f35c5756ebb79ff5f8dbf69_screen.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Custom Product Labels",
    category: "Packaging",
    image: "https://www.cartonservice.com/wp-content/uploads/2016/12/Carton-Service-Food-Variety-2016.jpg?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

// Categories including "All"
const categories = ["All", ...new Set(galleryItems.map(item => item.category))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">Explore our portfolio of print and design projects</p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category
                  ? "bg-brand-blue text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all">
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center">
            Request Similar Project <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
