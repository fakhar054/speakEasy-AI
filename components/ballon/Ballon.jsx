"use client";
import React, { useState, useEffect } from "react";

export default function Ballon() {
  const [balloonData, setBalloonData] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      leftPos: Math.random() * 100,
      duration: 15 + Math.random() * 15,
      delay: Math.random() * 20, // Increased delay for better spacing
      size: 40 + Math.random() * 40,
      color: `hsla(${Math.random() * 360}, 70%, 60%, 0.6)`,
    }));
    setBalloonData(generated);
  }, []);

  if (balloonData.length === 0) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {balloonData.map((bal) => (
        <div
          key={bal.id}
          className="absolute"
          style={{
            left: `${bal.leftPos}%`,
            width: `${bal.size}px`,
            height: `${bal.size * 1.2}px`,
            backgroundColor: bal.color,
            borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%", // More balloon-like shape
            bottom: "-150px", // Forces them to start below the viewport
            animation: `floatUp ${bal.duration}s linear infinite`,
            animationDelay: `-${bal.delay}s`,
          }}
        >
          {/* String */}
          <div className="absolute bottom-[-30px] left-1/2 w-[1px] h-12 bg-gray-400 opacity-40 -translate-x-1/2" />
        </div>
      ))}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            /* Start below the screen */
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-30vh) translateX(20px) rotate(5deg);
          }
          50% {
            transform: translateY(-60vh) translateX(-20px) rotate(-5deg);
          }
          75% {
            transform: translateY(-90vh) translateX(20px) rotate(5deg);
          }
          100% {
            /* -130vh relative to the bottom position ensures they pass the top navbar */
            transform: translateY(-130vh) translateX(0) rotate(0deg);
          }
        }
      `}</style>
    </div>
  );
}
