import React from "react";
import Image from "next/image";
import Container from "./Container";

const CompanyBanner = () => {
  return (
    <Container>
      <div className="mt-20 text-center md:mt-32 lg:mt-20 xl:mt-16 flex flex-col justify-center mx-auto w-full">
        <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-white">
          WORKED AT COMPANIES SUCH AS
        </span>
        <div className="mt-8 flex md:flex-row flex-col items-center justify-center gap-6 brightness-75 contrast-200 grayscale dark:brightness-200 dark:contrast-0 sm:justify-between lg:gap-24">
          <Image
            className="h-9 w-auto md:h-8 lg:h-14"
            src="images/clients/ember.svg"
            loading="lazy"
            alt="ember"
            width="100"
            height="100"
          />
          <Image
            className="h-12 w-auto md:h-10 lg:h-14"
            src="images/clients/lanistar.svg"
            loading="lazy"
            alt="lanistar"
            width="100"
            height="100"
          />
          <Image
            className="h-20 w-auto md:h-10 lg:h-14"
            src="/images/clients/lucas.png"
            loading="lazy"
            alt="lucas systems"
            width="100"
            height="100"
          />
          <Image
            className="h-12 w-auto md:h-10 lg:h-14"
            src="images/clients/tesco.svg"
            loading="lazy"
            alt="tesco"
            width="100"
            height="100"
          />
          <Image
            className="h-8 w-auto md:h-10 lg:h-14"
            src="images/clients/lords.svg"
            loading="lazy"
            alt="lords"
            width="100"
            height="100"
          />
        </div>
      </div>
    </Container>
  );
};

export default CompanyBanner;
