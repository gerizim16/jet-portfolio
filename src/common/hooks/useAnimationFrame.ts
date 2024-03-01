import { useCallback, useEffect, useRef } from "react";

const useAnimationFrame = (callback: (deltaTime: number) => void) => {
  const requestRef = useRef(-1);
  const previousTimeRef = useRef(0);

  const animate: FrameRequestCallback = useCallback(
    (time) => {
      if (previousTimeRef.current != undefined) {
        const deltaTime = time - previousTimeRef.current;
        callback(deltaTime);
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    },
    [callback],
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useAnimationFrame;
