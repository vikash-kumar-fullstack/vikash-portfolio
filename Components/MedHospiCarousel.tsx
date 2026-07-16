"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/projects/medhospi/landing.png",
  "/projects/medhospi/patient-dashboard.png",
  "/projects/medhospi/doctor-dashboard.png",
  "/projects/medhospi/reception-dashboard.png",
  "/projects/medhospi/hospital-dashboard.png",
  "/projects/medhospi/admin-dashboard.png",
].filter(Boolean);

export default function MedHospiCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-3xl bg-slate-900">
      <Image
        src={images[current]}
        alt="Smart Healthcare Access System"
        fill
        priority
        className="object-cover object-left transition-all duration-700"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === index
                ? "w-8 bg-white"
                : "w-2 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}