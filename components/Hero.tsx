"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="h-screen flex items-center justify-center relative bg-white"
    >
      {/* Fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />

      <div className="relative z-10 text-center max-w-3xl px-4">

        {/* ✅ LOGO PORTADA */}
        <Image
          src="/logo.png"
          alt="Logo Vitna"
          width={180}
          height={180}
          className="mx-auto mb-6"
        />

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-5xl font-bold text-text"
        >
          Inspecciones Especializadas para la Seguridad
          <span className="text-primary block">
             Alimentaria
          </span>
        </motion.h1>

        <p className="mt-6 text-gray-600">
          Brindamos servicios independientes de inspección y evaluación de la conformidad para garantizar la calidad e inocuidad en la
          cadena alimentaria.
        </p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="#servicios"
            className="border-2 border-primary text-primary px-6 py-3 rounded-xl hover:bg-primary hover:text-white transition"
          >
            Conocer Servicios
          </a>
        </div>
      </div>
    </section>
  );
}
