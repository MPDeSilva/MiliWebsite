import Feature from "./Feature";
import Container from "./Container";
import Image from "next/image.js";

export default function Features() {
  return (
    <div className="relative pt-20 md:pt-40" id="features">
      <Container>
        <div className="mx-auto md:w-3/5">
          <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
            What can I offer you
          </h2>
          <p className="mt-4 text-center text-gray-600 dark:text-gray-300">
            I'm a jack-of-all-trades, a man of many talents, but I can be shaped
            to meet your needs.
          </p>
        </div>

        <div className="mt-16 md:mt-10">
          <div className="relative grid rounded-3xl border border-gray-200 p-1 dark:border-gray-800 md:grid-cols-3">
            <Feature
              title="Solid Expertise"
              description="With my experience in software development, I offer a solid foundation in crafting efficient solutions and a deep understanding of various technologies."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="m-auto h-6 w-6 text-gray-700 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                ></path>
              </svg>
            </Feature>

            <Feature
              title="Adaptable Problem Solver"
              description="I enjoy tackling challenges and adapting to new situations, traits I've developed through my years of experience."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="m-auto h-6 w-6 text-gray-700 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                ></path>
              </svg>
            </Feature>

            <Feature
              title="Team Player"
              description="I work effectively within teams, sharing my knowledge and collaborating with colleagues to achieve our goals."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 40 40"
                enableBackground="new 0 0 40 40"
                stroke="currentColor"
                className="m-auto h-10 w-10 text-gray-700 dark:text-white"
              >
                <g>
                  <g>
                    <g>
                      <g>
                        <g>
                          <path d="M20,21.9c-1.5,0-2.7-1.3-2.7-3s1.2-3,2.7-3s2.7,1.3,2.7,3S21.5,21.9,20,21.9z M20,16.9c-0.9,0-1.7,0.9-1.7,2       s0.7,2,1.7,2s1.7-0.9,1.7-2S20.9,16.9,20,16.9z" />
                        </g>
                        <g>
                          <path d="M21.1,20.6h0.2c1.6,0,2.9,1.3,2.9,2.9v2.1c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5v-2.1c0-1-0.9-1.9-1.9-1.9h-0.2V20.6       z" />
                        </g>
                        <g>
                          <path d="M18.9,21.6h-0.2c-1,0-1.9,0.9-1.9,1.9v2.1c0,0.3-0.2,0.5-0.5,0.5s-0.5-0.2-0.5-0.5v-2.1c0-1.6,1.3-2.9,2.9-2.9h0.2       V21.6z" />
                        </g>
                      </g>
                      <g>
                        <g>
                          <g>
                            <path d="M25.5,19.9c-1.2,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S26.7,19.9,25.5,19.9z M25.5,15.9        c-0.7,0-1.3,0.7-1.3,1.5s0.6,1.5,1.3,1.5s1.3-0.7,1.3-1.5S26.2,15.9,25.5,15.9z" />
                          </g>
                          <g>
                            <path d="M26.4,18.7h0.2c1.3,0,2.4,1.1,2.4,2.4v1.7c0,0.3-0.2,0.5-0.5,0.5S28,23.1,28,22.8v-1.7c0-0.8-0.6-1.4-1.4-1.4h-0.2        V18.7z" />
                          </g>
                          <g>
                            <path d="M24.6,19.7h-0.2c-0.8,0-1.4,0.6-1.4,1.4c0,0.3-0.2,0.5-0.5,0.5S22,21.4,22,21.1c0-1.3,1.1-2.4,2.4-2.4h0.2V19.7z" />
                          </g>
                        </g>
                        <g>
                          <g>
                            <path d="M14.5,19.9c-1.2,0-2.3-1.1-2.3-2.5s1-2.5,2.3-2.5s2.3,1.1,2.3,2.5S15.7,19.9,14.5,19.9z M14.5,15.9        c-0.7,0-1.3,0.7-1.3,1.5s0.6,1.5,1.3,1.5s1.3-0.7,1.3-1.5S15.2,15.9,14.5,15.9z" />
                          </g>
                          <g>
                            <path d="M15.4,18.7h0.2c1.3,0,2.4,1.1,2.4,2.4c0,0.3-0.2,0.5-0.5,0.5S17,21.4,17,21.1c0-0.8-0.6-1.4-1.4-1.4h-0.2V18.7z" />
                          </g>
                          <g>
                            <path d="M13.6,19.7h-0.2c-0.8,0-1.4,0.6-1.4,1.4v1.7c0,0.3-0.2,0.5-0.5,0.5S11,23.1,11,22.8v-1.7c0-1.3,1.1-2.4,2.4-2.4h0.2        V19.7z" />
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </svg>
            </Feature>

            <Feature
              title="Effective Communicator"
              description="I have honed my communication skills, ensuring smooth interactions and a shared understanding among team members."
            >
              <svg
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                stroke="currentColor"
                className="m-auto h-6 w-6 text-gray-700 dark:text-white"
              >
                <title>
                  communication / 16 - communication, bubble, chat, comments,
                  conversation, message icon
                </title>
                <g
                  id="Free-Icons"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <g
                    transform="translate(-1265.000000, -156.000000)"
                    id="Group"
                    strokeWidth="1"
                  >
                    <g
                      transform="translate(1263.000000, 154.000000)"
                      id="Shape"
                    >
                      <path d="M8.29997591,16.1586109 L4.71,18.3 L5.32628923,14.6238888 C3.83281239,13.3921212 3,11.6856969 3,9.8 C3,6.0444637 6.30329488,3 11.55,3 C16.7967051,3 20.1,6.0444637 20.1,9.8 C20.1,13.5555363 16.7967051,16.6 11.55,16.6 C10.3617053,16.6 9.27309774,16.4438342 8.29997591,16.1586109 Z"></path>
                      <path d="M19.7000346,12 C20.5370398,12.8311353 21,13.932301 21,15.1401596 C21,16.4401458 20.4637233,17.6165428 19.5020218,18.4657147 L19.8988718,21 L17.587162,19.5237413 C16.9605351,19.7203723 16.259543,19.8280319 15.4943589,19.8280319 C12.7385072,19.8280319 10.8153028,18.4315592 10.2,16.5116586 L10.2,16.5116586"></path>
                    </g>
                  </g>
                </g>
              </svg>
            </Feature>

            <Feature
              title="Continuous Learning"
              description="I maintain a commitment to ongoing learning, keeping up with industry advancements and integrating them into my work."
            >
              <svg
                version="1.1"
                id="Icons"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 32 32"
                xmlSpace="preserve"
                stroke="currentColor"
                className="m-auto h-6 w-6 text-gray-700 dark:text-white"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path className="st0" d="M10,10 L20,20" />
                  <line className="st0" x1="20" y1="24" x2="20" y2="29"></line>
                  <path
                    className="st0"
                    d="M18.8,11.2c-1.1,0.2-2,0-2.4-0.7c-0.4-0.7-0.1-1.7,0.6-2.5c-0.9-0.9-1.9-1.5-3.1-1.8c-0.3,1-1,1.8-1.8,1.8 s-1.5-0.7-1.8-1.8C9,6.6,7.9,7.2,7.1,8c0.7,0.8,1,1.8,0.6,2.5c-0.4,0.7-1.4,0.9-2.4,0.7C5.1,11.8,5,12.4,5,13s0.1,1.2,0.2,1.8 c1.1-0.2,2,0,2.4,0.7c0.4,0.7,0.1,1.7-0.6,2.5c0.9,0.9,1.9,1.5,3.1,1.8c0.3-1,1-1.8,1.8-1.8s1.5,0.7,1.8,1.8 c1.2-0.3,2.3-0.9,3.1-1.8c-0.7-0.8-1-1.8-0.6-2.5c0.4-0.7-1.4-0.9-2.4-0.7c0.2-0.6,0.2-1.2,0.2-1.8S18.9,11.8,18.8,11.2z"
                  ></path>
                  <g>
                    <path d="M12,14c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.1-0.1-0.2-0.2-0.2-0.3c0-0.1-0.1-0.3-0.1-0.4 c0-0.1,0-0.3,0.1-0.4c0.1-0.1,0.1-0.2,0.2-0.3c0.4-0.4,1-0.4,1.4,0c0.1-0.1,0.2-0.2,0.2-0.3c0-0.1-0.1-0.3-0.1-0.4 c0-0.1,0-0.3-0.1-0.4c-0.1-0.1-0.1-0.2-0.2-0.3C12.5,13.9,12.3,14,12,14z"></path>
                  </g>
                  <line
                    className="st0"
                    x1="10"
                    y1="19.7"
                    x2="10"
                    y2="27"
                  ></line>
                  <path
                    className="st0"
                    d="M19,24h4c1.1,0,2-0.9,2-2v-4h3l-3-6c0-5-4-9-9-9c-3,0-5.7,1.5-7.3,3.8"
                  ></path>
                </g>
              </svg>
            </Feature>

            <Feature
              title="Passion for Growth"
              description="Despite my years in the field, I maintain a strong drive to grow and contribute meaningfully to your organization's success."
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="m-auto h-6 w-6 text-gray-700 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                ></path>
              </svg>
            </Feature>
          </div>
        </div>
      </Container>
    </div>
  );
}
