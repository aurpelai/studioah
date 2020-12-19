import {
  RefObject,
  useEffect,
  useState,
} from 'react';

interface PropsType {
  ref: RefObject<HTMLElement>,
}

const useIntersectionObserver = ({ ref }: PropsType): boolean => {
  const [isStuck, setStuckState] = useState(false);

  useEffect(() => {
    const cachedRef = ref.current;

    const callback = ([entry]: IntersectionObserverEntry[]) => {
      setStuckState(entry.isIntersecting && entry.intersectionRatio < 1);
    };

    const observer = new IntersectionObserver(
      callback,
      {
        rootMargin: '-1px 0px 0px 0px',
        threshold: [0, 1],
      }
    );

    if (cachedRef) {
      observer.observe(cachedRef);
    }

    return () => {
      if (cachedRef) {
        observer.unobserve(cachedRef);
      }
    };
  }, [ref]);

  return isStuck;
};

export default useIntersectionObserver;
