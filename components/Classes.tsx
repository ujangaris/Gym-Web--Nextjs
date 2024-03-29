"use client";

import Image from "next/image";
import { CustomButton } from "./CustomButton";

const classes = [
  {
    name: "body building",
    img: "/assets/img/classes/bodybuilding.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error commodi modi natus.",
  },
  {
    name: "cardio",
    img: "/assets/img/classes/cardio.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error commodi modi natus.",
  },
  {
    name: "fitness",
    img: "/assets/img/classes/fitness.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error commodi modi natus.",
  },
  {
    name: "crossfit",
    img: "/assets/img/classes/crossfit.jpg",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error commodi modi natus.",
  },
];

export const Classes = () => {
  return (
    <section className="" id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, index) => {
          return (
            <div
              key={index}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >
              {/* overlay */}
              <div className="bg-black/50 absolute w-full h-full top-0 z-10"></div>
              <Image src={item.img} fill className="object-cover" alt="" />
              {/* text & btn */}
              <div className="z-30 max-w-[380px] text-center flex flex-col justify-center items-center gap-4">
                <h3 className="h3 text-accent">{item.name}</h3>
                <p className="text-white">{item.description}</p>
                <CustomButton
                  containerStyles="w-[164px] h-[46px]"
                  text="Read more"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
