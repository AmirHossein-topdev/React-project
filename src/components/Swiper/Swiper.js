import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./swiper.css"; // Ensure this CSS file has the necessary styles

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={1}
        pagination={{
          clickable: true,
        }}
        loop={true} // Enable infinite loop
        autoplay={{
          delay: 2000, // Change slide every 2 seconds
          disableOnInteraction: false, // Allow interaction after autoplay starts
        }}
        modules={[Pagination, Autoplay]} // Include the Autoplay module
        className="h-24 w-full p-5"
        breakpoints={{
          320: {
            slidesPerView: 5, // Optional: default for extra small displays
          },
          640: {
            slidesPerView: 7, // 7 slides per view on small displays
          },
          1024: {
            slidesPerView: 10, // 10 slides per view on larger displays
          },
        }}
      >
        {/* Slides */}
        {[
          "android-logo.svg",
          "css-logo.svg",
          "figma-logo.svg",
          "firebase-logo.svg",
          "flutter-logo.svg",
          "html-logo.svg",
          "nest-logo.svg",
          "react-logo.svg",
          "sketch-logo.svg",
          "swift-logo.svg",
          "tailwind-logo.svg",
          "vue-js-logo.svg",
          "webpack-logo.svg",
          "node-js-logo.svg",
        ].map((logo, index) => (
          <SwiperSlide key={index} className="remove-bg">
            <img
              src={`images/${logo}`}
              alt="logo"
              className="size-16 p-2 bg-slate-600 rounded-full transition-shadow"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
