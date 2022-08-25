import Head from "next/head";
import Header from "@components/shared/Header";

const Home = () => (
  <>
    <Head>
      <title>天国 • Anime & Manga</title>
      <meta
        name="description"
        content="Find your favourite Japanese media on 天国 (tengoku)! Built with Consumet, Next & React."
      />
    </Head>
    <>
      <Header />
    </>
  </>
);

export default Home;
