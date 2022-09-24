import React from "react";
import EpisodeListItem from "@components/episode/EpisodeListItem";
import { IAnimeEpisode } from "@consumet/extensions/dist/models";

const EpisodeList = ({ episodes }: { episodes: IAnimeEpisode[] }) => {
  return (
    <section id="episodes">
      <div className="px-8">
        <h3 className="font-lexend font-normal mb-2">Episodes</h3>
        {episodes.map((episode: IAnimeEpisode, i: number) => {
          return (
            <EpisodeListItem
              key={episode.id}
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
