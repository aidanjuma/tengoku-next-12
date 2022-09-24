import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/static/shared/HeaderQuickSearch";
import InfoHero from "@components/dynamic/info/InfoHero";
import DisplayInfo from "@components/dynamic/info/DisplayInfo";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import { IAnimeEpisode, IAnimeInfo } from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const InfoPage = ({
  info,
  episodes,
}: {
  info: IAnimeInfo;
  episodes: IAnimeEpisode[];
}) => {
  const animeTitle = processITitle(info.title, TitleLanguage.romaji);
  return (
    <>
      <Head>
        <title>天国 • {animeTitle}</title>
        <meta name="og:title" content={animeTitle} />
        <meta name="og:type" content="website" />
        <meta
          name="og:url"
          content={`https://tengoku.stream/info/${info.id}`}
        />
        <meta name="og:description" content={info.description!} />
        <meta name="og:image" content={info.cover! || info.image!} />
        <meta name="theme-color" content={info.color ?? "#b4e5ef"} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <>
        <HeaderQuickSearch />
        <InfoHero
          id={info.id}
          title={info.title}
          cover={typeof info.cover === "string" ? info.cover : undefined}
          image={info.image ?? undefined}
          description={info.description}
          episodes={episodes}
        />
        <DisplayInfo
          description={info.description}
          genres={info.genres}
          status={info.status}
          startDate={info.startDate}
          endDate={info.endDate}
        />
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const anilist = new META.Anilist();
  const { id } = context.query;

  const infoData: IAnimeInfo = await anilist.fetchAnilistInfoById(id as string);
  const info = JSON.parse(JSON.stringify(infoData));
  const episodesData: IAnimeEpisode[] = await anilist.fetchEpisodesListById(
    id as string
  );
  const episodes = JSON.parse(JSON.stringify(episodesData));

  return {
    props: { info: info, episodes: episodes },
  };
};

export default InfoPage;
