import React, { useRef, useEffect, useState } from "react";

export default function ScrollShadow({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMask, setActiveMask] = useState<string>("");

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    const updateMask = () => {
      const scrollTop = element.scrollTop;
      const scrollLeft = element.scrollLeft;
      const maxScrollTop = element.scrollHeight - element.clientHeight;
      const maxScrollLeft = element.scrollWidth - element.clientWidth;

      const masks: string[] = [];

      if (element.scrollHeight > element.clientHeight) {
        if (scrollTop > 0 && scrollTop < maxScrollTop) {
          masks.push("mask-vertical-gradient");
        } else if (scrollTop > 0) {
          masks.push("mask-top-gradient");
        } else if (scrollTop < maxScrollTop) {
          masks.push("mask-bottom-gradient");
        }
      }

      if (element.scrollWidth > element.clientWidth) {
        if (scrollLeft > 0 && scrollLeft < maxScrollLeft) {
          masks.push("mask-horizontal-gradient");
        } else if (scrollLeft > 0) {
          masks.push("mask-left-gradient");
        } else if (scrollLeft < maxScrollLeft) {
          masks.push("mask-right-gradient");
        }
      }

      setActiveMask(masks.join(" "));
    };

    const resizeObserver = new ResizeObserver(() => {
      updateMask();
    });

    resizeObserver.observe(element);

    element.addEventListener("scroll", updateMask);

    updateMask();

    return () => {
      element.removeEventListener("scroll", updateMask);
      resizeObserver.disconnect();
    };
  }, [children]);

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${activeMask} ${className}`}
    >
      {children}
    </div>
  );
}
