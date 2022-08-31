import React, { useEffect, useState } from "react";
import { META } from "@consumet/extensions";
import { IAnimeResult, ISearch } from "@consumet/extensions/dist/models";
import { ContentType } from "@models/types";

const ContentSlider = (props: ContentType) => {
  const [data, setData] = useState<IAnimeResult[] | null>(null);
  const [isLoading, setLoading] = useState(false);

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
    <div className="flex webkit-rm-scrollbar overflow-x-scroll w-full px-4">
      {data.map((item: IAnimeResult) => {
        const title: string | undefined =
          typeof item.title === "string" ? item.title : item.title.english;
        if (title != undefined)
          return (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div
                className="w-32 h-48 mx-2 lg:mx-4 rounded-lg bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="w-32 h-20 webkit-rm-scrollbar overflow-y-scroll">
                <p className="font-medium text-sm pt-3">{title}</p>
              </div>
            </div>
          );
      })}
    </div>
  );
};

export default ContentSlider;
