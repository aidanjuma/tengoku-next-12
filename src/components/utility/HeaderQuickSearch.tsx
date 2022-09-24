import React from "react";
import Link from "next/link";
import Image from "next/image";
import QuickSearch from "@components/utility/QuickSearch";
import { SearchOutline } from "@easy-eva-icons/react";

const HeaderQuickSearch = () => (
  <>
    <header>
      <nav className="w-full top-0 left-0 z-10 absolute">
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
          <SearchOutline
            className="w-8 h-8 text-white"
            cursor={"pointer"}
            onClick={revealQuickSearch}
          />
        </div>
      </nav>
    </header>
    <QuickSearch />
  </>
);

const revealQuickSearch = () => {
  const quickSearch = document.getElementById("quick-search");
  // Add scroll lock, show Quick Search...
  document.body.classList.add("overflow-hidden");
  quickSearch?.classList.remove("hidden");
  quickSearch?.classList.add("flex", "justify-center");
};

export default HeaderQuickSearch;
