import { useCallback, useEffect, useRef, useState } from 'react';

const useInfiniteScroll = (
  onIntersect: (entry: IntersectionObserverEntry, observer: IntersectionObserver) => Promise<void>
) => {
  const section = useRef<HTMLElement>(null);
  const top = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (section.current) {
      section.current.scrollTop = section.current.scrollHeight;
    }
  }, [section.current]);

  const opt = {
    rootMargin: '30px 0px',
    threshold: 0.8,
  };

  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((e) => {
        if (e.isIntersecting && section.current) {
          onIntersect(e, observer);
          if (isMounted) {
            section.current.scrollTop = 150;
          } else {
            section.current.scrollTop = section.current.scrollHeight;
          }
        }
      });
    },
    [isMounted, onIntersect]
  );

  useEffect(() => {
    if (!top.current || !section.current) {
      return;
    }

    const observer = new IntersectionObserver(callback, opt);
    observer.observe(top.current);

    return () => observer.disconnect();
  }, [top.current, section.current, onIntersect, callback]);

  return { top, section };
};

export default useInfiniteScroll;
