import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Tripic1 from '../assets/Tri_pic1.jpg';
import Tripic2 from '../assets/Tri_pic2.jpg';
import Tripic3 from '../assets/Tri_pic3.jpg';
import Tripic4 from '../assets/tri5.jpg';
import Tripic5 from '../assets/tri4.jpg';




export default function GallerySection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleItems, setVisibleItems] = useState(8);

  const allGalleryItems = [
    {
      id: 1,
      image: Tripic1,
    },
    {
      id: 2,
      image: Tripic2,
    },
    {
      id: 3,
      image: Tripic3,
    },
    {
      id: 4,
      image: Tripic4,
    },
    {
      id: 5,
      image:Tripic5,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1639762681033-6461854d8c73?w=800&h=800&fit=crop",
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop",
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
    },
    {
      id: 10,
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=800&fit=crop",
    },
    {
      id: 11,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop",
    },
    {
      id: 12,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop",
    },
    {
      id: 13,
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
    },
    {
      id: 14,
      image: "https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=800&h=800&fit=crop",
    },
    {
      id: 15,
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=800&fit=crop",
    },
    {
      id: 16,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=800&fit=crop",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % allGalleryItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + allGalleryItems.length) % allGalleryItems.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12 md:py-20 px-4 md:px-8">
      {/* Section Header */}
      <div className="max-w-6xl mx-auto mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Work Memories
          </span>
        </h2>
        <p className="text-center text-gray-300 text-sm sm:text-base md:text-lg">
          30 Years of Innovation & Impact
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
          {allGalleryItems.slice(0, visibleItems).map((item, index) => (
            <div
              key={item.id}
              onClick={() => {
                setCurrentIndex(index);
                setSelectedImage(item);
              }}
              className="group relative h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden cursor-pointer border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
            >
              <img
                src={item.image}
                alt={`Memory ${item.id}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 rounded-full bg-cyan-400/80 flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-900" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.5 1.5H5.75A2.25 2.25 0 003.5 3.75v12.5A2.25 2.25 0 005.75 18.5h8.5a2.25 2.25 0 002.25-2.25V9.75M14 6.5V3m0 3.5L11 4.5m3 3L17 4.5M10 10v4.5M10 10H8.5M10 10h1.5" strokeWidth="1.5" stroke="currentColor" fill="none" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < allGalleryItems.length && (
          <div className="flex justify-center mt-12 md:mt-16">
            <button
              onClick={() => setVisibleItems(prev => prev + 4)}
              className="px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-slate-900 font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Load More
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-cyan-400 transition-colors p-2"
          >
            <X size={32} />
          </button>

          {/* Main Image */}
          <div className="relative w-full max-w-4xl h-96 md:h-[600px]">
            {allGalleryItems.map((item, index) => (
              <div
                key={item.id}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={item.image}
                  alt={`Memory ${item.id}`}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:-translate-x-20 z-30 bg-cyan-500/20 hover:bg-cyan-500/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-20 z-30 bg-cyan-500/20 hover:bg-cyan-500/40 text-white p-2 md:p-3 rounded-full transition-all duration-300"
            >
              <ChevronRight size={32} />
            </button>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full backdrop-blur">
              <span className="text-white text-sm">
                {currentIndex + 1} / {allGalleryItems.length}
              </span>
            </div>
          </div>

          {/* Thumbnail Strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <div className="flex gap-2 overflow-x-auto pb-2 max-w-6xl mx-auto">
              {allGalleryItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  className={`flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                    index === currentIndex
                      ? "border-cyan-400 shadow-lg shadow-cyan-400/50"
                      : "border-gray-700 hover:border-cyan-500/50 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={item.image}
                    alt={`Thumb ${item.id}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}