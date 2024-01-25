import React from "react";
import Container from "./Container";
import Image from "next/image";

const Skills = () => {
  return (
    <Container>
      <div id="skills" className="pt-20 md:pt-40 pb-12">
        <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Got the skills to pay the bills
        </h2>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
          My skillset
        </p>
      </div>
      <div className="flex  flex-col justify-center md:space-x-8 space-y-10">
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Programming
          </h2>
          <p className=" ext-center text-gray-600 dark:text-gray-300">
            Industry Experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/react.webp"}
              alt="react"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">React</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/javascript.webp"}
              alt="javascript"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                JavaScript
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/nextjs.webp"}
              alt="next"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Next</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/typescript.webp"}
              alt="typescript"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                TypeScript
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/csharp.webp"}
              alt="csharp"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">C#</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/html.webp"}
              alt="html"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">HTML</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/css.webp"}
              alt="css"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">CSS</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/tailwindcss.webp"}
              alt="tailwindcss"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                TailwindCSS
              </p>
              <p className="text-gray-600 dark:text-gray-500">CSS Framework</p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/reacttestinglibrary.webp"}
              alt="reacttestinglibrary"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                React Testing Library
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Testing Framework
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/xml.webp"}
              alt="xml"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">XML</p>
              <p className="text-gray-600 dark:text-gray-500">
                Markup Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/silverlight.webp"}
              alt="silverlight"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Silverlight
              </p>
              <p className="text-gray-600 dark:text-gray-500">App Framework</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Programming
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300">
            Univeristy/Training Experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/python.webp"}
              alt="python"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">Python</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/cplusplus.webp"}
              alt="c++"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">C++</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/java.webp"}
              alt="java"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Java</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/node.webp"}
              alt="node"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Node</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/express.webp"}
              alt="node"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Express</p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/react.webp"}
              alt="csharp"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                React Native
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Programming Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/jest.webp"}
              alt="html"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Jest</p>
              <p className="text-gray-600 dark:text-gray-500">
                Testing Framework
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Data Management
          </h2>
          <p className=" ext-center text-gray-600 dark:text-gray-300">
            SQL/NoSQL Experience
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/sql.webp"}
              alt="sql"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">
                SQL (Oracle)
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Database Language
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/mysql.webp"}
              alt="mysql"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">MySQL</p>
              <p className="text-gray-600 dark:text-gray-500">
                Database Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/mongodb.webp"}
              alt="mongodb"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">MongoDB</p>
              <p className="text-gray-600 dark:text-gray-500">
                Database Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/mongodbatlas.webp"}
              alt="mongodbatlas"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                MongoDB Atlas
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Database Language
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/firebase.webp"}
              alt="firebase"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Firebase
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Back-end Platform
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/ssms.webp"}
              alt="ssms"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                SSMS (SQL Server)
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Database Management
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/spss.webp"}
              alt="spss"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">SPSS</p>
              <p className="text-gray-600 dark:text-gray-500">Data Analysis</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Project Management/Collboration
          </h2>
          <p className=" ext-center text-gray-600 dark:text-gray-300">
            Project Management/Knowlege Transfer tools
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/jira.webp"}
              alt="jira"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">Jira</p>
              <p className="text-gray-600 dark:text-gray-500">
                Project Tracking Software
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/linear.webp"}
              alt="linear"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Linear</p>
              <p className="text-gray-600 dark:text-gray-500">
                Project Tracking Software
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/notion.webp"}
              alt="mongodb"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Notion</p>
              <p className="text-gray-600 dark:text-gray-500">
                Workspace Application
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/confluence.webp"}
              alt="confluence"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Confluence
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Workspace Application
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/github.webp"}
              alt="github"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Github</p>
              <p className="text-gray-600 dark:text-gray-500">
                Software/Version Control tool
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/gitlab.webp"}
              alt="gitlab"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">GitLab</p>
              <p className="text-gray-600 dark:text-gray-500">
                DevSecOps Platform
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/teamcity.webp"}
              alt="teamcity"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                TeamCity
              </p>
              <p className="text-gray-600 dark:text-gray-500">CI/CD tool</p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/vercel.webp"}
              alt="vercel"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Vercel</p>
              <p className="text-gray-600 dark:text-gray-500">
                Hosting Service
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/google.webp"}
              alt="google apps"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Google Apps
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Workspace suite
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/m365.webp"}
              alt="microsoft 365"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Microsoft 365
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Workspace suite
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Analytics & SEO
          </h2>
          <p className=" ext-center text-gray-600 dark:text-gray-300">
            Tools for Analysis
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/googleanalytics.webp"}
              alt="google analytics"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">
                Google Analytics
              </p>
              <p className="text-gray-600 dark:text-gray-500">Analytics Tool</p>
            </div>
          </div>
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/hotjar.webp"}
              alt="hotjar"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">HotJar</p>
              <p className="text-gray-600 dark:text-gray-500">
                Behaviour Analytics
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/segment.webp"}
              alt="segment"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Segment</p>
              <p className="text-gray-600 dark:text-gray-500">
                Customer Data Platform
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/lighthouse.webp"}
              alt="lighthouse"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Lighthouse
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                SEO Analysis Tool
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/SEMRush.webp"}
              alt="semrush"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">SEMRush</p>
              <p className="text-gray-600 dark:text-gray-500">
                Marketing Analysis Platform
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto">
          <h2 className="text-center text-md font-bold text-gray-900 dark:text-white md:text-lg lg:text-xl">
            Design & Content Management
          </h2>
          <p className=" ext-center text-gray-600 dark:text-gray-300">
            Design, Content, Graphics, Video, Audio
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/figma.webp"}
              alt="figma"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div className="flex flex-col">
              <p className="font-bold text-gray-900 dark:text-white">Figma</p>
              <p className="text-gray-600 dark:text-gray-500">
                Collborative Design Tool
              </p>
            </div>
          </div>
          <div className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4">
            <Image
              className="rounded-full border"
              src={"/images/skills/canva.webp"}
              alt="canva"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">Canva</p>
              <p className="text-gray-600 dark:text-gray-500">Design tool</p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/photoshop.webp"}
              alt="photoshop"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Photoshop
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Graphics Editor
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/illustrator.webp"}
              alt="illustrator"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Illustrator
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Vector Graphics Editor
              </p>
            </div>
          </div>
          <div
            className="flex flex-row mx-auto items-center border bg-white dark:bg-gray-900
 border-gray-150 dark:border-gray-700 rounded-xl shadow-custom p-4 w-80 space-x-4"
          >
            <Image
              className="rounded-full border"
              src={"/images/skills/framer.webp"}
              alt="framer"
              height={50}
              width={50}
              objectFit="contain"
            />
            <div>
              <p className="font-bold text-gray-900 dark:text-white">
                Framer Motion
              </p>
              <p className="text-gray-600 dark:text-gray-500">
                Animation Library
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
