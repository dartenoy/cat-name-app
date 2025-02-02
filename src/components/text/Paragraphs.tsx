import React from "react";
interface Paragraph {
  text: string;
}

export const StyledParagraph: React.FC<Paragraph> = ({ text }) => {
  return <p className="mb-5 text-base text-gray-500 ">{text}</p>;
};

export const StyledSmalledParagraph: React.FC<Paragraph> = ({ text }) => {
  return <p className="mb-5 text-sm text-gray-500 ">{text}</p>;
};
