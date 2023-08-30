import React, { useEffect } from 'react';

const useScroll = (ref: React.RefObject<HTMLElement>, condition: number) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [condition]);

  return ref;
};

export default useScroll;
