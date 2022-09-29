import React from "react";
import EpisodeListItem from "@components/episode/EpisodeListItem";
import { IAnimeEpisode } from "@consumet/extensions/dist/models";

const EpisodeList = ({
  animeId,
  episodes,
}: {
  animeId: string;
  episodes?: IAnimeEpisode[];
}) => {
  return (
    <section id="episodes">
      <div className="px-8 pb-8">
        <h3 className="font-lexend font-normal mb-2">Episodes</h3>
        {episodes &&
          episodes.map((episode: IAnimeEpisode, i: number) => {
            return (
              <EpisodeListItem
                key={episode.id}
                animeId={animeId}
                episode={episode}
                first={i === 0 ? true : false}
                last={episode === episodes[episodes.length - 1] ? true : false}
              />
            );
          })}
      </div>
    </section>
  );
};

export default EpisodeList;
