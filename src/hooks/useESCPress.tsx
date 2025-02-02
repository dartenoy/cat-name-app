import { useEffect } from "react";

type HandleCloseFunction = () => void;

const useESCPress = (handleClose: HandleCloseFunction) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleClose]);
};

export default useESCPress;
