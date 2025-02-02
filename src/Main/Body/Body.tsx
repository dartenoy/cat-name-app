import React, { useState } from "react";
import Button from "../../components/buttons/Button";
import { StyledTitle } from "../../components/text/Titles";
import { StyledParagraph } from "../../components/text/Paragraphs";
import Dialog from "../Dialog/Dialog";
import { textContent } from "../../content";
import WhiteCard from "../../components/cards/WhiteCard";

const card = textContent.card;

const Body: React.FC = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const clickHandler = () => {
    setDialogOpen(true);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {dialogOpen && <Dialog setDialogOpen={setDialogOpen} />}
      <WhiteCard>
        <StyledTitle>{card.title}</StyledTitle>
        <StyledParagraph>{card.content}</StyledParagraph>
        <Button onClick={clickHandler} text={card.button} />
      </WhiteCard>
    </div>
  );
};

export default Body;
