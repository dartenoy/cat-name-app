import React from "react";

interface LinkProps {
  url: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ url, text }) => {
  return (
    <a href={`https://${url}`} className="text-blue-500 underline">
      {text}
    </a>
  );
};

export default Link;
