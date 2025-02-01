import React from "react";
import StyledTitle from "../../components/text/title";
import WhiteCard from "../../components/cards/whiteCard";
import StyledParagraph from "../../components/text/paragraph";
import WhiteButton from "../../components/buttons/whiteButton";

const title = "Welcome to dialog demo!";
const paragraph =
  "This is a demo of a dialog component. Click the button below to open the dialog.";
const buttonText = "Open Dialog";

const Header: React.FC = () => {
  const clickHandler = () => {
    console.log("Button clicked");
  };
  return (
    <WhiteCard>
      <StyledTitle text={title} />
      <StyledParagraph text={paragraph} />
      <WhiteButton onClick={clickHandler} text={buttonText} />
    </WhiteCard>
  );
};

export default Header;
