"use client";

import {
  MouseEvent,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  // WheelEventHandler,
} from "react";

import useAnimationFrame from "@/common/hooks/useAnimationFrame";
import clamp from "@/common/utils/clamp";
import lerp from "@/common/utils/lerp";

export default function Carousel({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement>(null);

  const progress = useRef(0);
  const x = useRef(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  const resume = useCallback(() => {
    progress.current = wrapper.current?.scrollLeft ?? 0;
    x.current = wrapper.current?.scrollLeft ?? 0;
  }, []);

  const setProgress = useCallback((newProgress: number) => {
    progress.current = clamp(
      newProgress,
      0,
      (wrapper.current?.scrollWidth ?? 0) - (wrapper.current?.clientWidth ?? 0),
    );
  }, []);

  const resize = useCallback(() => {
    setProgress(progress.current);
  }, [setProgress]);

  /* const wheel: WheelEventHandler = useCallback(
    (e) => {
      resume();
      setProgress(progress.current + e.deltaY * 5);
    },
    [resume, setProgress],
  ); */

  const mouseDown = useCallback(
    (e: MouseEvent) => {
      dragging.current = true;
      resume();

      startX.current = e.clientX;
    },
    [resume],
  );
  const mouseUp = useCallback(() => {
    dragging.current = false;
  }, []);
  const mouseMove = useCallback(
    (e: MouseEvent) => {
      if (!dragging.current || !e.buttons) return;
      const x = e.clientX;
      setProgress(progress.current + (startX.current - x) * 2.5);
      startX.current = x;
    },
    [setProgress],
  );

  useAnimationFrame((dt) => {
    x.current = lerp(
      x.current,
      progress.current,
      1 - 0.00000001 ** (dt / 1000),
    );
    if (
      wrapper.current &&
      Math.round(x.current) != Math.round(progress.current)
    ) {
      wrapper.current.scroll({
        behavior: "instant",
        left: x.current,
      });
    }
  });

  useLayoutEffect(() => {
    window.addEventListener("resize", resize);
    resize();
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [mouseUp, resize]);

  return (
    <div
      ref={wrapper}
      className={"overflow-x-auto overflow-y-clip scroll-smooth " + className}
      onResize={resize}
      // onWheel={wheel}
      onMouseDown={mouseDown}
      onMouseMove={mouseMove}
      onMouseUp={mouseUp}
    >
      <div className="flex h-full min-w-max">{children}</div>
    </div>
  );
}
