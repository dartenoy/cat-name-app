import { useEffect, useRef } from "react";

const useScrollControl = (
  visibleItems: any[],
  setVisibleItems: (items: any[] | ((prevVisibleItems: any[]) => any[])) => void,
  allItems: any[],
  setLoading: (loading: boolean) => void
) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const initialScrollDone = useRef(false);
  const prevScrollHeight = useRef(0);

  useEffect(() => {
    //// Scroll at the bottom once visibleItems are set
    if (scrollRef.current && !initialScrollDone.current && visibleItems.length > 0) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      initialScrollDone.current = true;
    }
  }, [visibleItems]);

  const handleScroll = () => {
    /// checking for scroll at the top
    if (scrollRef.current && scrollRef.current.scrollTop === 0) {
      prevScrollHeight.current = scrollRef.current.scrollHeight;
      setLoading(true);
      //// simulating loading
      setTimeout(() => {
        setVisibleItems((prevVisibleItems) => {
          const currentLength = prevVisibleItems.length;
          const newLength = currentLength + 20;
          setLoading(false);
          return allItems.slice(-newLength);
        });
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
