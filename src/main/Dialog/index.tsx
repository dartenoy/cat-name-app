import React, { useState, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { StyledSmallTitle } from "../../components/text/Titles";
import useESCPress from "../../hooks/useESCPress";
import { textContent } from "../../content";
import ScrollBox from "./ScrollBox/index";
import Backdrop from "../../components/UI/Backdrop";
import DialogCard from "../../components/cards/DialogCard";
import LinkGroup from "./LinkGroup/index";
import LastMessageDeleted from "./LastMessageDeleted/index";

interface DialogProps {
  setDialogOpen: (open: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ setDialogOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayPicture, setDisplayPicture] = useState(false);

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

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleLastMessageDeletedClick = () => {
    setDisplayPicture(false);
  };

  return (
    <Backdrop isVisible={isVisible} handleBackdropClick={handleBackdropClick}>
      <DialogCard isVisible={isVisible}>
        <StyledSmallTitle text={textContent.dialog.dialogTitle} />
        <ScrollBox setDisplayPicture={setDisplayPicture} />
        {displayPicture && (
          <LastMessageDeleted clickHanlder={handleLastMessageDeletedClick} />
        )}
        <LinkGroup />
        <div className="flex justify-center mt-4">
          <Button
            text="Close"
            onClick={handleClose}
            bgColor="red-500"
            textColor="white"
            hoverBgColor="red-400"
          />
        </div>
      </DialogCard>
    </Backdrop>
  );
};

export default Dialog;
