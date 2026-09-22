import { Suspense, useEffect, useRef, useState } from "react";

function LazySection({ children, fallback = null }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "400px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="min-h-[300px]">
      {isVisible && (
        <Suspense fallback={fallback}>
          {children}
        </Suspense>
      )}
    </div>
  );
}

export default LazySection;