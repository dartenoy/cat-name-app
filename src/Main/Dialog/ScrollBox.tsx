import React, { useState, useEffect } from "react";
import { textContent } from "../../content";
import useScrollControl from "../../hooks/useScrollControl";
import Spinner from "../../components/UI/Spinner";
import { addIdToNames } from "../../utils/addIdToItems";

interface ScrollBoxProps {
  setDisplayPicture: (displayPicture: boolean) => void;
}

interface Cat {
  name: string;
  id: string;
}

const dataArray = addIdToNames(textContent.dialog.catNames);
console.log(dataArray);
const ScrollBox: React.FC<ScrollBoxProps> = ({ setDisplayPicture }) => {
  const [catNames, setCatNames] = useState(dataArray);
  const [visibleCatNames, setVisibleCatNames] = useState<typeof dataArray>([]);
  const [catNamesLoading, setCatNamesLoading] = useState(false);
  const [lastCatName, setLastCatName] = useState<string>("");

  useEffect(() => {
    ////// Setting last 20 cat names
    setVisibleCatNames(catNames.slice(-20));
  }, [catNames]);

  useEffect(() => {
    console.log(visibleCatNames);
    if (visibleCatNames.length > 0) {
      /////// every time visibleCatNames changes, setting new lastCatName
      setLastCatName(visibleCatNames[visibleCatNames.length - 1].id);
    }
  }, [visibleCatNames]);

  const { scrollRef, handleScroll } = useScrollControl(
    visibleCatNames,
    setVisibleCatNames,
    catNames,
    setCatNamesLoading
  );

  const handleRemove = (id: string) => {
    /// if last cat name is same as deleted, setting display state
    if (lastCatName === id) setDisplayPicture(true);
    /// shallow copy of array, setting it to state wihtout deleted name
    const newCatNames = catNames.filter((cat: Cat) => cat.id !== id);
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
        {visibleCatNames.map((cat: Cat) => (
          <li key={cat.id} className="py-1 flex justify-between items-center">
            {cat.name}
            <button
              onClick={() => handleRemove(cat.id)}
              className="ml-4 text-red-500 hover:underline"
              tabIndex={-1}
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
