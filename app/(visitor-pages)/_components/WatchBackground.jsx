"use client";

import { useEffect, useState } from "react";

/**
 * Minimal cinematic clock: thin radiating tick marks with no solid bezel,
 * white hour/minute hands and a long red second hand that ticks in real time.
 * Designed to sit *behind* the hero type, centred on the same point.
 */
const WatchBackground = () => {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const update = () => setNow(new Date());
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const seconds = now ? now.getSeconds() : 0;
  const minutes = now ? now.getMinutes() : 0;
  const hours = now ? now.getHours() % 12 : 0;

  const secondAngle = seconds * 6;
  const minuteAngle = minutes * 6 + seconds * 0.1;
  const hourAngle = hours * 30 + minutes * 0.5;

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 200 200"
        className="h-[86vmin] w-[86vmin] max-w-none"
        aria-hidden="true"
      >
        {/* Radiating tick marks — no outer ring, just thin strokes */}
        {Array.from({ length: 60 }).map((_, i) => {
          const major = i % 5 === 0;
          const cardinal = i % 15 === 0;
          const a = (i * 6 * Math.PI) / 180;
          const r1 = cardinal ? 96 : 92;
          const r2 = cardinal ? 82 : major ? 86 : 90;
          return (
            <line
              key={i}
              x1={100 + r1 * Math.sin(a)}
              y1={100 - r1 * Math.cos(a)}
              x2={100 + r2 * Math.sin(a)}
              y2={100 - r2 * Math.cos(a)}
              stroke="#ffffff"
              strokeWidth={cardinal ? 0.9 : major ? 0.7 : 0.4}
              opacity={cardinal ? 0.85 : major ? 0.55 : 0.28}
              strokeLinecap="round"
            />
          );
        })}

        {/* Hour hand */}
        <line
          x1="100"
          y1="106"
          x2="100"
          y2="58"
          stroke="#ffffff"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.85"
          transform={`rotate(${hourAngle} 100 100)`}
          style={{ transition: "transform 0.4s cubic-bezier(0.4,2.2,0.5,1)" }}
        />
        {/* Minute hand */}
        <line
          x1="100"
          y1="110"
          x2="100"
          y2="40"
          stroke="#ffffff"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.85"
          transform={`rotate(${minuteAngle} 100 100)`}
          style={{ transition: "transform 0.4s cubic-bezier(0.4,2.2,0.5,1)" }}
        />
        {/* Long red second hand — ticks with a crisp snap each second */}
        <line
          x1="100"
          y1="124"
          x2="100"
          y2="20"
          stroke="#e11d2e"
          strokeWidth="0.8"
          strokeLinecap="round"
          transform={`rotate(${secondAngle} 100 100)`}
          style={{
            transition:
              seconds === 0 ? "none" : "transform 0.12s cubic-bezier(0.3,2.8,0.5,1)",
          }}
        />

        {/* Center pin */}
        <circle cx="100" cy="100" r="2" fill="none" stroke="#e11d2e" strokeWidth="0.8" />
        <circle cx="100" cy="100" r="0.9" fill="#e11d2e" />
      </svg>
    </div>
  );
};

export default WatchBackground;
