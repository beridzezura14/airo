"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    const scrollToLocation = () => {
      const hash = window.location.hash;

      if (hash) {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));

        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          return;
        }
      }

      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    const frame = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(scrollToLocation);
    });

    window.addEventListener("hashchange", scrollToLocation);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", scrollToLocation);
    };
  }, [pathname]);

  return null;
}
