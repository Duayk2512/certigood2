"use client";

import { useState } from "react";

export default function Certifications() {
  const images = ["/proc1.jpeg", "/proc2.jpeg"];

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-20 text-center px-4">

      {/* TÍTULO */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary">
        Proceso
      </h2>

      {/* SLIDER */}
      <div className="relative flex justify-center items-center mt-10">

        <div className="relative">

          {/* IMAGEN */}
          <img
            src={images[current]}
            className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] md:h-[400px] object-cover rounded-2xl border-4 border-purple-500 shadow-lg"
          />

          {/* BOTÓN IZQUIERDA */}
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-purple-600 text-white rounded-full p-2 transition-all duration-300"
          >
            ←
          </button>

          {/* BOTÓN DERECHA */}
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-purple-600 text-white rounded-full p-2 transition-all duration-300"
          >
            →
          </button>

        </div>
      </div>

      {/* INDICADORES */}
      <div className="flex justify-center mt-4 gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-purple-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* PASOS DEL PROCESO */}
      <div className="flex flex-wrap gap-4 justify-center mt-8 text-gray-700">
        <span>Solicitud</span>
        <span>Evaluación</span>
        <span>Inspección</span>
        <span>Informe</span>
        <span>Emisión de Certificado de Inspección</span>
      </div>

    </section>
  );
}
