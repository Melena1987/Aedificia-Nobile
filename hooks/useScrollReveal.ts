import { useState, useEffect, useCallback } from 'react';

interface ScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollReveal = (options?: ScrollRevealOptions) => {
  const { threshold = 0.1, rootMargin = '0px', triggerOnce = true } = options || {};
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState<Element | null>(null);

  const ref = useCallback((node: Element | null) => {
    if (node) {
      setNode(node);
    }
  }, []);

  useEffect(() => {
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(node);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [node, threshold, rootMargin, triggerOnce]);

  return [ref, isVisible] as const;
};
