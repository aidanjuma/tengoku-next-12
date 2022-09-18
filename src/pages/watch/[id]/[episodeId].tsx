import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/static/shared/HeaderQuickSearch";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import {
  IAnimeInfo,
  ISource,
  IAnimeEpisode,
} from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const WatchEpisodePage = ({
  anime,
  episodeNumber,
  episode,
}: {
  anime: IAnimeInfo;
  episodeNumber: string;
  episode: ISource;
}) => {
  const episodeInfo: IAnimeEpisode | undefined =
    anime.episodes![(episodeNumber as unknown as number) - 1];
  const animeTitle = processITitle(anime.title, TitleLanguage.romaji);
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
          content={`Watch ${animeTitle}: Episode ${episodeNumber} via tengoku.stream! About this episode: "${
            episodeInfo!.description
          }"`}
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
  const episodeData: ISource = await anilist.fetchEpisodeSources(
    episodeId as string
  );
  const episode = JSON.parse(JSON.stringify(episodeData));

  return {
    props: {
      anime: anime,
      episodeNumber: (episodeId as string).substring(
        (episodeId as string).lastIndexOf("-") + 1
      ),
      episode: episode,
    },
  };
};

export default WatchEpisodePage;
