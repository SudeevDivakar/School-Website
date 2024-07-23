import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "./school_carousel_1.jpg",
    "./school_carousel_2.jpg",
    "./school_carousel_3.jpg",
    "./school_carousel_4.jpg",
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="flex justify-center w-full">
      <div
        className="bg-gray-100 items-center w-5/6 overflow-hidden"
        style={{ height: "40rem" }}
      >
        <div className="relative w-full">
          <div
            id="carousel"
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="min-w-full"
                style={{ height: "40rem" }}
              >
                <img
                  loading="lazy"
                  src={src}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover "
                />
              </div>
            ))}
          </div>
          <button
            id="prev"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            id="next"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full focus:outline-none"
          >
            <FaArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
