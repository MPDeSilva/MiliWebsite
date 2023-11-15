import React from "react";
import Image from "next/image";
import Container from "./Container";
import Link from "next/link";

const SocialBanner = () => {
  return (
    <Container>
      <div className="mt-4 text-center md:mt-16 lg:mt-4 xl:mt-0 flex flex-col justify-center mx-auto w-full">
        <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
          CHECK OUT MY SOCIALS
        </span>
        <div className="mt-8 flex md:flex-row flex-col items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 lg:gap-24">
          <Link href="https://www.linkedin.com/in/milinda-de-silva/">
            <Image
              className="h-12 w-auto md:h-10 lg:h-14"
              src="/images/linkedin.webp"
              loading="lazy"
              alt="linkedin"
              width="100"
              height="100"
            />
          </Link>
          <Link href="https://github.com/MPDeSilva">
            <Image
              className="h-12 w-auto md:h-10 lg:h-14"
              src="/images/github.webp"
              loading="lazy"
              alt="github"
              width="100"
              height="100"
            />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default SocialBanner;
