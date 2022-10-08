import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IAnimeInfo } from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const QuickSearchItem = ({
  item,
  hideQuickSearch,
}: {
  item: IAnimeInfo;
  hideQuickSearch: () => void;
}) => {
  const romaji: string | undefined = processITitle(
    item.title,
    TitleLanguage.romaji
  );

  if (romaji) {
    return (
      <Link href={`/info/${item.id}`}>
        <div
          className="flex flex-row items-center py-2 hover:cursor-pointer hover:text-lightBlue"
          onClick={hideQuickSearch}
        >
          <div className="w-16 h-16 relative">
            <Image
              src={item.image!}
              alt={`Album image for the anime "${romaji}".`}
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <h3 className="w-4/5 text-sm sm:text-base font-medium mx-2 lg:mx-3 transition-all">
            {romaji}
          </h3>
        </div>
      </Link>
    );
  }

  return <></>;
};

export default QuickSearchItem;
