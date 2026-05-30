"use client";
import { useEffect, useState, useRef } from "react";

const slides = [
  {
    id: 1,
    src: "/images/family-4.png",
    alt: "South Florida couple meeting with estate planning attorney",
  },
  {
    id: 2,
    src: "/images/family-jewish-consultation.png",
    alt: "Family signing estate plan at Muroff, Milestone & Milestone",
  },
  {
    id: 3,
    src: "/images/family-1.png",
    alt: "Multi-generational family estate planning consultation",
  },
  {
    id: 4,
    src: "/images/family-7.png",
    alt: "Family reviewing estate documents with South Florida attorney",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Preload all images on mount — eliminates blink on first show
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new window.Image();
      img.src = slide.src;
    });
  }, []);

  const goTo = (next: number) => {
    if (transitioning) return;
    setPrev(current);
    setTransitioning(true);
    setCurrent(next);
    // Clear "prev" after transition completes
    setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 1800);
  };

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % slides.length;
        setPrev(c);
        setTransitioning(true);
        setTimeout(() => {
          setPrev(null);
          setTransitioning(false);
        }, 1800);
        return next;
      });
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      {/* Render all slides — use z-index + opacity for seamless crossfade */}
      {slides.map((slide, i) => {
        const isCurrent = i === current;
        const isPrev = i === prev;

        return (
          <div
            key={slide.id}
            className="absolute inset-0"
            style={{
              zIndex: isCurrent ? 2 : isPrev ? 1 : 0,
              opacity: isCurrent ? 1 : 0,
              transition: isCurrent
                ? "opacity 1800ms ease-in-out"
                : isPrev
                ? "opacity 1800ms ease-in-out"
                : "none",
              willChange: "opacity",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
              loading={i === 0 ? "eager" : "lazy"}
              fetchPriority={i === 0 ? "high" : "low"}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-navy/45 to-navy/20" />
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i === current ? "bg-gold w-8" : "bg-white/40 w-2"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
