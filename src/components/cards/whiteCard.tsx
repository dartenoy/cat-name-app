import React, { ReactNode } from "react";

interface CardProp {
  children: ReactNode;
}

const WhiteCard: React.FC<CardProp> = ({ children }) => {
  return (
    <div className="max-w-lg p-4 mx-auto text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

export default WhiteCard;
