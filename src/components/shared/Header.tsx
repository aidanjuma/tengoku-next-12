import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";

const Header = () => (
  <header className="w-full top-0 left-0 absolute">
    <div className="flex justify-between items-center mx-auto px-12 py-6">
      <Link href="/">
        <Image
          src="/tengoku.svg"
          alt="天国, or tengoku - the Japanese word for 'Heaven'"
          width={90}
          height={50}
          className="hover:cursor-pointer"
        />
      </Link>
      <MagnifyingGlassIcon className="w-8 h-8 text-white" cursor={"pointer"} />
    </div>
  </header>
);

export default Header;
