import { LegacyRef } from "react";
import Container from "./Container";
import React from "react";

export default function NavBar() {
  const inputReference: LegacyRef<HTMLInputElement> | undefined =
    React.createRef();
  const ulReference: LegacyRef<HTMLUListElement> | undefined =
    React.createRef();

  const links: { to: string; label: string }[] = [
    {
      to: "#about",
      label: "About",
    },
    {
      to: "#workhistory",
      label: "Work History",
    },
    {
      to: "#skills",
      label: "Skills",
    },
    {
      to: "#education",
      label: "Education",
    },
    {
      to: "#references",
      label: "References",
    },
  ];

  const handleClickLink = () => {
    const toggleNav: HTMLInputElement | null = inputReference.current;
    // @ts-ignore
    const navItems: Element[] = [...ulReference.current.children];

    navItems.map((navItem: Element) => {
      const link: Element = navItem.children[0];
      link.addEventListener("click", () => {
        if (toggleNav?.checked === true) {
          toggleNav.checked = false;
        }
      });
    });
  };

  return (
    <header>
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 dark:border-white/5 lg:border-transparent bg-white bg-opacity-90 dark:bg-darker">
        <Container>
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-2 md:gap-0 md:py-4">
            <input
              aria-hidden="true"
              type="checkbox"
              name="toggle_nav"
              id="toggle_nav"
              className="peer hidden"
              ref={inputReference}
            />
            <div className="relative z-20 flex justify-between md:px-0 lg:w-max w-full">
              <a
                href="/"
                aria-label="logo"
                className="flex items-center space-x-2 w-full h-full"
              >
                <div
                  aria-hidden="true"
                  className="flex flex-row space-x-1 h-full items-center"
                >
                  <svg
                    width="35px"
                    height="35px"
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="currentColor"
                    strokeWidth={0.5}
                    className="m-auto text-primary fill-primary dark:text-white dark:fill-white"
                  >
                    <path d="M 2 7 L 2 25 L 30 25 L 30 7 L 2 7 z M 4 9 L 28 9 L 28 23 L 4 23 L 4 9 z M 6 11 L 6 21 L 9 21 C 10.654 21 12 19.654 12 18 L 12 14 C 12 12.346 10.654 11 9 11 L 6 11 z M 16 11 C 14.897 11 14 11.897 14 13 L 14 19 C 14 20.103 14.897 21 16 21 L 18 21 L 18 19 L 16 19 L 16 17 L 18 17 L 18 15 L 16 15 L 16 13 L 18 13 L 18 11 L 16 11 z M 19.691406 11 L 21.775391 20.025391 C 21.907391 20.595391 22.415 21 23 21 C 23.585 21 24.092609 20.595391 24.224609 20.025391 L 26.308594 11 L 24.255859 11 L 23 16.439453 L 21.744141 11 L 19.691406 11 z M 8 13 L 9 13 C 9.552 13 10 13.448 10 14 L 10 18 C 10 18.552 9.552 19 9 19 L 8 19 L 8 13 z" />
                  </svg>
                </div>
                <span className="text-2xl font-medium text-gray-900 dark:text-white">
                  Mili
                </span>
              </a>

              <div className="relative flex max-h-10 items-center lg:hidden">
                <label
                  role="button"
                  htmlFor="toggle_nav"
                  aria-label="humburger"
                  id="hamburger"
                  className="relative -mr-6 p-6"
                >
                  <div
                    aria-hidden="true"
                    id="line"
                    className="m-auto h-0.5 w-5 rounded bg-primary transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line2"
                    className="m-auto mt-1 h-0.5 w-5 rounded bg-primary transition duration-300 dark:bg-gray-300"
                  ></div>
                  <div
                    aria-hidden="true"
                    id="line3"
                    className="m-auto mt-1 h-0.5 w-5 rounded bg-primary transition duration-300 dark:bg-gray-300"
                  ></div>
                </label>
              </div>
            </div>
            <div
              aria-hidden="true"
              className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 dark:bg-gray-900/70 lg:hidden"
            ></div>
            <div className="invisible absolute top-full left-0 z-20 w-full origin-top translate-y-1 scale-95 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 peer-checked:visible peer-checked:scale-100 peer-checked:opacity-100 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:peer-checked:translate-y-0">
              <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                <ul
                  className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm"
                  ref={ulReference}
                >
                  {links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.to}
                        className="block transition hover:text-primary dark:hover:text-white md:px-4"
                        onClick={handleClickLink}
                      >
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 lg:mt-0">
                <a
                  href="https://drive.google.com/file/d/1jINMPeKbc4A2MrXKoWY40iXDuPINKZf2/view?usp=drive_link"
                  className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-sm font-semibold text-white">
                    {" "}
                    Download CV
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </nav>

      <style jsx>
        {`
          #toggle_nav:checked ~ div #hamburger #line {
            @apply translate-y-1.5 rotate-45;
          }

          #toggle_nav:checked ~ div #hamburger #line2 {
            @apply -translate-y-1 -rotate-45;
          }
        `}
      </style>
    </header>
  );
}
