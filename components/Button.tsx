import Link from "next/link";
import { Router } from "next/router";
import React from "react";

export interface Button {
  primary: boolean;
  secondary: boolean;
  label: string;
  link?: string;
  onClick?: any;
}

const Button: React.FC<Button> = ({
  primary,
  secondary,
  label,
  link,
  onClick,
}) => {
  return (
    <Link href={link || ""}>
      <div
        onClick={onClick}
        className={`flex items-center px-6 rounded-3xl font-bold h-11 cursor-pointer ${
          primary && "bg-primary text-white"
        } ${
          secondary &&
          " bg-primary/10  text-primary dark:text-white border border-primary/10"
        } ${link && "cursor-pointer"}`}
      >
        {label}
      </div>
    </Link>
  );
};

export default Button;
