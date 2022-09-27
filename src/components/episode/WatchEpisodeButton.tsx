import React from "react";
import { useRouter } from "next/router";
import { ArrowRight } from "@easy-eva-icons/react";

const WatchEpisodeButton = ({
  id,
  episodeNumber,
  episodeId,
}: {
  id: string;
  episodeNumber: string;
  episodeId: string;
}) => {
  const router = useRouter();

  return (
    <button
      className="w-36 h-10 rounded font-dmsans font-medium text-sm transition-all hover:scale-105 active:scale-95 bg-pastelRed"
      onClick={() =>
        router.push({
          pathname: `/watch/${id}/${episodeId}`,
        })
      }
    >
      <div className="flex flex-row justify-evenly pl-1 pr-4 items-center text-white">
        <ArrowRight className="w-6 h-6 -mx-2" />
        <p>Episode {episodeNumber}</p>
      </div>
    </button>
  );
};

export default WatchEpisodeButton;
