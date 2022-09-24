import React from "react";
import Image from "next/image";
import InfoTitle from "@components/dynamic/info/InfoTitle";
import WatchEpisodeButton from "@components/dynamic/info/WatchEpisodeButton";
import { IAnimeEpisode, ITitle } from "@consumet/extensions/dist/models";

export interface InfoHeroProps {
  id: string;
  title: string | ITitle;
  cover?: string;
  image?: string;
  description?: string;
  episodes?: IAnimeEpisode[];
}

const InfoHero = (props: InfoHeroProps) => {
  return (
    /* Hero: Album/Cover images, watch first episode button. */
    <main className="w-full h-[40vh] lg:h-[500px]" id="info-hero">
      {/* Cover image: i.e. full-spread image for anime. */}
      <div className="overflow-hidden h-full">
        <div
          className="banner h-full"
          style={{
            backgroundImage: `url(${props.cover})`,
            filter: "blur(0.25rem)",
          }}
        />
      </div>
      {/* Album image: i.e. profile picture for anime. */}
      <div className="w-full h-fit">
        <div className="grid w-full h-fit px-5 lg:px-20">
          <div className="mt-[-190px] lg:mt-[-250px]">
            <div className="grid grid-cols-1 grid-rows-[1.6fr 0.4fr] justify-items-center">
              {props.image && (
                <div className="w-[160px] h-[226px] lg:w-[200px] lg:h-[282px] relative">
                  <Image
                    src={props.image}
                    alt={`Album image for anime of ID: "${props.id}".`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded"
                  />
                </div>
              )}
              <InfoTitle title={props.title} />
            </div>
          </div>
        </div>
        {/* Click button: watch first episode. */}
        <div className="flex flex-col items-center pt-5 w-full h-fit">
          {props.episodes!.length > 1 && (
            <WatchEpisodeButton
              id={props.id}
              episodeId={props.episodes![0].id}
              episodeNumber={"1"}
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default InfoHero;
