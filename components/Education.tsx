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
          <div className="md:w-2/5">
            <Image
              src="/images/coventry-uni.webp"
              width={385}
              height={100}
              alt="education"
            />
          </div>
          <div className="md:w-3/4 p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Coventry University
            </h1>
            <p className="font-medium text-sm text-gray-600 dark:text-white">
              BSc (Hons) Computer Science
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              As a graduate of Coventry University's BSc Computer Science
              course, I delved deeply into both the theoretical and practical
              aspects of software development. The course offered a
              comprehensive exploration of key areas such as artificial
              intelligence, parallel programming, and data science, which were
              instrumental in preparing me for a dynamic career in the tech
              industry. The hands-on experience, coupled with a solid foundation
              in theoretical principles, equipped me to tackle complex software
              challenges and contribute significantly in the realm of computer
              science.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse max-w-normal h-full overflow-hidden bg-white rounded-xl border border-gray-200 dark:border-gray-700 p-px dark:bg-gray-900">
          <div className="w-full p-4">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Kingsley Academy
            </h1>
            <p className="font-medium text-sm text-gray-600 dark:text-white">
              Various GCSEs and A-Levels
            </p>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
              During my time at Kingsley Academy, I received an enriching and
              comprehensive education at both the GCSE and A-Level stages. The
              range of subjects offered allowed me to explore my interests
              deeply, particularly in the sciences and computing, laying a
              strong foundation for my future academic pursuits. The dedicated
              teachers and supportive learning environment were instrumental in
              helping me achieve my goals during my secondary school years.
            </p>
          </div>
          <div className="md:w-2/5 flex h-full w-full justify-end">
            <Image
              src="/images/kingsley-academy.webp"
              width={385}
              height={90}
              alt="education"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
