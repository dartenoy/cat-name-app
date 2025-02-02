import React, { ReactNode } from "react";

interface CardProp {
  children: ReactNode;
}

const WhiteCard: React.FC<CardProp> = ({ children }) => {
  return (
    <div className="max-w-lg p-4 mx-auto text-center bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 mt-4">
      {children}
    </div>
  );
};

export default WhiteCard;
