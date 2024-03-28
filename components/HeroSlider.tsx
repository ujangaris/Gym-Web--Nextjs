"use client";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper style
import "swiper/css";
import "swiper/css/navigation";
// components
import { CustomButton } from "./CustomButton";

export const HeroSlider = () => {
  return (
    <Swiper>
      <SwiperSlide >
        <div className="h-full flex justify-end pt-48">

        <div className="flex flex-col items-center lg:items-start lg:max-w-[700px]">

        <h1 className="h1 text-center lg:text-left mb-2">
          <span>Where hard</span>work meets success
        </h1>
        <p className="text-white italic text-center lg:text-left mb-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit odio
          quia totam.
        </p>
        <CustomButton
          text="Get started"
          containerStyles="w-[196px] h-[62px] "
        />
        </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
