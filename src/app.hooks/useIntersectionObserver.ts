import { useState, useEffect } from 'react';

 const useIntersectionObserver: any = (target, option) => {
  const [entry, setEntry] = useState(false);

  const {
    root = null,
    rootMargin = '0px',
    threshold = 0,
    enabled = true,
  } = option ?? {};

  const updateEntry = ([entry]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(updateEntry, {
      root,
      threshold,
      rootMargin
    });

    const dom = target && target.current;
    if (!dom) return;
    observer.observe(dom);
    return () => observer.unobserve(dom);
  }, [target.current, enabled, threshold]);

  return entry;
}

export default useIntersectionObserver
