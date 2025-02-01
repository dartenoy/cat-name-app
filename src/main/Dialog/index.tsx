import React, { useState, useEffect } from "react";
import Button from "../../components/buttons/Button";
import Link from "../../components/text/Link";
import { StyledSmallTitle } from "../../components/text/Titles";
import { StyledSmalledParagraph } from "../../components/text/Paragraphs";
import useESCPress from "../../hooks/useESCPress";

interface DialogProps {
  setDialogOpen: (open: boolean) => void;
}

const dialogText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.";

const urls = [
  {
    url: "Google.com",
    text: "Google",
  },
  {
    url: "Facebook.com",
    text: "Facebook",
  },
  {
    url: "Twitter.com",
    text: "Twitter",
  },
];

const Dialog: React.FC<DialogProps> = ({ setDialogOpen }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setDialogOpen(false);
    }, 300);
  };

  useESCPress(handleClose);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      onClick={handleClose}
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-50 flex items-center justify-center transition-opacity duration-300 ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`bg-white bg-opacity-90 p-4 rounded shadow-lg max-w-md transform transition-transform duration-300 ease-in-out ${
          isVisible ? "scale-100" : "scale-75"
        }`}
      >
        <StyledSmallTitle text="Dialog Title" />
        <StyledSmalledParagraph text={dialogText} />
        <div className="flex justify-between items-center mt-4">
          <Button
            text="Close"
            onClick={handleClose}
            bgColor="red-500"
            textColor="white"
          />
          <ul className="flex space-x-4">
            {urls.map((link) => (
              <li key={link.url}>
                <Link url={link.url} text={link.text} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
