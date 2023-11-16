import React from "react";
import Container from "./Container";
import Image from "next/image";

const Education = () => {
  return (
    <Container>
      <div
        id="education"
        className="flex flex-col mx-auto justify-center items-center space-y-8 w-full pt-20 md:pt-40 text-gray-600 dark:text-gray-300"
      >
        <div>
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            Source of Knowledge
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            My dojo of knowledge... or where I got my education from.
          </p>
        </div>

        <div className="flex md:flex-row flex-col max-w-normal h-full overflow-hidden bg-white rounded-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-900">
          <div className="md:w-1/3 h-full">
            <Image
              src="/images/coventry-uni.webp"
              width={900}
              height={500}
              alt="education"
            />
          </div>
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Coventry University
            </h1>
            <p className="font-medium text-sm text-gray-600 dark:text-white">
              BSc (Hons) Computer Science
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Coventry University is a public research university in Coventry,
              England. The origins of Coventry University can be linked to the
              founding of the Coventry School of Design in 1843
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse max-w-normal h-full overflow-hidden bg-white rounded-xl border border-gray-200 dark:border-gray-700 p-px dark:bg-gray-900">
          <div className="md:w-2/3 p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kingsley Academy
            </h1>
            <p className="font-medium text-sm text-gray-600 dark:text-white">
              Various GCSEs and A-Levels
            </p>
            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Kingsley Academy is an 11–18 mixed, secondary school and sixth
              form with academy status in Hounslow, Greater London, England. It
              is part of the Academies Enterprise Trust via its London Academies
              Enterprise Trust.
            </p>
          </div>
          <div className="md:w-1/3 h-full">
            <Image
              src="/images/kingsley-academy.webp"
              width={900}
              height={500}
              alt="education"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
