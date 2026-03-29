"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Navbar({ lang = "hi", links = [] }) {
  const [open, setOpen] = useState(false);
  const hamRef = useRef(null);
  const mobRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (
        hamRef.current && !hamRef.current.contains(e.target) &&
        mobRef.current && !mobRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  const closeMob = () => setOpen(false);

  const brand = lang === "hi" ? "Dandotiya" : "Dandotiya";
  const langLabel = lang === "hi" ? "English" : "Hindi";
  const langHref = lang === "hi" ? "/en" : "/";
  const fontHi = "var(--font-noto), 'Noto Sans Devanagari', sans-serif";
  const fontEn = "var(--font-cinzel), 'Cinzel Decorative', serif";

  return (
    <>
      <nav>
        <div
          className="nav-brand"
          style={{ fontFamily: lang === "hi" ? fontHi : fontEn }}
        >
          {lang === "hi" ? "Dandotiya" : "Dandotiya"}
        </div>
        <ul className="nav-links" style={{ fontFamily: lang === "hi" ? fontHi : fontEn }}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <Link href="/morena" style={{ color: "var(--crimson-l, #C0392B)", fontWeight: 600 }}>
              {lang === "hi" ? "मुरैना" : "Morena"}
            </Link>
          </li>
        </ul>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <Link href={langHref}>
            <button className="lang-btn" style={{ fontFamily: fontHi }}>
              {lang === "hi" ? "English" : "Hindi"}
            </button>
          </Link>
          <button
            className="nav-ham"
            ref={hamRef}
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span
              style={
                open
                  ? { transform: "rotate(45deg) translate(5px,5px)" }
                  : {}
              }
            />
            <span style={open ? { opacity: 0 } : {}} />
            <span
              style={
                open
                  ? { transform: "rotate(-45deg) translate(5px,-5px)" }
                  : {}
              }
            />
          </button>
        </div>
      </nav>
      <div
        className={`mobile-menu ${open ? "open" : ""}`}
        ref={mobRef}
        style={{ fontFamily: lang === "hi" ? fontHi : fontEn }}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={closeMob}>
            {l.label}
          </a>
        ))}
        <Link href="/morena" onClick={closeMob} style={{ color: "var(--crimson-l, #C0392B)", fontWeight: 600 }}>
          {lang === "hi" ? "मुरैना पर्यटन" : "Morena Tourism"}
        </Link>
        <Link
          href={langHref}
          onClick={closeMob}
          style={{ color: "var(--saffron)", fontWeight: 600 }}
        >
          {lang === "hi" ? "Switch to English" : "Hindi में देखें"}
        </Link>
      </div>
    </>
  );
}
