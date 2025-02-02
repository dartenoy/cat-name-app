import { useEffect, useRef } from "react";

//// how close to be next to bottom in px, to trigger item load
const tolerance = 5;

const useScrollControl = (
  cooldownRef: React.RefObject<boolean>,
  loadMoreItems: () => void
) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    /// scroll handler on cooldown
    if (cooldownRef.current === true) return;

    //// Loading more items when near very bottom of scroll
    if (
      scrollRef.current &&
      scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
        scrollRef.current.scrollHeight - tolerance
    )
      loadMoreItems();
  };

  return { scrollRef, handleScroll };
};

export default useScrollControl;
