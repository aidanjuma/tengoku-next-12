import React from "react";
import { useRouter } from "next/router";
import { IAnimeEpisode } from "@consumet/extensions/dist/models";

const EpisodeListItem = ({
  animeId,
  episode,
  first,
  last,
}: {
  animeId: string;
  episode: IAnimeEpisode;
  first: boolean;
  last: boolean;
}) => {
  const router = useRouter();

  let padding: string = "my-4";
  if (first) {
    padding = "mb-4";
  }
  if (last) {
    padding = "mt-4";
  }

  return (
    <div
      className={`flex justify-start w-full h-[10vh] ${padding} transition-all duration-100 hover:scale-[1.02] active:scale-95 text-white`}
      onClick={() =>
        router.push({
          pathname: `/watch/${animeId}/${episode.id}`,
        })
      }
    >
      {/* Episode Thumbnail */}
      <div
        className="w-[35%] mr-[5vw] rounded-md md:rounded-lg"
        style={{
          backgroundImage: `url(https://images.weserv.nl/?url=${episode.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      {/* Episode Name & Episode Number */}
      <div className="w-[50vw] h-full font-dmsans font-semibold">
        <div className="bind-episode-title overflow-y-hidden">
          <h3>{episode.title! || `Episode ${episode.number}`}</h3>
        </div>
        <p className="font-lexend font-normal text-sm text-offwhite">
          Episode {episode.number}
        </p>
      </div>
    </div>
  );
};

export default EpisodeListItem;
