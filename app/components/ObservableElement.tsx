"use client";
import { useEffect, useRef, ReactNode } from "react";

interface IObservableElementProps {
  onIntersect?: () => void;
  animation: string;
  animationDelay?: number;
  animateAlways?: boolean;
  children: ReactNode;
  className?: string;
}

export default function ObservableElement({
  onIntersect,
  animation,
  animationDelay = 0,
  animateAlways = false,
  children,
  className = "w-full h-full",
}: IObservableElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (onIntersect) onIntersect();

          if (animation) {
            const childNodes = elementRef.current?.children;
            if (childNodes) {
              Array.from(childNodes).forEach((child) => {
                if (animateAlways || !hasAnimated.current) {
                  child.classList.add(animation);
                  child.setAttribute(
                    "style",
                    `animation-delay: ${animationDelay}ms;`
                  ); // Aplica delay dinámico
                }
              });
              hasAnimated.current = true;
            }
          }
        } else {
          if (animateAlways && animation) {
            const childNodes = elementRef.current?.children;
            if (childNodes) {
              Array.from(childNodes).forEach((child) => {
                child.classList.remove(animation);
                child.removeAttribute("style"); // Elimina delay dinámico
              });
            }
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
  }, [onIntersect, animation, animateAlways, animationDelay]);

  return (
    <div className={className} ref={elementRef}>
      {children}
    </div>
  );
}
