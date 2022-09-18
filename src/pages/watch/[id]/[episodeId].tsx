import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/static/shared/HeaderQuickSearch";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import { IAnimeInfo, ISource } from "@consumet/extensions/dist/models";
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
  const animeTitle = processITitle(anime.title, TitleLanguage.romaji);
  return (
    <>
      <Head>
        <title>
          天国 • Ep. {episodeNumber} | {animeTitle}
        </title>
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

  const animeData: IAnimeInfo = await anilist.fetchAnilistInfoById(
    id as string
  );
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
