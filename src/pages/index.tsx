import Head from "next/head";
import Header from "@components/shared/Header";
import FeaturedContent from "@components/home/FeaturedContent";
import ContentSlider from "@components/shared/ContentSlider";
import QuickSearch from "@components/shared/QuickSearch";

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
      <QuickSearch />
      <FeaturedContent />
      <section id="trending-anime-section">
        <div className="flex justify-center items-center font-semibold text-3xl pb-8">
          <h2>Trending Anime</h2>
        </div>
        <ContentSlider medium="ANIME" status="TRENDING" />
      </section>
      <section id="popular-anime-section" className="pt-8">
        <div className="flex justify-center items-center font-semibold text-3xl pb-8">
          <h2>Popular Anime</h2>
        </div>
        <ContentSlider medium="ANIME" status="POPULAR" />
      </section>
    </>
  </>
);

export default Home;
