import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/shared/HeaderQuickSearch";
import Information from "@components/info/Information";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import { IAnimeInfo } from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const InfoPage = ({ info }: { info: IAnimeInfo }) => {
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
        />
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const anilist = new META.Anilist();
  const { id } = context.query;
  const data: IAnimeInfo = await anilist.fetchAnilistInfoById(id as string);
  const info = JSON.parse(JSON.stringify(data));

  return {
    props: { info: info },
  };
};

export default InfoPage;
