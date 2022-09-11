import React from "react";
import Image from "next/image";
import { InfoCoverData, TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const InfoCover = (props: InfoCoverData) => {
  const romaji = processITitle(props.title, TitleLanguage.romaji);
  const native = processITitle(props.title, TitleLanguage.native);

  return (
    <section id="info-cover-section" className="w-full h-80 lg:h-96">
      <div className="banner overflow-hidden h-full">
        <div
          className="h-full"
          style={{
            backgroundImage: `url(${props.cover})`,
            filter: "blur(0.25rem)",
          }}
        />
      </div>
      <div className="grid w-full h-under-banner px-5 lg:px-20">
        <div className="mt-[-190px] lg:mt-[-250px]">
          <div className="grid grid-cols-1 grid-rows-2 justify-items-center">
            {props.image ? (
              <div className="w-[160px] h-[226px] lg:w-[200px] lg:h-[282px] relative">
                <Image
                  src={props.image}
                  alt={`Album image for the anime "${romaji}".`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            ) : (
              <></>
            )}
            <div className="text-white pt-4">
              <h2 className="font-lexend font-medium text-2xl text-center pb-2">
                {romaji}
              </h2>
              <h6 className="font-zenmaru font-medium text-base text-center text-offwhite">
                {native}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoCover;
