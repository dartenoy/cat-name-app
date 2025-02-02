import { act, useEffect } from "react";

type HandleCloseFunction = () => void;

const action = "keydown";
const key = "Escape";

const useESCPress = (handleClose: HandleCloseFunction) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === key) {
        handleClose();
      }
    };

    document.addEventListener(action, handleKeyPress);
    return () => {
      document.removeEventListener(action, handleKeyPress);
    };
  }, [handleClose]);
};

export default useESCPress;
