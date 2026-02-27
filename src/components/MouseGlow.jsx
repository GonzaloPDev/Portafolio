import React, { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef(null);
  const darkRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;
      if (glowRef.current) {
        glowRef.current.style.left = x;
        glowRef.current.style.top = y;
      }
      if (darkRef.current) {
        darkRef.current.style.setProperty("--mx", x);
        darkRef.current.style.setProperty("--my", y);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div ref={glowRef} className="mouse-glow" />
      <div ref={darkRef} className="mouse-dark" />
    </>
  );
}