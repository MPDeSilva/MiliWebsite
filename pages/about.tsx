import Head from "next/head";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import CompanyBanner from "../components/CompanyBanner";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Mili</title>
        <meta name="description" content="All about Mili!" />
      </Head>

      <main className="mb-40">
        {/* <HeroSection /> */}
        <CompanyBanner />
        <Features />
      </main>
    </>
  );
}
