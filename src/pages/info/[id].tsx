import React from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/shared/HeaderQuickSearch";
import InfoCover from "@components/info/InfoCover";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import { IAnimeInfo } from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { getItemTitle } from "@helpers";

const InfoPage = ({ info }: { info: IAnimeInfo }) => {
  return (
    <>
      <Head>
        <title>天国 • {getItemTitle(info.title, TitleLanguage.romaji)}</title>
        <meta name="description" content={info.description!} />
        <meta name="theme-color" content={info.color ?? "#000000"} />
      </Head>
      <>
        <HeaderQuickSearch />
        <InfoCover image={info.image} title={info.title} />
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
