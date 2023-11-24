import React from "react";
import Image from "next/image";
import Container from "./Container";

const WorkHistory = () => {
  return (
    <div id="workhistory" className="pt-32 md:pt-44">
      <Container>
        <div className="flex-row-reverse items-center justify-between space-y-12 text-gray-600 md:flex md:gap-6 lg:gap-12 lg:space-y-0">
          <div className="relative ml-auto h-full md:w-1/2">
            <Image
              className="dark:hidden"
              src="/images/work.jpg"
              alt="work"
              width="1174"
              height="1134"
            />
            <Image
              className="hidden dark:block"
              src="/images/work-dark.jpg"
              alt="work"
              width="1174"
              height="1134"
            />
          </div>

          <div className="md:w-1/2 lg:w-[47%]">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
              My Work Story So Far...
            </h2>
            <p className="my-12 text-gray-600 dark:text-gray-300">
              I am dedicated Junior Software Developer with a track record of
              contributing to impactful projects in both front-end and back-end
              development.
              <br />
              <br />
              Throughout my career, I have consistently demonstrated a
              commitment to excellence, strong coding skills, and a
              collaborative mindset. My experience includes managing and
              enhancing websites, converting designs into functional code,
              optimizing web performance, and actively participating in
              application development. I excel in using modern technologies such
              as JavaScript, ReactJS, NextJS, TypeScript, and more to create
              seamless user experiences.
              <br />
              <br /> Additionally, I have expertise in IT support, network
              infrastructure, and regulatory compliance, which I gained during
              my tenure as an Information Technology Specialist. I am passionate
              about continuous learning and thrive in agile environments, always
              eager to contribute and grow in the tech industry.
            </p>
            <div className="space-y-4 divide-y divide-gray-100 dark:divide-gray-800">
              <div className="mt-8 flex gap-4 md:items-center">
                <div className="flex h-12 w-12 gap-4 rounded border border-gray-200 dark:border-gray-900">
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 122.879 103.148"
                    xmlSpace="preserve"
                    className="p-2"
                  >
                    <g>
                      <path d="M55.36,52.179c-0.484,0.284-1.038,0.346-1.542,0.216c-0.504-0.131-0.958-0.455-1.243-0.938l0-0.001 c-0.284-0.484-0.346-1.039-0.215-1.542c0.13-0.503,0.453-0.958,0.936-1.242l0,0l36.073-21.556l3.195-9.961l0,0 c0.079-0.247,0.2-0.469,0.353-0.659c0.16-0.198,0.354-0.362,0.569-0.487L111.88,5.385h0.001c0.488-0.282,1.045-0.34,1.548-0.205 c0.505,0.135,0.958,0.463,1.24,0.951v0.001c0.142,0.246,0.227,0.506,0.259,0.769c0.033,0.27,0.012,0.542-0.06,0.8L113.233,16 l8.298,2.988c0.529,0.19,0.933,0.578,1.154,1.049c0.222,0.471,0.264,1.028,0.074,1.557c-0.084,0.233-0.205,0.44-0.354,0.618 c-0.099,0.118-0.211,0.225-0.333,0.316l0.011,0.017l-0.222,0.128l-18.396,10.621l0,0c-0.264,0.152-0.549,0.239-0.835,0.266 c-0.297,0.027-0.594-0.011-0.869-0.109l-10.344-2.82L55.362,52.178L55.36,52.179L55.36,52.179L55.36,52.179z M64.92,1.768 c4.658,1.249,8.996,3.097,12.952,5.44c4.088,2.421,7.77,5.37,10.977,8.732c0.146,0.152,0.139,0.394-0.014,0.539 c-0.01,0.01-0.021,0.02-0.032,0.028l0,0l-2.872,2.172c-0.16,0.121-0.387,0.096-0.517-0.054c-2.913-2.998-6.243-5.628-9.93-7.79 c-3.573-2.096-7.487-3.752-11.687-4.878c-6.179-1.655-12.4-2.005-18.37-1.219c-6.202,0.817-12.133,2.86-17.466,5.939v0 c-5.334,3.08-10.069,7.195-13.877,12.157c-3.666,4.777-6.473,10.339-8.128,16.518c-1.655,6.179-2.005,12.4-1.219,18.369 c0.817,6.2,2.86,12.133,5.94,17.466l0.01,0.02c3.078,5.325,7.189,10.054,12.146,13.858c4.776,3.666,10.338,6.474,16.516,8.129 c6.178,1.655,12.399,2.005,18.368,1.219c6.2-0.817,12.132-2.86,17.466-5.94c5.334-3.079,10.07-7.195,13.878-12.156 c3.666-4.777,6.474-10.34,8.128-16.517c1.103-4.115,1.627-8.247,1.621-12.309c-0.005-4.191-0.574-8.315-1.653-12.274 c-0.052-0.19,0.05-0.385,0.229-0.456l3.29-1.458c0.193-0.085,0.419,0.003,0.503,0.195c0.01,0.022,0.018,0.044,0.022,0.066 c1.244,4.389,1.913,8.974,1.944,13.646c0.03,4.527-0.54,9.131-1.767,13.71c-1.808,6.745-4.873,12.818-8.876,18.034 c-4.158,5.419-9.328,9.912-15.149,13.274l-0.021,0.012c-5.817,3.354-12.286,5.581-19.049,6.471 c-6.52,0.859-13.312,0.478-20.055-1.329c-6.744-1.807-12.816-4.872-18.033-8.875c-5.417-4.158-9.911-9.328-13.273-15.15h0 C3.561,71.533,1.33,65.057,0.438,58.284c-0.858-6.52-0.477-13.312,1.33-20.055c1.807-6.745,4.873-12.818,8.875-18.034 c4.158-5.419,9.328-9.913,15.149-13.274C31.615,3.56,38.091,1.33,44.863,0.438C51.383-0.42,58.176-0.039,64.92,1.768L64.92,1.768z M55.828,36.375c0.657,0.184,1.295,0.407,1.912,0.668c0.634,0.268,1.244,0.574,1.826,0.915c0.181,0.106,0.242,0.339,0.136,0.521 c-0.026,0.045-0.06,0.082-0.099,0.111l0,0.001l-3.167,2.395c-0.118,0.089-0.271,0.099-0.396,0.039 c-0.223-0.095-0.449-0.182-0.674-0.261c-0.226-0.08-0.461-0.153-0.704-0.222l-0.111-0.025l-0.014-0.004v0 c-1.499-0.401-3.008-0.486-4.454-0.296c-1.503,0.198-2.941,0.694-4.234,1.44c-1.293,0.747-2.442,1.745-3.365,2.948 c-0.889,1.158-1.57,2.507-1.972,4.005c-0.401,1.499-0.486,3.008-0.296,4.455c0.198,1.503,0.693,2.941,1.44,4.235 c0.747,1.293,1.745,2.441,2.947,3.364c1.159,0.89,2.508,1.57,4.005,1.972c0.019,0.005,0.039,0.012,0.056,0.02 c1.479,0.388,2.968,0.467,4.396,0.278c1.503-0.199,2.942-0.695,4.236-1.442c1.296-0.748,2.445-1.747,3.368-2.947l-0.001-0.001 c0.89-1.157,1.57-2.504,1.973-3.999l0,0l0.066-0.263c0.031-0.121,0.117-0.215,0.226-0.259l3.857-1.709 c0.193-0.085,0.418,0.003,0.504,0.195c0.026,0.061,0.036,0.125,0.03,0.187c-0.035,0.492-0.096,0.988-0.179,1.485 c-0.084,0.493-0.19,0.985-0.321,1.474l-0.001,0.002h0.001l-0.003,0.01l-0.005,0.017c-0.554,2.057-1.49,3.91-2.712,5.502 c-1.272,1.659-2.854,3.034-4.634,4.063l-0.021,0.012c-1.776,1.021-3.75,1.699-5.814,1.971c-1.979,0.26-4.04,0.147-6.085-0.393 c-0.02-0.002-0.04-0.006-0.059-0.011h-0.001h0c-2.064-0.553-3.924-1.492-5.521-2.718c-1.659-1.273-3.036-2.856-4.065-4.641 c-1.029-1.783-1.713-3.767-1.985-5.839c-0.263-1.998-0.147-4.078,0.406-6.142c0.553-2.064,1.492-3.924,2.718-5.521 c1.273-1.66,2.857-3.036,4.64-4.065l0.021-0.012c1.777-1.022,3.753-1.701,5.819-1.973c1.997-0.263,4.077-0.147,6.14,0.406 l0.017,0.005c0.026,0.007,0.05,0.014,0.07,0.021C55.775,36.356,55.803,36.365,55.828,36.375L55.828,36.375z M60.345,18.837 c2.712,0.727,5.26,1.763,7.614,3.061c2.427,1.338,4.647,2.954,6.633,4.794c0.154,0.144,0.163,0.385,0.02,0.539 c-0.016,0.016-0.031,0.031-0.049,0.044l0,0l-2.902,2.195c-0.155,0.117-0.37,0.098-0.502-0.037c-1.681-1.49-3.547-2.799-5.574-3.889 c-1.975-1.061-4.102-1.913-6.361-2.518c-3.867-1.036-7.761-1.255-11.497-0.763c-3.879,0.511-7.591,1.789-10.929,3.716l-0.02,0.01 c-3.329,1.925-6.285,4.497-8.665,7.597c-2.294,2.989-4.051,6.471-5.086,10.337c-1.036,3.867-1.255,7.76-0.764,11.495 c0.511,3.881,1.79,7.594,3.716,10.931h0c1.927,3.337,4.502,6.301,7.607,8.683c2.99,2.295,6.471,4.052,10.337,5.088 c3.866,1.037,7.76,1.256,11.494,0.764c3.881-0.512,7.594-1.79,10.932-3.717h-0.001c3.338-1.928,6.302-4.503,8.685-7.607 c2.293-2.989,4.051-6.47,5.086-10.336c0.569-2.123,0.892-4.251,0.985-6.354c0.097-2.165-0.049-4.308-0.416-6.397 c-0.031-0.181,0.07-0.354,0.233-0.42l3.347-1.483c0.192-0.085,0.418,0.003,0.503,0.195c0.016,0.035,0.024,0.07,0.029,0.105 c0.51,2.518,0.737,5.113,0.654,7.741c-0.08,2.563-0.454,5.156-1.145,7.735c-1.188,4.433-3.203,8.424-5.834,11.853 c-2.732,3.56-6.131,6.514-9.959,8.724l0.001,0.001c-3.827,2.209-8.085,3.676-12.536,4.262c-4.286,0.564-8.75,0.314-13.181-0.873 c-4.433-1.188-8.424-3.204-11.854-5.835c-3.561-2.733-6.515-6.131-8.724-9.957l-0.012-0.022c-2.203-3.821-3.665-8.071-4.25-12.514 c-0.564-4.286-0.314-8.75,0.874-13.182c1.188-4.432,3.202-8.424,5.834-11.853c2.733-3.562,6.131-6.516,9.958-8.725l0.021-0.012 c3.822-2.203,8.071-3.665,12.513-4.249C51.449,17.399,55.914,17.65,60.345,18.837L60.345,18.837z M108.899,16.93l1.137-5.766 l-13.832,7.986l-2.525,7.875l8.477,2.311l13.861-8.003l-5.808-2.093c-0.47-0.168-0.849-0.5-1.083-0.914 C108.893,17.917,108.801,17.426,108.899,16.93L108.899,16.93z" />
                    </g>
                  </svg>
                </div>
                <div className="w-5/6">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                    Determined Go-Getter
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    An unwavering commitment and drive
                  </p>
                </div>
              </div>
              <div className="flex gap-4 pt-4 md:items-center"></div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WorkHistory;