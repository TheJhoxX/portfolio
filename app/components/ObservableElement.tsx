"use client";

import { useEffect, useRef, ReactNode } from "react";

interface IObservableElementProps {
  onIntersect?: () => void;
  animation?: string;
  animationDelay?: number;
  animateAlways?: boolean;
  threshold?: number;
  children: ReactNode;
  className?: string;
}

export default function ObservableElement({
  onIntersect,
  animation,
  animationDelay = 0,
  animateAlways = false,
  threshold = 0.5, // Por defecto, el 50% visible
  children,
  className = "w-full h-full",
}: IObservableElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const { isIntersecting, intersectionRatio } = entry;

          if (isIntersecting && intersectionRatio >= threshold && onIntersect) {
            onIntersect();
          }

          if (isIntersecting && animation) {
            if (animateAlways || !hasAnimated.current) {
              entry.target.classList.add(animation);
              (
                entry.target as HTMLElement
              ).style.animationDelay = `${animationDelay}ms`;
              hasAnimated.current = true;
            }
          } else if (!isIntersecting && animateAlways && animation) {
            entry.target.classList.remove(animation);
            (entry.target as HTMLElement).style.animationDelay = "";
          }
        });
      },
      {
        threshold: [threshold],
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [onIntersect, animation, animateAlways, animationDelay, threshold]);

  return (
    <div className={className} ref={elementRef}>
      {children}
    </div>
  );
}
