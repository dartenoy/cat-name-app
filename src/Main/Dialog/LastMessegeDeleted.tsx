import React from "react";
import { StyledSmalledParagraph } from "../../components/text/Paragraphs";
import { textContent } from "../../content";

interface LastMessageDeletedProps {
  clickHanlder: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const LastMessageDeleted: React.FC<LastMessageDeletedProps> = ({ clickHanlder }) => {
  return (
    <div
      className="flex flex-col justify-center items-center mt-1"
      onClick={clickHanlder}
    >
      <StyledSmalledParagraph>
        {textContent.dialog.deletedLastMessage}
      </StyledSmalledParagraph>
      <img
        src={textContent.dialog.deletedLastImg}
        alt="deleted last name - sad cat"
        className="w-30 h-15 "
      />
    </div>
  );
};

export default LastMessageDeleted;
