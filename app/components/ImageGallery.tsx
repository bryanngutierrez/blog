"use client";

const isProduction = process.env.NODE_ENV === "production";

import { useEffect, useState } from "react";

export default function ImageSlider() {
  const videos = [
    "/repair.mp4",
    "/iluminacion_bar.mp4",
    "/pantalla_pixel.mp4",
    
  ];

  const [index, setIndex] = useState(0);

  // autoplay (opcional)
  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 8000);

    return () => clearInterval(interval);
  }, [index]);

  const next = () => {
    setIndex((prev) => (prev + 1) % videos.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section className="py-1">
      <div className="max-w-4xl mx-auto px-1 text-center">
        
        <div className="relative w-full h-full overflow-hidden rounded-xl shadow-lg">

          {/* VIDEO */}
          <video
            key={videos[index]}
            src={isProduction ? '/cv' + videos[index] : videos[index]}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* BOTÓN ANTERIOR */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ◀
          </button>

          {/* BOTÓN SIGUIENTE */}
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black"
          >
            ▶
          </button>

        </div>

        {/* INDICADORES CLICKEABLES */}
        <div className="flex justify-center mt-4 gap-2">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${
                i === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}