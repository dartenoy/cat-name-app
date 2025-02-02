import { useEffect, useRef } from "react";

const tolerance = 5;

const useScrollControl = (
  visibleItems: any[],
  cooldownRef: React.RefObject<boolean>,
  loadMoreItems: () => void
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef(0);

  const handleScroll = () => {
    /// scroll handler on cooldown
    if (cooldownRef.current === true) return;
    ///// checking is scroll is down
    if (
      scrollRef.current &&
      scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
        scrollRef.current.scrollHeight - tolerance
    )
      loadMoreItems();
  };

  useEffect(() => {
    //// saving scroll position once new items are loaded
    if (scrollRef.current && prevScrollHeight.current) {
      scrollRef.current.scrollTop =
        scrollRef.current.scrollHeight - prevScrollHeight.current;
      prevScrollHeight.current = 0;
    }
  }, [visibleItems]);

  return { scrollRef, handleScroll };
};

export default useScrollControl;
