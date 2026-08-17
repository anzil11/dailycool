import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import dailyCool2 from '../img/Daily cool 2.jpeg';
import dailyCool3 from '../img/Daily cool 3.jpeg';
import dailyCool4 from '../img/Daily cool 4.jpeg';
import dailyCool5 from '../img/Daily cool 5.jpeg';
import dailyCool6 from '../img/Daily cool 6.jpeg';
// import dailyCool7 from '../img/Daily cool 7.jpeg';
import dailyCool8 from '../img/Daily cool 8.jpeg';
import dailyCool9 from '../img/Daily cool 9.jpeg';
import dailyCool10 from '../img/Daily cool 10.jpeg';
import dailyCool101 from '../img/Screenshot 2026-08-18 001658.png';


interface GalleryImage {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    title: 'Central AC Installation',
    category: 'HVAC',
    image: dailyCool2,
    description: 'Professional central air conditioning installation in commercial building'
  },
  {
    id: 2,
    title: 'Electrical Switchgear Panel',
    category: 'Electrical',
    image: dailyCool3,
    description: 'DEWA-compliant LV electrical panel installation'
  },
  {
    id: 3,
    title: 'Plumbing Infrastructure',
    category: 'Plumbing',
    image: dailyCool4,
    description: 'Commercial plumbing system installation and maintenance'
  },
  {
    id: 4,
    title: 'VRF System Setup',
    category: 'HVAC',
    image: dailyCool5,
    description: 'Variable Refrigerant Flow system installation for luxury villas'
  },
  {
    id: 5,
    title: 'G.I Duct Network',
    category: 'Electrical',
    image: dailyCool6,
    description: 'Galvanized steel duct fabrication and installation'
  },
  // {
  //   id: 6,
  //   title: 'Water Tank Installation',
  //   category: 'Plumbing',
  //   image: dailyCool7,
  //   description: 'Large capacity water storage tank setup and testing'
  // },
  {
    id: 7,
    title: 'Chiller Unit Installation',
    category: 'HVAC',
    image: dailyCool8,
    description: 'Commercial chiller system installation in data center'
  },
  {
    id: 8,
    title: 'PPR Piping Network',
    category: 'Plumbing',
    image: dailyCool9,
    description: 'Modern PPR plastic piping system installation'
  },
  {
    id: 9,
    title: 'Building Maintenance',
    category: 'General',
    image: dailyCool10,
    description: 'Annual building maintenance and inspection services'
  },
    {
    id: 10,
    title: ' Maintenance',
    category: 'General',
    image: dailyCool101,
    description: 'Annual building maintenance and inspection services'
  },
];

export const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const categories = ['All', 'HVAC', 'Electrical', 'Plumbing', 'General'];
  
  const filteredImages = selectedCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    const index = selectedImage ? GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id) : 0;
    const prevIndex = index === 0 ? GALLERY_IMAGES.length - 1 : index - 1;
    setSelectedImage(GALLERY_IMAGES[prevIndex]);
  };

  const handleNextImage = () => {
    const index = selectedImage ? GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id) : 0;
    const nextIndex = index === GALLERY_IMAGES.length - 1 ? 0 : index + 1;
    setSelectedImage(GALLERY_IMAGES[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white pt-20 pb-16">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0B2B40] mb-4">
            Project Gallery
          </h1>
          <p className="text-lg text-slate-600">
            Explore our MEP expertise through completed projects and installations
          </p>
        </div>

        {/* Category Filter */}
        {/* <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentIndex(0);
              }}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-cyan-600 text-white shadow-lg'
                  : 'bg-white border border-slate-300 text-slate-700 hover:border-cyan-400 hover:text-cyan-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div> */}
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(image)}
              className="group cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative h-64 overflow-hidden bg-slate-200">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                    <p className="text-sm text-slate-200">{image.category}</p>
                  </div>
                </div> */}
              </div>
              {/* <div className="p-4 bg-white">
                <h3 className="font-bold text-slate-900 mb-2">{image.title}</h3>
                <p className="text-sm text-slate-600">{image.description}</p>
                <span className="inline-block mt-3 text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                  {image.category}
                </span>
              </div> */}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>

            {/* Image */}
            <div className="relative w-full h-96 sm:h-[500px] bg-slate-200 overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-cover"
              />

              {/* Navigation Buttons */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
              >
                <ChevronLeft className="w-6 h-6 text-slate-900" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 rounded-full hover:bg-white transition-all"
              >
                <ChevronRight className="w-6 h-6 text-slate-900" />
              </button>
            </div>

            {/* Image Info */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {selectedImage.title}
                  </h2>
                  <p className="text-slate-600 text-base mb-4">
                    {selectedImage.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="inline-block text-sm font-semibold text-cyan-600 bg-cyan-50 px-4 py-2 rounded-full">
                  {selectedImage.category}
                </span>
                <span className="text-sm text-slate-500">
                  {GALLERY_IMAGES.findIndex(img => img.id === selectedImage.id) + 1} / {GALLERY_IMAGES.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
