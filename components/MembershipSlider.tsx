"use client";

// import swiper components
import { Swiper, SwiperSlide } from "swiper/react";

// import require modules
import { Pagination } from "swiper/modules";

// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Membership } from "./Membership";
// icon
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";
// component buttons
import { CustomButton } from "./CustomButton";

// membership data
const membershipData = [
  {
    title: "Standard",
    price: "30",
    benefit: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: MdClose,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: MdClose,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional ameniities",
      },
    ],
  },
  {
    title: "Ultimate",
    price: "45",
    benefit: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "full access to everything",
      },
      {
        icon: MdClose,
        text: "No additional ameniities",
      },
    ],
  },
  {
    title: "Profesional",
    price: "45",
    benefit: [
      {
        icon: FaCheck,
        text: "Includes membership",
      },
      {
        icon: FaCheck,
        text: "Access to all gym facilities",
      },
      {
        icon: FaCheck,
        text: "Diet plan included",
      },
      {
        icon: FaCheck,
        text: "Health and fitness tips",
      },
      {
        icon: FaCheck,
        text: "Monday-Friday gym access",
      },
      {
        icon: FaCheck,
        text: "full access to everything",
      },
      {
        icon: FaCheck,
        text: "No additional ameniities",
      },
    ],
  },
];
export const MembershipSlider = () => {
  return (
    <Swiper
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      className="min-h-[680px]"
    >
      {membershipData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="border border-accent hover:bg-primary-300/80 transition-all duration-300 w-full max-w-sm xl:max-w-none mx-auto">
              <div className="py-5 px-[60px] border-b border-accent">
                <h4 className="h4">{item.title}</h4>
              </div>
              {/* benefit */}
              <div className="py-[30px] px-[60px]">
                <ul className="flex flex-col gap-5 mb-7">
                  <li>
                    {item.benefit.map((item, index) => {
                      return (
                        <li key={index} className="flex items-center gap-2">
                          <item.icon className="text-accent text-lg" />
                          {item.text}
                        </li>
                      );
                    })}
                  </li>
                </ul>
                {/* price & button */}
                <p className="text-accent mb-8 flex gap-1 items-center">
                  <sup className="text-4xl">$</sup>
                  <strong className="text-6xl">{item.price}</strong>
                  <em className="self-end text-2xl">/mount</em>
                </p>
                <CustomButton
                  containerStyles="w-[196px] h-[62px]"
                  text="But now"
                />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
