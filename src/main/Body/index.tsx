import React, { useEffect, useState } from "react";
import WhiteCard from "../../components/cards/WhiteCard";
import Dialog from "../Dialog/index";
import Button from "../../components/buttons/Button";
import { StyledTitle } from "../../components/text/Titles";
import { StyledParagraph } from "../../components/text/Paragraphs";

const title = "List of Popular Cat Names!";
const paragraph =
  "Open the dialog to see a list of popular cat names. If you really hate the name - delete it!";
const buttonText = "Show cat names!";

const Body: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const clickHandler = () => {
    console.log("Button clicked");
    setDialogOpen(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {dialogOpen && <Dialog setDialogOpen={setDialogOpen} />}
      <WhiteCard>
        <StyledTitle text={title} />
        <StyledParagraph text={paragraph} />
        <Button onClick={clickHandler} text={buttonText} />
      </WhiteCard>
    </div>
  );
};

export default Body;
