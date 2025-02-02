import React, { useState, useEffect } from "react";
import Button from "../../components/buttons/Button";
import { StyledSmallTitle } from "../../components/text/Titles";
import useESCPress from "../../hooks/useESCPress";
import { textContent } from "../../content";
import ScrollBox from "./ScrollBox";
import Backdrop from "../../components/UI/Backdrop";
import DialogCard from "../../components/cards/DialogCard";
import LinkGroup from "./LinkGroup";
import LastMessageDeleted from "./LastMessegeDeleted";

interface DialogProps {
  setDialogOpen: (open: boolean) => void;
}

const Dialog: React.FC<DialogProps> = ({ setDialogOpen }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayPicture, setDisplayPicture] = useState(false);

  const handleClose = () => {
    /// Timeout to wait for animation to finish
    setIsVisible(false);
    setTimeout(() => {
      setDialogOpen(false);
    }, 300);
  };

  useESCPress(handleClose);

  useEffect(() => {
    // Triggers animation on mount
    setIsVisible(true);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleLastMessageDeletedClick = () => {
    /// hides the picture displayed after deleting last name.
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
