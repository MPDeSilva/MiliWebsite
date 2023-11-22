import { useState } from "react";

export default function Faq({
  question,
  id,
  children,
}: {
  question: string;
  id: string;
  children: any;
}) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  console.log(active);

  return (
    <div className=" " onClick={handleClick}>
      <dl className="mx-auto max-w-2xl">
        <dt className="text-lg">
          <button
            type="button"
            className="flex w-full items-start justify-between py-6 text-left text-gray-400"
          >
            <span className="font-medium text-gray-900 dark:text-white">
              {question}
            </span>
            <span className="ml-6 flex h-7 items-center">
              <svg
                className={`arrow-down h-6 w-6 ${
                  active ? "rotate-180" : "rotate-0"
                } transform duration-300 ease-in-out`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </dt>
        <dd
          className={`${
            active ? "block " : "hidden"
          }  pr-12 overflow-hidden ease-in-out transition-all duration-300`}
        >
          {children}
        </dd>
      </dl>
    </div>
  );
}
