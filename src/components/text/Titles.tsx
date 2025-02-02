import React from "react";

interface Title {
  children: string;
}

export const StyledSmallTitle: React.FC<Title> = ({ children }) => {
  return <h6 className="text-lg font-bold mb-4 text-center">{children}</h6>;
};

export const StyledTitle: React.FC<Title> = ({ children }) => {
  return (
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{children}</h5>
  );
};
