import { useEffect, useState } from "react";

export default function MouseGlow() {
  const [position, setPosition] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
  });

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({
        x: event.clientX,
        y: event.clientY
      });
    }

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 transition-all duration-150"
      style={{
        background: `radial-gradient(
          450px circle at ${position.x}px ${position.y}px,
          rgba(99,102,241,0.18),
          rgba(124,58,237,0.10),
          transparent 75%
        )`
      }}
    />
  );
}