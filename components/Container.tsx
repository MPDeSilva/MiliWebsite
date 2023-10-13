import { Children } from "react";

// @ts-ignore
export default function Container({ children }) {
  return (
    <div className="mx-auto w-full max-w-normal px-6 md:px-12 lg:px-6 xl:px-0">
      {children}
    </div>
  );
}
