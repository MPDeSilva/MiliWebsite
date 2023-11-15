import Image from "next/image";
import Container from "./Container";

export default function About() {
  return (
    <div className="pt-20 md:pt-40" id="about">
      <Container>
        <div className="flex flex-col md:flex-row md:px-10 py-0 md:py-10 dark:border-gray-800 w-full">
          <div className="flex flex-col justify-center items-center w-full space-y-10">
            <Image
              src="/images/about-me.jpg"
              alt="Mili"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-full h-80 w-80 object-cover"
            />
            <Image
              src="/images/mili.png"
              alt="Mili"
              width={500}
              height={500}
              objectFit="cover"
              className="rounded-full h-80 w-80 object-cover"
            />
          </div>
          <div className="flex flex-col w-full md:pt-0 pt-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              Who am I?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Not just my favourite Jackie-Chan movie, but also a question I ask
            </p>
            <p className="mt-3 text-gray-900 dark:text-gray-400">
              Hey there, I'm Milinda, but you can call me Mili. I'm not just
              your average coder; I'm the person who brings a blend of technical
              prowess and a friendly demeanor to the table. I'm not just about
              writing lines of code; I'm about connecting with people and
              creating digital solutions that resonate. <br></br>
              <br></br>With a dynamic background in web development and a
              comprehensive skill set that spans React, NextJS, TypeScript, and
              more, I've embarked on a journey to bring innovation to the
              digital landscape. <br></br>
              <br></br>My adventure kicked off as a Junior Software Developer at
              Ember, where I took charge of the company website's management and
              enhancement. Eager to tackle challenges, I engaged in full-stack
              development, mastering technologies like JavaScript, NextJS,
              ReactJS, and TypeScript. I find joy in the art of transforming
              design visions into functional, seamless user experiences.{" "}
              <br></br>
              <br></br>As an Information Technology Specialist at Lanistar
              Limited, I displayed unwavering drive, orchestrating comprehensive
              IT support and spearheading network infrastructure development. My
              commitment to excellence extended to ensuring regulatory
              compliance with data protection standards. At Lucas Systems, I
              brought my passion for learning to the forefront, optimizing
              warehouse operations through the mastery of C#, SQL, and
              Silverlight. <br></br>
              <br></br>Armed with a Bachelor's degree in Computer Science, I am
              fueled by a relentless willingness to learn and adapt. I thrive in
              collaborative environments and approach each project with a
              curiosity that fuels continuous improvement. Eager to contribute
              my dynamic skill set and enthusiasm for learning, I am poised to
              make impactful contributions to innovative technology projects.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
