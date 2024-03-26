import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="fixed left-0 right-0 w-full bg-primary-200 h-[100px]">
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* logo */}
        <Link href="">
          <Image src={"/assets/img/logo.png"} width={117} height={55} />
        </Link>
        {/* mobile nav - hidden on large device */}
        <MobileNav containerStyles="text-white xl:hidden" />
        {/* desktop nav - hidden on small device */}
        <Nav containerStyles=" flex gap-4 text-white hidden xl:flex" />
      </div>
    </header>
  );
};
