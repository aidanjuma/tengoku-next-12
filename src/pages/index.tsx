import Head from "next/head";
import HeaderQuickSearch from "@components/shared/HeaderQuickSearch";
import FeaturedContent from "@components/home/FeaturedContent";
import ContentSlider from "@components/shared/ContentSlider";
import Footer from "@components/shared/Footer";

const Home = () => (
  <>
    <Head>
      <title>天国 • Anime &amp; Manga</title>
      <meta
        name="description"
        content="Find your favourite Japanese media on 天国 (tengoku)! Built with Consumet, Next & React."
      />
    </Head>
    <>
      <HeaderQuickSearch />
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
      <Footer />
    </>
  </>
);

export default Home;
