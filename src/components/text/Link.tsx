import React from "react";

interface LinkProps {
  url: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ url, text }) => {
  return (
    <a
      href={url}
      className={`text-blue-500 underline`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  );
};

export default Link;
