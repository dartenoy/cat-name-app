import React, { useState, useEffect } from "react";
import { textContent } from "../../../content";
import useScrollControl from "../../../hooks/useScrollControl";
import Spinner from "../../../components/UI/Spinner";

interface ScrollBoxProps {
  setDisplayPicture: (displayPicture: boolean) => void;
}

const ScrollBox: React.FC<ScrollBoxProps> = ({ setDisplayPicture }) => {
  const [catNames, setCatNames] = useState(textContent.dialog.catNames);
  const [visibleCatNames, setVisibleCatNames] = useState<string[]>([]);
  const [catNamesLoading, setCatNamesLoading] = useState(false);
  const [lastCatName, setLastCatName] = useState<string>("");

  useEffect(() => {
    setVisibleCatNames(catNames.slice(-20));
  }, [catNames]);

  useEffect(() => {
    if (visibleCatNames.length > 0) {
      setLastCatName(visibleCatNames[visibleCatNames.length - 1]);
    }
  }, [visibleCatNames]);

  const { scrollRef, handleScroll } = useScrollControl(
    visibleCatNames,
    setVisibleCatNames,
    catNames,
    setCatNamesLoading
  );

  const handleRemove = (name: string) => {
    if (lastCatName === name) setDisplayPicture(true);
    const newCatNames = catNames.filter((catName) => catName !== name);
    setCatNames(newCatNames);
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="max-h-64 overflow-y-auto p-4 border border-gray-300 rounded"
    >
      <ul>
        {catNamesLoading && (
          <li className="flex justify-center py-2">
            <Spinner />
          </li>
        )}
        {visibleCatNames.map((name: string) => (
          <li key={name} className="py-1 flex justify-between items-center">
            {name}
            <button
              onClick={() => handleRemove(name)}
              className="ml-4 text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScrollBox;
