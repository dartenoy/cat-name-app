import React from "react";

interface Title {
  text: string;
}

const StyledTitle: React.FC<Title> = ({ text }) => {
  return (
    <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">{text}</h5>
  );
};

export default StyledTitle;
