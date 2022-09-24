import React from "react";
import { IAnimeEpisode } from "@consumet/extensions/dist/models";

const EpisodeListItem = ({
  episode,
  first,
  last,
}: {
  episode: IAnimeEpisode;
  first: boolean;
  last: boolean;
}) => {
  let padding: string = "my-4";

  if (first) {
    padding = "mb-4";
  }

  if (last) {
    padding = "mt-4";
  }

  return (
    <div className={`flex w-full h-[10vh] ${padding}`}>
      <div
        className="w-[35%] rounded-md"
        style={{
          backgroundImage: `url(${episode.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div></div>
    </div>
  );
};

export default EpisodeListItem;
