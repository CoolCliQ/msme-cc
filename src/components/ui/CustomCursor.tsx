import React, { useEffect, useRef } from "react";

type CursorMoneyRainProps = {
  intervalMs?: number; // how often to drop emojis
  quantity?: number; // number of emojis per drop
};

const CursorMoneyRain: React.FC<CursorMoneyRainProps> = ({
  intervalMs = 300,
  quantity = 1,
}) => {
  const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Track cursor position
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.pageX, y: e.pageY };
    };
    document.addEventListener("mousemove", handleMouseMove);

    // Drop emojis at interval
    const interval = setInterval(() => {
      for (let i = 0; i < quantity; i++) {
        const emoji = document.createElement("span");
        emoji.textContent = "💸";
        emoji.style.position = "absolute";
        // Add small random offset so they don't all stack
        emoji.style.left = `${
          cursorRef.current.x + (Math.random() * 20 - 10)
        }px`;
        emoji.style.top = `${cursorRef.current.y}px`;
        emoji.style.fontSize = `${Math.random() * 20 + 16}px`;
        emoji.style.opacity = "1";
        emoji.style.pointerEvents = "none";
        emoji.style.transition = "all 1s ease-out";

        document.body.appendChild(emoji);

        // Animate drop and fade
        requestAnimationFrame(() => {
          emoji.style.top = `${
            cursorRef.current.y + 50 + Math.random() * 30
          }px`;
          emoji.style.opacity = "0";
        });

        // Remove after animation
        setTimeout(() => emoji.remove(), 1000);
      }
    }, intervalMs);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [intervalMs, quantity]);

  return null;
};

export default CursorMoneyRain;
