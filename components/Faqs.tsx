import Container from "./Container";
import Faq from "./Faq";

export default function Faqs() {
  return (
    <Container>
      <div className="mt-20 md:mt-32 flex flex-col gap-12 lg:flex-row">
        <div className="text-center lg:w-5/12 lg:pl-12 lg:text-left">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white md:text-3xl lg:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            To be honest with you, no one asked these questions yet. But I'm
            sure someone is bound to ...
          </p>
        </div>
        <div className="divide-y divide-gray-200 border-y border-gray-200 dark:divide-gray-800 dark:border-gray-800 lg:w-7/12">
          <Faq id="faq-1" question="How are you?">
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
              I'm good I think, I'm not sure, I'm just trying to get this
              website up and running, being jobless isn't the best feeling in
              the world, but I'm trying to make the best of it. Just have to
              take everything one day at a time.
            </p>
          </Faq>
          <Faq
            id="faq-2"
            question="Are you really proficient at all these languages and apps?"
          >
            <div className="pb-6 text-base text-gray-600 dark:text-gray-400">
              <p>
                No, I think Im pretty good at most of them, but there's still
                alot to learn, experiences will help develop, enhance and
                optimize my skills. I'm always learning and trying to improve. I
                hope that someday I'll be given the chnave to prove myself.
              </p>
            </div>
          </Faq>
          <Faq id="faq-3" question="Was this whole website built by you?">
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
              Yup, using my knowledge of React, NextJS, Javascript and
              TailwindCSS and my hosting service Vercel, I was able to build
              this website.
            </p>
          </Faq>
          <Faq
            id="faq-4"
            question="What are you looking for in your next role?"
          >
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
              I would like to cntinue my development on the tech stack I'm most
              familiar with, I would love to make a real impact and postive
              difference to whever I work. I would like to be a key player
              within a team and hellp others be their best selves and hopefully
              I can learn from them as well. I would like to be able to grow and
              develop my skills and be able to learn new ones as well. I would
              like to be able to work on a product that I can be proud of and be
              able to show off to my friends and family. I would like to be able
              to work on a product that I can be proud of and be able to show
              off to my friends and family. I know I may not know everything and
              I might not have the experience, but I hope I can shower a
              potential employer that I'm willing to learn and grow and be a
              valuable asset to their team.
            </p>
          </Faq>
          <Faq id="faq-5" question="When can you start?">
            <p className="pb-6 text-base text-gray-600 dark:text-gray-400">
              Immediately, I'm ready to start working and making a difference.
            </p>
          </Faq>
        </div>
      </div>
    </Container>
  );
}
