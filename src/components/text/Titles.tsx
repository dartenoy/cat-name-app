import React from "react";

interface Title {
  text: string;
}

export const StyledSmallTitle: React.FC<Title> = ({ text }) => {
  return <p className="text-xl font-bold mb-4">{text}</p>;
};

export const StyledTitle: React.FC<Title> = ({ text }) => {
  return (
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{text}</h5>
  );
};
