import { useEffect, useRef, useState } from "react";

// Hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || "0px",
      },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

// Hook for counting up numbers
export const useCountUp = (end, duration = 2000, isVisible = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = performance.now();
    const numericEnd = parseFloat(end.replace(/[^0-9.]/g, ""));

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * numericEnd));

      if (progress < 1) {
        countRef.current = requestAnimationFrame(animate);
      } else {
        setCount(numericEnd);
      }
    };

    countRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(countRef.current);
  }, [isVisible, end, duration]);

  return count;
};
