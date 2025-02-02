import React from "react";
import { urls } from "../../content";
import Link from "../../components/text/Link";

const LinkGroup: React.FC = () => {
  return (
    <>
      <div className="text-center font-bold mt-4">For Cats:</div>
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
