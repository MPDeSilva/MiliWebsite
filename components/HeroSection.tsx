import Button from "./Button";
import Container from "./Container";
import Image from "next/image.js";

export interface HeroSection {
  Title: string;
  Description: string;
  List: string[];
  ImageLink: any;
}

import React from "react";
import { TypeAnimation } from "react-type-animation";

const HeroSection: React.FC<HeroSection> = ({
  Title,
  Description,
  List,
  ImageLink,
}) => {
  const sendEmail = () => {
    const email = "milindapds@hotmail.com";
    const subject = "Hey Mili!, I saw your website and I'm interested in you!";
    const body = "Hi Mili, I saw your website and I'm interested in you!";

    // Combine the email, subject, and body into a `mailto` link
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Open the default email client
    window.location.href = mailtoLink;
  };

  const texts = [
    "Comedian?",
    1000,
    "Superhero?",
    1000,
    "Magician?",
    1000,
    "Legend?",
    1000,
    "Software/Web Developer",
    1000,
    "Software/Web Developer.",
    1000,
  ];

  return (
    <div
      className="relative overflow-hidden dark:bg-darker lg:overflow-auto"
      id="home"
    >
      <div className="absolute inset-x-0 top-32 md:hidden">
        <div
          aria-hidden="true"
          className="grid grid-cols-2 -space-x-52 opacity-50 dark:opacity-60 2xl:mx-auto 2xl:max-w-normal"
        >
          <div className="h-60 bg-gradient-to-br from-primary to-blue-400 blur-3xl dark:from-blue-700"></div>
          <div className="h-72 rounded-full bg-gradient-to-r from-cyan-400 to-sky-300 blur-3xl dark:from-transparent dark:to-indigo-600"></div>
        </div>
      </div>
      <Container>
        <div className="flex ml-auto pt-32 md:pt-40 lg:pt-36">
          <div className="md:flex flex-row md:items-center gap-12">
            <div className="flex flex-col text-center sm:px-12 md:w-2/3 md:px-0 md:text-left lg:w-1/2">
              <h1 className="text-5xl font-bold dark:text-white md:text-6xl xl:text-7xl">
                Mili, the one and only {""}
                <span>
                  <TypeAnimation
                    className="text-primary"
                    sequence={texts}
                    speed={20}
                    repeat={0}
                  />
                </span>
              </h1>
              <div className="">
                <p className="mt-8 text-md text-gray-700 leading-normal dark:text-gray-100">
                  I'm a dynamic software engineer with a flair for front-end
                  magic. Proficient in React, Next.js, and TypeScript, I craft
                  seamless web experiences. Passionate about coding, I'm keen to
                  learn and grow, continuously adding new tools to my skillset.
                  Let's turn your ideas into digital reality together.
                </p>
                <div className="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                  <Button
                    primary={true}
                    label="Get in touch"
                    secondary={false}
                    onClick={sendEmail}
                  />
                  <Button
                    secondary={true}
                    label="Download CV"
                    primary={false}
                    link={
                      "https://drive.google.com/file/d/1jINMPeKbc4A2MrXKoWY40iXDuPINKZf2/view?usp=drive_link"
                    }
                  />
                </div>
              </div>
            </div>
            <div className="relative mt-20 md:mt-0 md:w-2/5 lg:w-3/5">
              <div className="-ml-6 md:-mr-72 lg:mr-0">
                <Image
                  className="h-full object-cover object-left dark:hidden"
                  src="/images/hero.webp"
                  alt="app screenshot"
                  width="1628"
                  height="1233"
                  priority={true}
                />
                <Image
                  className="hidden h-full object-cover object-left dark:block"
                  src="/images/hero-dark.webp"
                  alt="app screenshot"
                  width="1628"
                  height="1233"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
