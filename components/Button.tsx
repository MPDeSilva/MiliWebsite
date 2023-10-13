import React from "react";

export interface Button {
  primary: boolean;
  secondary: boolean;
  label: string;
  link: string;
  onClick: () => {};
}

const Button: React.FC<Button> = ({
  primary,
  secondary,
  label,
  link,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center px-6 rounded-3xl font-bold h-11 cursor-pointer ${
        primary && "bg-primary text-white"
      } ${
        secondary &&
        " bg-primary/10  text-primary dark:text-white border border-primary/10"
      } ${link && "cursor-pointer"}`}
    >
      {label}
    </div>
  );
};

export default Button;
