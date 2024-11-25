"use client";
import { useEffect, useRef } from "react";

interface IObservableElementProps {
  onIntersect?: () => void;
  animation: string;
  animateAlways?: boolean;
  children: React.ReactNode;
}

export default function ObservableElement({
  onIntersect,
  animation,
  animateAlways = false,
  children,
}: IObservableElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (onIntersect) onIntersect();

          if (animateAlways || !hasAnimated.current) {
            target.classList.add(animation);
            hasAnimated.current = true; // Marca como animado
          }
        } else {
          if (animateAlways) {
            target.classList.remove(animation);
          }
        }
      });
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [onIntersect, animation, animateAlways]);

  return <div ref={elementRef}>{children}</div>;
}
