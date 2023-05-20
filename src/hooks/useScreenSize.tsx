import { useEffect, useState } from "react";

export const useScreenSize = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  const isWindow = typeof window !== "undefined";

  useEffect(() => {
    const getWidth = () => (isWindow ? window.innerWidth : windowWidth);

    const resize = () => setWindowWidth(getWidth());

    if (isWindow) {
      setWindowWidth(getWidth());

      window.addEventListener("resize", resize);

      return () => window.removeEventListener("resize", resize);
    }
  }, [isWindow, windowWidth]);

  return windowWidth;
};
