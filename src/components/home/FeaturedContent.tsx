import React from "react";
import Image from "next/image";

const FeaturedContent = () => (
  <section id="featured-content-section" className="w-full h-[35rem]">
    <div
      className="banner"
      style={{
        backgroundImage:
          "url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/133844-uIaUmh5aJX3M.jpg)",
      }}
    ></div>
    <div className="grid w-full h-under-banner px-6">
      <div className="mt-[-110px]">
        <div className="grid justify-items-start">
          <Image
            src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133844-E32FjKZ0XxEs.jpg"
            alt="Overlord IV's album image."
            width={130}
            height={184}
          />
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedContent;
