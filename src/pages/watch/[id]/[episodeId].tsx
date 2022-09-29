import React, { useState, useEffect } from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/utility/HeaderQuickSearch";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import {
  IAnimeInfo,
  IAnimeEpisode,
  IVideo,
} from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const WatchEpisodePage = ({
  anime,
  episodeNumber,
}: {
  anime: IAnimeInfo;
  episodeNumber: string;
}) => {
  const episodeInfo: IAnimeEpisode | undefined =
    anime.episodes![(episodeNumber as unknown as number) - 1];
  const animeTitle = processITitle(anime.title, TitleLanguage.romaji);

  const [episode, setEpisode] = useState<IVideo[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.consumet.org/meta/anilist/watch/${episodeInfo.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setEpisode(data.sources[0]);
          setLoading(false);
        }
        setLoading(false);
      });
  }, [episodeInfo.id]);

  return (
    <>
      <Head>
        <title>
          天国 • Ep. {episodeNumber} | {animeTitle}
        </title>
        <meta
          name="og:title"
          content={`${animeTitle} Ep. ${episodeNumber} | ${episodeInfo.title!}`}
        />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content={`https://tengoku.stream/watch/${anime.id}/${episodeInfo.id}`}
        />
        <meta
          name="og:description"
          content={`Watch ${animeTitle}: Episode ${episodeNumber} via tengoku.stream!\n\n${
            episodeInfo!.description
          }`}
        />
        <meta
          name="og:image"
          content={episodeInfo.image! || anime.cover! || anime.image!}
        />
        <meta name="theme-color" content={anime.color ?? "#b4e5ef"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        <HeaderQuickSearch />
      </>
    </>
  );
};

// Fetch anime and episode data with SSR; Anilist with provider GogoAnime as default.
export const getServerSideProps: GetServerSideProps = async (context) => {
  const anilist = new META.Anilist();
  const { id, episodeId } = context.query;

  const animeData: IAnimeInfo = await anilist.fetchAnimeInfo(id as string);
  const anime = JSON.parse(JSON.stringify(animeData));

  return {
    props: {
      anime: anime,
      episodeNumber: (episodeId as string).substring(
        (episodeId as string).lastIndexOf("-") + 1
      ),
    },
  };
};

export default WatchEpisodePage;
