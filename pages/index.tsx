import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CompanyBanner from "../components/CompanyBanner";
import { NextPage } from "next";
import Container from "../components/Container";
import Reviews from "../components/Reviews";
import About from "../components/About";
import SocialBanner from "../components/SocialBanner";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Faqs from "../components/Faqs";
import WorkHistory from "../components/WorkHistory";

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
        <About />
        <SocialBanner />
        <Features />
        <WorkHistory />
        <Skills />
        <Education />
        <Reviews />
        <Faqs />
        <Container>
          <div className="flex flex-col mx-auto justify-center items-center w-full lg:pt-40 pt-20 text-center space-y-4">
            <p className="lg:text-5xl md:text-4xl text-3xl font-medium dark:text-white">
              The Website is still being built out
            </p>
            <p className="lg:text-2xl md:text-xl text-lg font-medium dark:text-white md:max-w-md">
              There's alot of ideas and things need to be done Like a Big
              Code-Refactor, adding Testing Framework, being fully Prismic
              based, SEO..etc I'll get there, I have soo many ideas including
              connecting to cool API's etc
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
