import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  bgColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, bgColor, textColor }) => {
  const defaultBgColor = "bg-white";
  const defaultTextColor = "text-gray-900";
  const backgroundClass = bgColor ? `bg-${bgColor}` : defaultBgColor;
  const textClass = textColor ? `text-${textColor}` : defaultTextColor;

  return (
    <button
      onClick={onClick}
      type="button"
      className={`${backgroundClass} ${textClass} border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2`}
    >
      {text}
    </button>
  );
};

export default Button;
