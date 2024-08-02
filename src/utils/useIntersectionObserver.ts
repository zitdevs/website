import { useEffect, useRef, useState, MutableRefObject } from "react";

interface IntersectionObserverOptions {
  threshold?: number | number[];
  type?: any;
  root?: Element | null;
  rootMargin?: string;
}

const useIntersectionObserver = ({
  threshold = 0,
  type = null,
  root = null,
  rootMargin = "0px",
}: IntersectionObserverOptions = {}): [
  MutableRefObject<HTMLDivElement | typeof type | null>,
  boolean,
] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | typeof type>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, root, rootMargin },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold, root, rootMargin]);

  return [ref, isVisible];
};

export default useIntersectionObserver;
