import { useEffect, useRef } from "react";

export default function useInViewAnimation(options = {}) {
  const {
    threshold = 0.2,
    rootMargin = "99px 0px -10% 0px",
    buffer = 0.4, // 👈 hysteresis buffer
  } = options;

  const ref = useRef(null);
  const stateRef = useRef(false); // track current in-view state

  useEffect(() => {
    if (typeof window === "undefined") return;

    const element = ref.current;
    if (!element) return;

    const addThreshold = threshold;
    const removeThreshold = Math.max(0, threshold - buffer);

    const observer = new IntersectionObserver(
      ([entry]) => {
        const ratio = entry.intersectionRatio;

        // Add only if not already added
        if (!stateRef.current && ratio >= addThreshold) {
          element.classList.add("in-view");
          stateRef.current = true;
        }

        // Remove only if currently added
        if (stateRef.current && ratio <= removeThreshold) {
          element.classList.remove("in-view");
          stateRef.current = false;
        }
      },
      {
        threshold: [0, removeThreshold, addThreshold, 1],
        rootMargin,
      },
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
      observer.disconnect();
    };
  }, [threshold, rootMargin, buffer]);

  return { ref };
}
