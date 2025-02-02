import React, { useState, useEffect, useRef } from "react";
import { textContent } from "../../content";
import useScrollControl from "../../hooks/useScrollControl";
import Spinner from "../../components/UI/Spinner";
import { addIdToNames } from "../../utils/addIdToItems";
import { StyledParagraph } from "../../components/text/Paragraphs";

interface ScrollBoxProps {
  setDisplayPicture: (displayPicture: boolean) => void;
}

interface Cat {
  name: string;
  id: string;
}

///// maximum height of the scroll in px, if any less - load more items
const scrollIsGoneTrigger = 256;

const dataArray = addIdToNames(textContent.dialog.catNames);
const ScrollBox: React.FC<ScrollBoxProps> = ({ setDisplayPicture }) => {
  const [catNames, setCatNames] = useState(dataArray);
  const [visibleCatNames, setVisibleCatNames] = useState<typeof dataArray>([]);
  const [catNamesLoading, setCatNamesLoading] = useState(false);
  const [lastCatId, setLastCatId] = useState<string>("");
  const cooldownRef = useRef(false);

  const { scrollRef, handleScroll } = useScrollControl(
    visibleCatNames,
    cooldownRef,
    loadMoreItems
  );

  useEffect(() => {
    ////// Setting first 20 cat names
    setVisibleCatNames(catNames.slice(0, 20));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    /// setting a new last cat name if last one is deleted
    setLastCatId(catNames[catNames.length - 1]?.id);
  }, [catNames]);

  useEffect(() => {
    /// loading more items when user keeps deleting items without ever scrolling
    if (visibleCatNames.length === 0) return;
    if (
      scrollRef.current?.scrollHeight &&
      scrollRef.current?.scrollHeight < scrollIsGoneTrigger
    )
      loadMoreItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleCatNames]);

  const handleRemove = (id: string) => {
    /// ignoring removal during loading to prevent some unexpected behavior
    if (catNamesLoading) return;

    //// handling when last item from the list is deleted
    if (lastCatId === id) setDisplayPicture(true);

    /// updating arrays without deleted id
    const newCatNames = catNames.filter((cat: Cat) => cat.id !== id);
    setCatNames(newCatNames);
    setVisibleCatNames((prevVisible: []) =>
      prevVisible.filter((cat: Cat) => cat.id !== id)
    );
  };

  function loadMoreItems() {
    /// handling when all items are loaded
    if (visibleCatNames.length >= catNames.length) {
      setCatNamesLoading(false);
      return;
    }

    //// simulating loading
    setCatNamesLoading(true);
    cooldownRef.current = true;
    setTimeout(() => {
      setVisibleCatNames((prevVisibleItems: []) => {
        const currentLength = prevVisibleItems.length;
        const newLength = currentLength + 20;
        setCatNamesLoading(false);
        return [...prevVisibleItems, ...catNames.slice(currentLength, newLength)];
      });
      cooldownRef.current = false;
    }, 1000);
  }

  return (
    <div
      ref={scrollRef}
      onScroll={handleScroll}
      className="max-h-60 overflow-y-auto p-4 border border-gray-300 rounded"
    >
      {visibleCatNames.length === 0 && !catNamesLoading && (
        <div className="text-center max-w-xs mx-auto">
          <StyledParagraph text="Congrats, you have deleted all the list items. You got nothing better to do?" />
        </div>
      )}
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
