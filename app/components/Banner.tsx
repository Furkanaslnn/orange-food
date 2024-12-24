import React from "react";
import { useState, useEffect } from "react";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "yapayzeka_card.png",
      title: "Yapay Zeka Yemek Tarifleri",
      description:
        "Hayalinizdeki tarifleri oluşturmak için yapay zeka kullanın.",
      buttonText: "Keşfet",
      buttonLink: "/ai-recipes",
    },
    {
      image: "tarif_card.png",
      title: "Tarif Kategorileri",
      description: "Tüm yemek tariflerini kolayca keşfet.",
      buttonText: "İncele",
      buttonLink: "/categories",
    },
    {
      image: "gunlukmenu_card.png",
      title: "Günlük Menü",
      description: "Her gün için özel hazırlanmış menülere göz at.",
      buttonText: "Gör",
      buttonLink: "/daily-menu",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div>
        <div className="relative bg-gray-100 dark:bg-gray-800 ">
          {/* Slide Görüntüsü */}
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full min-h-96 object-cover sm:h-[30rem] md:h-[35rem] lg:h-[40rem]"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-3xl sm:text-5xl font-bold mb-4">
                {slides[currentIndex].title}
              </h1>
              <p className="text-lg sm:text-xl mb-6">
                {slides[currentIndex].description}
              </p>
              <button
                className="px-6 py-3 bg-orange-600 rounded-md text-white font-medium hover:bg-orange-700"
                onClick={() =>
                  (window.location.href = slides[currentIndex].buttonLink)
                }
              >
                {slides[currentIndex].buttonText}
              </button>
            </div>
          </div>

          {/* Kaydırma Kontrolleri */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none"
          >
            ‹
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-3xl font-bold focus:outline-none"
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
