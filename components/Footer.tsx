"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { CustomButton } from "./CustomButton";

export const Footer = () => {
  return (
    <footer className="bg-primary-300 pt-24">
      <div className="container mx-auto pb-24">
        <div className="text-white grid grid-cols-1 xl:grid-cols-4 gap-x-8 gap-y-12">
          {/* info */}
          <div className="flex flex-col gap-4">
            <Link href="#">
              <Image
                src={"/assets/img/logo.png"}
                alt=""
                width={117}
                height={55}
              />
            </Link>
            <p className="max-w-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              dolorum.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-xl text-accent" />
                <span>Lincoln Park Chicago, Illinois</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt className="text-xl text-accent" />
                <span>(510) 710-3464 (510) 640-6326</span>
              </li>
              <li>
                <Link href="#" className="flex items-center gap-4">
                  <FaEnvelope className="text-xl text-accent" />
                  <span>sayhello@email.com</span>
                </Link>
              </li>
            </ul>
          </div>
          {/* blog */}
          <div className="">
            <h4 className="h4 text-accent mb-4">Recent blog post</h4>
            {/* post */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all excercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post 2 */}
            <div className="border-b border-dotted border-gray-400 flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all excercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
            {/* post 3*/}
            <div className="flex flex-col gap-3 pb-3 mb-4">
              <Link href="#" className="hover:text-accent transition-all">
                <h5 className="h5 leading-snug">
                  How to stay motivated for all excercises
                </h5>
                <p className="text-gray-400 text-[12px] tracking-[3px] uppercase">
                  September 22, 2024
                </p>
              </Link>
            </div>
          </div>
          {/* gallery */}
          <div className="">
            <h4 className="h4 text-accent mb-4">
              {/* gallery img */}
              <div className="flex flex-wrap gap-2">
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/david.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/matt.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/rosy.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/sofia.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/rosy.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/david.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
                <Link href="#">
                  <Image
                    src={"/assets/img/trainers/matt.jpg"}
                    alt=""
                    width={100}
                    height={100}
                  />
                </Link>
              </div>
            </h4>
          </div>
          {/* newsletter */}
          <div className="">
            <h4 className="h4 text-accent mb-4">Newsletter</h4>
            <div className="flex flex-col gap-4">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Molestiae, ab.
              </p>
              <form className="flex items-center">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="h-[50px] outline-none px-4 text-primary-300"
                />
                <CustomButton containerStyles="h-[50px] px-8" text="Send" />
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* copyright */}
      <div className="text-white border-t border-white/20 py-12">
        <div className="container mx-auto h-full">
          <div className="flex justify-between items-center h-full">
            <span className="">&copy; Copyright 2024 Ujang Arisandi</span>
            <ul className="flex gap-4 text-xl">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-accent transition-all"
                >
                  <FaYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
