"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    // Replace src with real image path when Commander provides photos
    src: "/images/hero-1.jpg",
    fallback: "bg-gradient-to-br from-navy via-[#1a2d4a] to-[#0b1a2e]",
  },
  {
    id: 2,
    src: "/images/hero-2.jpg",
    fallback: "bg-gradient-to-br from-[#1a2d4a] via-navy to-[#0d1e35]",
  },
  {
    id: 3,
    src: "/images/hero-3.jpg",
    fallback: "bg-gradient-to-br from-[#0d1e35] via-[#1a2d4a] to-navy",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(slides.map(() => false));

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          } ${slide.fallback}`}
        >
          {/* Real image — will show when Commander uploads photos */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt=""
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              loaded[i] ? "opacity-100" : "opacity-0"
            }`}
            onLoad={() => {
              const newLoaded = [...loaded];
              newLoaded[i] = true;
              setLoaded(newLoaded);
            }}
            onError={() => {
              // Image not found — fallback gradient shows
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-6" : "bg-white/40"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
