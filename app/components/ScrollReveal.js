"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    function revealVisible() {
      const els = document.querySelectorAll(".reveal:not(.vis)");
      const wh = window.innerHeight;
      els.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < wh - 50 && rect.bottom > 0) {
          el.classList.add("vis");
        }
      });
    }

    // Also use IntersectionObserver for efficiency
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("vis");
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -50px 0px" }
    );

    function setup() {
      document.querySelectorAll(".reveal:not(.vis)").forEach((el) => obs.observe(el));
      revealVisible();
    }

    // Run after DOM is ready
    const timer = setTimeout(setup, 150);

    // Scroll fallback
    window.addEventListener("scroll", revealVisible, { passive: true });
    window.addEventListener("resize", revealVisible, { passive: true });

    return () => {
      clearTimeout(timer);
      obs.disconnect();
      window.removeEventListener("scroll", revealVisible);
      window.removeEventListener("resize", revealVisible);
    };
  }, []);

  return null;
}
