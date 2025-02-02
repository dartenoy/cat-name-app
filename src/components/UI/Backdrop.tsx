import React from "react";

interface BackdropProps {
  isVisible: boolean;
  handleBackdropClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
}

const Backdrop: React.FC<BackdropProps> = ({
  isVisible,
  handleBackdropClick,
  children,
}) => {
  return (
    <div
      onClick={handleBackdropClick}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

export default Backdrop;
