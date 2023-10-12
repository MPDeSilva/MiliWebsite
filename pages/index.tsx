import Head from "next/head";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Features from "../components/Features";
import Footer from "../components/FooterSection";
import CompanyBanner from "../components/CompanyBanner";

export default function HomePage() {
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
      <NavBar />
      <main className="mb-40">
        <HeroSection />
        <CompanyBanner />
        <Features />
      </main>
      <Footer />
    </>
  );
}
