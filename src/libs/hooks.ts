import { useEffect } from "react";

export const useDynamicCss = (url: string, id: string) => {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    link.id = id;
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [url, id]);
};