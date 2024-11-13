"use client";
import { useEffect, useRef } from "react";
import { IObservableElementProps } from "@/utils/IObservableElementProps";

export default function ObservableElement({
  onIntersect,
  children,
  animateAlways,
}: IObservableElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onIntersect();
          observer.unobserve(entry.target);
        }
      });
    });

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement && !animateAlways) {
        observer.unobserve(currentElement);
      }
    };
  }, [onIntersect, animateAlways]);

  return <div ref={elementRef}>{children}</div>;
}
