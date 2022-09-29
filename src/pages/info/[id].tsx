import React, { useState, useEffect } from "react";
import Head from "next/head";
import HeaderQuickSearch from "@components/utility/HeaderQuickSearch";
import InfoCover from "@components/info/InfoCover";
import FunctionalInfo from "@components/info/FunctionalInfo";
import DisplayInfo from "@components/info/DisplayInfo";
import EpisodeList from "@components/episode/EpisodeList";
import { GetServerSideProps } from "next";
import { META } from "@consumet/extensions";
import { IAnimeEpisode, IAnimeInfo } from "@consumet/extensions/dist/models";
import { TitleLanguage } from "@models/types";
import { processITitle } from "@helpers";

const InfoPage = ({ info }: { info: IAnimeInfo }) => {
  const animeTitle = processITitle(info.title, TitleLanguage.romaji);

  const [episodes, setEpisodes] = useState<IAnimeEpisode[] | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.consumet.org/meta/anilist/episodes/${info.id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setLoading(false);
          setEpisodes(data);
        }
        setLoading(false);
      });
  }, [info.id]);

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
        <InfoCover
          id={info.id}
          cover={typeof info.cover === "string" ? info.cover : undefined}
        />
        <FunctionalInfo
          id={info.id}
          title={info.title}
          image={info.image ?? undefined}
          description={info.description}
          episodes={episodes!}
        />
        <DisplayInfo
          description={info.description}
          genres={info.genres}
          status={info.status}
          startDate={info.startDate}
          endDate={info.endDate}
        />
        {isLoading && <p>Loading...</p>}
        {episodes && <EpisodeList animeId={info.id} episodes={episodes} />}
      </>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const anilist = new META.Anilist();
  const { id } = context.query;

  const infoData: IAnimeInfo = await anilist.fetchAnilistInfoById(id as string);
  const info = JSON.parse(JSON.stringify(infoData));

  return {
    props: { info: info },
  };
};

export default InfoPage;
