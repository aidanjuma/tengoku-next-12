import React from "react";
import Image from "next/image";

const FeaturedContent = () => (
  <section id="featured-content">
    <div className="w-full h-[27.5rem] lg:h-[36rem]">
      <div
        className="banner h-[380px] lg:h-[500px]"
        style={{
          backgroundImage:
            "url(https://s4.anilist.co/file/anilistcdn/media/anime/banner/133844-uIaUmh5aJX3M.jpg)",
        }}
      />
      <div className="grid w-full h-under-banner px-5 lg:px-16">
        <div className="mt-[-190px] lg:mt-[-250px]">
          <div className="grid grid-cols-2 grid-rows-1">
            <div className="w-[160px] h-[226px] lg:w-[200px] lg:h-[282px] relative">
              <Image
                src="https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx133844-E32FjKZ0XxEs.jpg"
                alt={`Album image for the anime "Overlord IV".`}
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
            <div className="text-white">
              <h2 className="font-lexend font-medium text-2xl text-left pb-4">
                Overlord IV
              </h2>
              <div className="h-32 lg:h-44 webkit-rm-scrollbar overflow-y-scroll">
                <p className="font-normal text-base text-left fix-justify">
                  With his foundations now set in this new world, the first
                  steps of Ains Ooal Gown&apos;s master plan apparent begin to
                  come to fruition. The value of Carne village and especially
                  the political value of his alter ego Momon are reaffirmed; the
                  “hidden” genius of his actions is continuously met with shock
                  and awe by Demiurge, Albedo, the rest of his guardians, and
                  even Ains himself at his “great wisdom.” His attempts to act
                  in a way befitting the ruler of Nazarick, continuing to
                  further cement his guardian&apos;s loyalty, push him ever
                  further down the path of not-so-intentional world domination.
                  Without human conscience due to being undead, he is motivated
                  only to continue searching for other players from Yggdrasil
                  and to gain power to better protect the children and home of
                  him and his forty former companions. Lord Ains Ooal Gown
                  maintains his mantle of Overlord and leads the Great Tomb of
                  Nazarick unto the world stage, directly into a vicious power
                  struggle between two great empires.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default FeaturedContent;
