import React from "react";
import Image from "next/image";
import InfoTitle from "@components/info/InfoTitle";
import WatchEpisodeButton from "@components/info/WatchEpisodeButton";
import DisplayInfo from "@components/info/DisplayInfo";
import { InformationProps } from "@models/types";

const Information = (props: InformationProps) => {
  return (
    <main className="w-full h-80 lg:h-[500px]">
      <div className="overflow-hidden h-full">
        <div
          className="banner h-full"
          style={{
            backgroundImage: `url(${props.cover})`,
            filter: "blur(0.25rem)",
          }}
        />
      </div>
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
      <div className="flex flex-col items-center pt-5 w-full h-fit">
        {props.episodes!.length > 1 && (
          <WatchEpisodeButton
            id={props.id}
            episodeId={props.episodes![0].id}
            episodeNumber={1}
          />
        )}
      </div>
      <DisplayInfo
        description={props.description}
        genres={props.genres}
        status={props.status}
        startDate={props.startDate}
        endDate={props.endDate}
      />
    </main>
  );
};

export default Information;
