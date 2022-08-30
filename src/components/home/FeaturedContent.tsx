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
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="w-[130px] h-[184px] md:w-[150px] md:h-[212px] lg:w-[200px] lg:h-[282px] relative">
            <Image
              src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133844-E32FjKZ0XxEs.jpg"
              alt="Overlord IV's album image."
              layout="fill"
              objectFit="cover"
            />
          </div>
          <h2 className="font-lexend font-medium text-right text-3xl text-white">
            Overlord IV
          </h2>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedContent;
