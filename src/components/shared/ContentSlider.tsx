import React, { useEffect, useState } from "react";
import Link from "next/link";
import { META } from "@consumet/extensions";
import { IAnimeResult, ISearch } from "@consumet/extensions/dist/models";
import { ContentType, TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const ContentSlider = (props: ContentType) => {
  const [data, setData] = useState<IAnimeResult[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const anilist = new META.Anilist();
    setLoading(true);
    switch (props.medium) {
      case "ANIME":
        if (props.status === "TRENDING") {
          anilist
            .fetchTrendingAnime(1, 20)
            .then((data: ISearch<IAnimeResult>) => {
              setData(data.results);
              setLoading(false);
            });
        }

        if (props.status === "POPULAR") {
          anilist
            .fetchPopularAnime(1, 20)
            .then((data: ISearch<IAnimeResult>) => {
              setData(data.results);
              setLoading(false);
            });
        }
      case "MANGA":
      // TODO: Implement for Manga.
    }
  }, [props.medium, props.status]);

  // TODO: Loading indicator/animation, 404 indicator.
  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Requested data not found.</p>;

  return (
    <div className="flex webkit-rm-scrollbar overflow-x-scroll w-full px-4 pb-4">
      {data.map((item: IAnimeResult) => {
        const title: string | undefined = processITitle(
          item.title,
          TitleLanguage.romaji
        );
        if (title != undefined)
          return (
            <Link key={item.id} href={`/info/${item.id}`}>
              <div className="flex flex-col items-center text-center hover:cursor-pointer">
                <div
                  className="w-32 h-48 mx-2 lg:mx-4 rounded-lg bg-cover bg-no-repeat bg-center"
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className="w-32 h-fit max-h-20 webkit-rm-scrollbar overflow-y-scroll">
                  <p className="font-medium text-sm pt-3">{title}</p>
                </div>
              </div>
            </Link>
          );
      })}
    </div>
  );
};

export default ContentSlider;
