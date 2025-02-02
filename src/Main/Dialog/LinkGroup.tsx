import React from "react";
import { textContent, urls } from "../../content";
import Link from "../../components/text/Link";
import { StyledSmallTitle } from "../../components/text/Titles";

const LinkGroup: React.FC = () => {
  return (
    <>
      <StyledSmallTitle>{textContent.dialog.secondaryTitle}</StyledSmallTitle>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {urls.map((link) => (
          <div key={link.url} className="text-center">
            <Link url={link.url} text={link.text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default LinkGroup;
