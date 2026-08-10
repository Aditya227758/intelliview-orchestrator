"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

function useKeyboardNav(onShowHelp, onStartInterview) {
  const router = useRouter();

  useEffect(() => {
    let lastG = 0;

    const onKey = (e) => {
      const target = e.target;

      // Don't trigger shortcuts while typing
      if (
        target &&
        (
          target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable
        )
      ) {
        return;
      }

      const now = Date.now();

      // Ctrl + N / Cmd + N → Start new interview
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "n"
      ) {
        e.preventDefault();
        onStartInterview?.();
        return;
      }

      // Alt + 1–9 → Navigate
      if (e.altKey && !e.ctrlKey && !e.metaKey) {
        const routes = {
          "1": "/",
          "2": "/interview",
          "3": "/sessions",
          "4": "/candidates",
          "5": "/workers",
          "6": "/analytics",
          "7": "/settings",
          "9": "/shortcuts",
        };

        if (routes[e.key]) {
          e.preventDefault();
          router.push(routes[e.key]);
          lastG = 0;
          return;
        }

        // Alt + 8 → Digest Control
        if (e.key === "8") {
          e.preventDefault();
          window.open("http://localhost:8080", "_blank");
          lastG = 0;
          return;
        }
      }

      // G + shortcut navigation
      if (
        e.key.toLowerCase() === "g" &&
        now - lastG < 800
      ) {
        lastG = 0;
        return;
      }

      if (e.key.toLowerCase() === "g") {
        lastG = now;
        return;
      }

      if (lastG && now - lastG < 800) {
        const route = {
          s: "/sessions",
          w: "/workers",
          a: "/analytics",
          o: "/",
          ",": "/settings",
          i: "/interview",
          c: "/candidates",
        };

        const key = e.key.toLowerCase();

        if (route[key]) {
          e.preventDefault();
          router.push(route[key]);
          lastG = 0;
        }

        return;
      }

      // ? → Show keyboard shortcuts/help
      if (e.key === "?") {
        e.preventDefault();
        onShowHelp?.();
      }
    };

    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
    };
  }, [router, onShowHelp, onStartInterview]);
}

export {
  useKeyboardNav,
};