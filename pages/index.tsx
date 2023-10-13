import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CompanyBanner from "../components/CompanyBanner";
import { createClient } from "../prismicio";
import PageContent from "../components/PageContent";
import exp from "constants";
import { NextPage } from "next";

const HomePage: NextPage<any> = ({ home }) => {
  return (
    <>
      <Head>
        <title>Mili</title>
        <meta
          name="description"
          content="A website all about the man, the myth, Mili!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mb-40">
        {/* <PageContent pageProps={home} /> */}
        <HeroSection
          Title={""}
          Description={""}
          List={[]}
          ImageLink={undefined}
        />
        <CompanyBanner />
        <Features />
      </main>
    </>
  );
};

export async function getStaticProps() {
  const client = createClient();
  const home = await client.getByUID("home", "homepage");

  return {
    props: {
      home,
    },
  };
}

export default HomePage;
