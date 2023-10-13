import { Html, Head, Main, NextScript } from "next/document";
import NavBar from "../components/NavBar";
import Footer from "../components/FooterSection";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
      </Head>
      <body className="bg-white dark:bg-darker">
        <NavBar />
        <Main />
        <NextScript />
        <Footer />
      </body>
      <script
        async
        defer
        src="https://static.cdn.prismic.io/prismic.js?new=true&repo=miliwebsite"
      ></script>
    </Html>
  );
}
