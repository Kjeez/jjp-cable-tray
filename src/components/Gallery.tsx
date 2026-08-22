"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  "/products/10.jpeg", "/products/12.jpeg", "/products/13.jpeg",
  "/products/14.jpeg", "/products/15.jpeg", "/products/16.jpeg",
  "/products/17.jpeg", "/products/18.jpeg", "/products/19.jpeg",
  "/products/20.jpeg", "/products/21.jpeg", "/products/22.jpeg",
  "/products/23.jpeg", "/products/24.jpeg", "/products/25.jpeg",
  "/products/26.jpeg", "/products/27.jpeg", "/products/30.jpeg",
  "/products/31.jpeg", "/products/32.jpeg", "/products/33.jpeg",
  "/products/34.jpeg", "/products/35.jpeg", "/products/36.jpeg"
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="gallery" className="py-20 bg-[#EFF6FF]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Our <span className="text-[#FB923C]">Gallery</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            className="pb-14"
          >
            {galleryImages.map((src, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="overflow-hidden rounded-lg cursor-pointer"
                  onClick={() => {
                    setCurrentIndex(idx);
                    setLightboxOpen(true);
                  }}
                >
                  <Image
                    src={src}
                    alt={`Gallery ${idx + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Nav Buttons */}
          <div className="swiper-button-prev-custom absolute top-1/2 left-4 md:-left-12 -translate-y-1/2 z-10">
            <button className="bg-[#EF7F1A] text-white p-2 md:p-3 rounded-full hover:bg-[#d4700f]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          <div className="swiper-button-next-custom absolute top-1/2 right-4 md:-right-12 -translate-y-1/2 z-10">
            <button className="bg-[#EF7F1A] text-white p-2 md:p-3 rounded-full hover:bg-[#d4700f]">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={currentIndex}
        slides={galleryImages.map((src) => ({ src }))}
        plugins={[Thumbnails]}
      />
    </section>
  );
};

export default Gallery;
