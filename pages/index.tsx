import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CompanyBanner from "../components/CompanyBanner";
import { createClient } from "../prismicio";
import PageContent from "../components/PageContent";
import exp from "constants";
import { NextPage } from "next";
import Container from "../components/Container";
import Reviews from "../components/Reviews";

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
        <Reviews />
        <Container>
          <div className="flex flex-col mx-auto justify-center items-center w-full lg:pt-40 pt-20 text-center space-y-4">
            <p className="lg:text-5xl md:text-4xl text-3xl font-medium dark:text-white">
              The Website is still being built out
            </p>
            <p className="lg:text-4xl md:text-3xl text-2xl font-medium dark:text-white">
              There's alot of ideas and things need to be done
            </p>
            <p className="lg:text-3xl md:text-2xl text-xl font-medium dark:text-white">
              Like code-refactor, being fully prismic based, SEO..etc
            </p>
            <p className="lg:text-2xl md:text-xl text-lg font-medium dark:text-white">
              I'll get there, I have soo many ideas
            </p>
            <p className="lg:text-xl md:text-lg text-md font-medium dark:text-white">
              including connecting to cool api's etc
            </p>
          </div>
        </Container>
      </main>
    </>
  );
};

// export async function getStaticProps() {
//   const client = createClient();
//   const home = await client.getByUID("home", "homepage");

//   return {
//     props: {
//       home,
//     },
//   };
// }

export default HomePage;
