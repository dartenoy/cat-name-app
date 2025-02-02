import { useEffect, useRef } from "react";

const tolerance = 5;

const useScrollControl = (
  visibleItems: any[],
  setVisibleItems: (items: any[] | ((prevVisibleItems: any[]) => any[])) => void,
  allItems: any[],
  setLoading: (loading: boolean) => void
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const prevScrollHeight = useRef(0);
  const cooldownRef = useRef(false);

  const handleScroll = () => {
    /// scroll handler on cooldown
    if (cooldownRef.current === true) return;
    ///// checking is scroll is down
    if (
      scrollRef.current &&
      scrollRef.current.scrollTop + scrollRef.current.clientHeight >=
        scrollRef.current.scrollHeight - tolerance
    ) {
      /// handling when all items are loaded
      if (visibleItems.length >= allItems.length) {
        setLoading(false);
        return;
      }

      //// simulating loading
      setLoading(true);
      cooldownRef.current = true;
      setTimeout(() => {
        setVisibleItems((prevVisibleItems) => {
          const currentLength = prevVisibleItems.length;
          const newLength = currentLength + 20;
          setLoading(false);
          return [...prevVisibleItems, ...allItems.slice(currentLength, newLength)];
        });
        cooldownRef.current = false;
      }, 1000);
    }
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
