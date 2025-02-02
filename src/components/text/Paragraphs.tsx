import React from "react";

interface Paragraph {
  children: string;
}

export const StyledParagraph: React.FC<Paragraph> = ({ children }) => {
  return <p className="mb-5 text-base text-gray-700">{children}</p>;
};

export const StyledSmalledParagraph: React.FC<Paragraph> = ({ children }) => {
  return <p className="mb-5 text-sm text-gray-700">{children}</p>;
};
