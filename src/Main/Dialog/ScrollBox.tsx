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
const ScrollBox: React.FC<ScrollBoxProps> = ({ setDisplayPicture }) => {
  const [catNames, setCatNames] = useState(dataArray);
  const [visibleCatNames, setVisibleCatNames] = useState<typeof dataArray>([]);
  const [catNamesLoading, setCatNamesLoading] = useState(false);
  const [lastCatId, setLastCatId] = useState<string>("");

  useEffect(() => {
    ////// Setting first 20 cat names
    setVisibleCatNames(catNames.slice(0, 20));
    setLastCatId(catNames[catNames.length - 1]?.id);
  }, []);

  const { scrollRef, handleScroll } = useScrollControl(
    visibleCatNames,
    setVisibleCatNames,
    catNames,
    setCatNamesLoading
  );

  const handleRemove = (id: string) => {
    if (lastCatId === id) setDisplayPicture(true);
    const newCatNames = catNames.filter((cat: Cat) => cat.id !== id);
    setCatNames(newCatNames);
    setVisibleCatNames((prevVisible: []) =>
      prevVisible.filter((cat: Cat) => cat.id !== id)
    );
  };

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="max-h-60 overflow-y-auto p-4 border border-gray-300 rounded"
    >
      <ul>
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
        {catNamesLoading && (
          <li className="flex justify-center py-2">
            <Spinner />
          </li>
        )}
      </ul>
    </div>
  );
};

export default ScrollBox;
