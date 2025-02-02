import React from "react";

interface DialogCardProps {
  children: React.ReactNode;
  isVisible: boolean;
}

const DialogCard: React.FC<DialogCardProps> = ({ children, isVisible }) => {
  return (
    <div
      role="dialog"
      aria-modal="true"
      className={`bg-white bg-opacity-90 p-6 rounded shadow-lg max-w-lg min-h-1/4 max-h-3/4 transform transition-transform duration-300 ease-in-out 
    ${isVisible ? "scale-100" : "scale-75"}`}
    >
      {children}
    </div>
  );
};

export default DialogCard;
