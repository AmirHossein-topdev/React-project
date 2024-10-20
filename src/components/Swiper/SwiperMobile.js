import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./SwiperMobile.css";
// import required modules
import { EffectCards } from "swiper/modules";
import { NavLink } from "react-router-dom";
import data from "../data";
export default function App() {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        {data.map((cource) => (
          <SwiperSlide
            key={cource.id}
            className="odd:bg-orange-800 even:bg-blue-800 rounded-xl "
          >
            <img src={cource.image} alt="logo" className="rounded-lg" />
            <h3 className="bg-transparent text-white text-lg font-[vazir] text-center">
              {cource.title}
            </h3>
            <div className="flex bg-transparent mt-2 p-2">
              <img
                src="/images/me.jpg"
                alt=""
                className="size-12 rounded-full"
              />
              <div className="bg-transparent">
                <h4 className="bg-transparent px-2 text-white">Master</h4>
                <h4 className="bg-transparent px-2 text-slate-900 font-bold">
                  AmirHossein M.F
                </h4>
              </div>
            </div>
            <div className="bg-transparent p-3">
              <h3 className="text-white bg-transparent text-lg">price</h3>
              <h4 className="bg-transparent px-2 text-slate-900 font-bold">
                {cource.price}
              </h4>
            </div>
            <div className="w-full text-center bg-transparent mt-2">
              <NavLink className="bg-teal-800 text-white text-lg font-[vazir] bottom-1 p-2 rounded-xl ">
                View More
              </NavLink>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
