import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/static/shared/HeaderQuickSearch";
import Information from "@components/dynamic/info/Information";
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
  return (
    <>
      <Head>
        <title>天国 • {processITitle(info.title, TitleLanguage.romaji)}</title>
        <meta name="description" content={info.description!} />
        <meta name="theme-color" content={info.color ?? "#000000"} />
      </Head>
      <>
        <HeaderQuickSearch />
        <Information
          id={info.id}
          title={info.title}
          cover={typeof info.cover === "string" ? info.cover : undefined}
          image={info.image ?? undefined}
          description={info.description}
          genres={info.genres}
          startDate={info.startDate}
          endDate={info.endDate}
          status={info.status}
          episodes={episodes}
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
