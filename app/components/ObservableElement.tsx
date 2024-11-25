"use client";
import { useEffect, useRef } from "react";

interface IObservableElementProps {
  onIntersect?: () => void; // Opcional: Ejecutar una función al entrar
  animation?: string; // Nombre de la clase de animación
  animateAlways?: boolean; // Controlar si la animación ocurre siempre o solo la primera vez
  children: React.ReactNode; // Contenido del elemento observable
}

export default function ObservableElement({
  onIntersect,
  animation,
  animateAlways = false, // Por defecto, solo se anima la primera vez
  children,
}: IObservableElementProps) {
  const elementRef = useRef<HTMLDivElement | null>(null);
  const hasAnimated = useRef(false); // Rastrea si ya se ejecutó la animación

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          if (onIntersect) onIntersect();

          if (animation) {
            // Añadir clase de animación dependiendo de `animateAlways`
            if (animateAlways || !hasAnimated.current) {
              target.classList.add(animation);
              hasAnimated.current = true; // Marca como animado
            }
          }
        } else {
          // Eliminar clase de animación si `animateAlways` es true
          if (animateAlways && animation) {
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
