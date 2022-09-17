import React from "react";
import { useRouter } from "next/router";
import { ArrowRight } from "@easy-eva-icons/react";
import { WatchEpisodeProps } from "@models/types";

const WatchEpisodeButton = (props: WatchEpisodeProps) => {
  const router = useRouter();

  return (
    <button
      className="watch-episode-button w-36 h-10 rounded font-dmsans font-medium text-sm transition-all hover:scale-105 active:scale-95 bg-pastelRed"
      onClick={() =>
        router.push({
          pathname: `/watch/${props.id}/${props.episodeId}`,
        })
      }
    >
      <div className="flex flex-row justify-evenly pl-1 pr-4 items-center text-white">
        <ArrowRight className="w-6 h-6 -mx-2" />
        <p>Episode {props.episodeNumber}</p>
      </div>
    </button>
  );
};

export default WatchEpisodeButton;
