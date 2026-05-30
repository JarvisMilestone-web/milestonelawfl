"use client";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    src: "/images/family-4.png",
    alt: "South Florida family meeting with estate planning attorney",
  },
  {
    id: 2,
    src: "/images/family-1.png",
    alt: "Multi-generational family estate planning consultation",
  },
  {
    id: 3,
    src: "/images/family-7.png",
    alt: "Family reviewing estate documents with attorney",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

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
          className={`absolute inset-0 transition-opacity duration-1500 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.src}
            alt={slide.alt}
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay — dark at bottom, semi-dark overall for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/50 to-navy/30" />
        </div>
      ))}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === current ? "bg-gold w-8" : "bg-white/40 w-2"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
