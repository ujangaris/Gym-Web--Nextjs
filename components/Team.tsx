"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import { CustomButton } from "./CustomButton";

const trainerData = [
  {
    image: "/assets/img/trainers/david.jpg",
    name: "David Williams",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quae omnis libero.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/rosy.jpg",
    name: "Rosy Rivera",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quae omnis libero.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/matt.jpg",
    name: "Matt Stone",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quae omnis libero.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
  {
    image: "/assets/img/trainers/sofia.jpg",
    name: "Sofia Lauren",
    role: "Body builder coach",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt quae omnis libero.",
    social: [
      { icon: FaFacebook, href: "http://facebook.com" },
      { icon: FaTwitter, href: "http://twitter.com" },
      { icon: FaYoutube, href: "http://youtube.com" },
    ],
  },
];

export const Team = () => {
  return (
    <section className="py-12 xl:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 text-center mb-6">Our Trainers</h2>
        {/* trainers grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-12 mb-12">
          {trainerData.map((trainer, index) => {
            return (
              <div
                className="flex flex-col items-center text-center"
                key={index}
              >
                {/* image */}
                <div className="relative w-[320px] h-[360px] mx-auto mb-4">
                  <Image src={trainer.image} alt="" fill />
                </div>
                {/* name */}
                <h4 className="h4 mb-2">{trainer.name}</h4>
                {/* role */}
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {trainer.role}
                </p>
                {/* description */}
                <p className="mb-6 max-w-[320px] mx-auto">
                  {trainer.description}
                </p>
                {/* social */}
                <div className="flex gap-12 justify-center">
                  {trainer.social.map((social, index) => {
                    return (
                      <div className="" key={index}>
                        <Link
                          href={social.href}
                          className="hover:text-accent transition-all"
                        >
                          <social.icon className="text-lg" />
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        {/* btn */}
        <div className="">
          <CustomButton
            containerStyles="w-[196px] h-[62px]"
            text="See all trainers"
          />
        </div>
      </div>
    </section>
  );
};
