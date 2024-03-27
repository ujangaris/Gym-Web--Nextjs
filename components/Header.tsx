"use client";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdMenu } from "react-icons/md";

export const Header = () => {
  const [headerActive, setHeaderActive] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setHeaderActive(window.scrollY > 50);
    };
    // add scroll event
    window.addEventListener("scroll", handleScroll);
    // clear scroll event
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // console.log(headerActive);
  return (
    <header
      className={`${
        headerActive ? "h-[100px]" : "h-[124px]"
      } fixed max-w-[1920px] top w-full bg-primary-200 h-[100px] transition-all z-50`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image
            src={"/assets/img/logo.png"}
            width={117}
            height={55}
            alt="logo"
          />
        </Link>
        {/* mobile nav - hidden on large device */}
        <MobileNav
          containerStyles={`${headerActive ? "top-[90px]" : "top-[124px]"}
          ${
            openNav
              ? "max-h-max pt-8 pb-10 border-t border-white/10"
              : "max-h-0 pt-0 pb-0 overflow-hidden border-white/0"
          }
          flex flex-col text-white text-center gap-8 fixed bg-primary-200 w-full left-0  text-base uppercase font-medium xl:hidden transition-all`}
        />
        {/* desktop nav - hidden on small device */}
        <Nav containerStyles=" flex gap-4 text-white hidden xl:flex" />
        {/* hiden/open menu button */}
        <div className="">
          <button onClick={()=> setOpenNav(!openNav)} className="text-white xl:hidden">
            <MdMenu className="text-4xl" />
          </button>
        </div>
      </div>
    </header>
  );
};
