"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Eye } from "lucide-react";
import { useState } from "react";
export default function About() {
  const images = ["/ing1.jpeg", "/ing2.jpeg"];
const [current, setCurrent] = useState(0);

const next = () => {
  setCurrent((prev) => (prev + 1) % images.length);
};

const prev = () => {
  setCurrent((prev) => (prev - 1 + images.length) % images.length);
};

  return (
    <section id="nosotros" className="py-20 max-w-7xl mx-auto px-4 md:px-6">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-primary text-center"
      >
        Sobre Nosotros
      </motion.h2>
{/* SLIDER DE INGENIEROS */}
<div className="relative flex justify-center mt-10">

  {/* CONTENEDOR IMAGEN */}
  <div className="relative">

    <img
      src={images[current]}
      className="w-[300px] h-[300px] md:w-[450px] md:h-[450px] object-cover rounded-2xl shadow-xl border-4 border-purple-500 transition"
    />

    {/* BOTÓN IZQUIERDA */}
    <button
      onClick={prev}
      className="absolute left-2 top-1/2 -translate-y-1/2 
      bg-black/30 hover:bg-purple-600 text-white 
      rounded-full p-3 transition-all duration-300"
    >
      ←
    </button>

    {/* BOTÓN DERECHA */}
    <button
      onClick={next}
      className="absolute right-2 top-1/2 -translate-y-1/2 
      bg-black/30 hover:bg-purple-300 text-white 
      rounded-full p-3 transition-all duration-300"
    >
      →
    </button>

  </div>

</div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center mt-6 max-w-3xl mx-auto text-gray-600"
      >
        CERTIGOOD LABORATORIOS S.A.C. es un organismo de inspección independiente de tercera parte, especializado en la evaluación de la conformidad
        en materia de calidad e inocuidad alimentaria. Nuestro compromiso es brindar la máxima confianza y rigor técnico en la verificación del cumplimiento
        normativo vigentes, asegurando la validez y objetividad de cada uno de nuestros resultados.
      </motion.p>

      <div className="grid md:grid-cols-3 gap-6 mt-14">

        {/* MISIÓN */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white border-2 border-purple-500 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
        >
          <Target className="mx-auto text-primary w-10 h-10" />
          <h3 className="font-bold mt-4 text-lg">Misión</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Impulsar la confianza y la seguridad alimentaria mediante servicios de inspección y evaluación de la conformidad de tercera parte, asegurando
            de manera objetiva e independiente que las organizaciones cumplan con los estándares de inocuidad, calidad y los requisitos normativos vigentes.
          </p>
        </motion.div>

        {/* VISIÓN */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white border-2 border-purple-500 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
        >
          <Eye className="mx-auto text-primary w-10 h-10" />
          <h3 className="font-bold mt-4 text-lg">Visión</h3>
          <p className="text-gray-600 mt-3 text-sm">
            Ser reconocidos como el organismo de inspección de tercera parte referente al sector alimentario, distinguidos por nuestra
            rigurosa competencia técnica, absoluta imparcialidad y un sistema de evaluación que garantice la máxima confiabilidad en la cadena
            de suministros bajo los más estándares internacionales.
          </p>
        </motion.div>

        {/* VALORES */}
        <motion.div
          whileHover={{ y: -10, scale: 1.02 }}
          className="bg-white border-2 border-purple-500 p-6 rounded-2xl text-center shadow-md hover:shadow-xl transition"
        >
          <ShieldCheck className="mx-auto text-primary w-10 h-10" />
          <h3 className="font-bold mt-4 text-lg">Valores</h3>

          <ul className="text-gray-600 mt-3 text-sm space-y-2 text-left inline-block">
            <li>✔ Integridad</li>
            <li>✔ Calidad</li>
            <li>✔ Confianza</li>
            <li>✔ Compromiso</li>
            <li>✔ Responsabilidad</li>
            <li>✔ Innovación</li>
            <li>✔ Confidencialidad</li>
          </ul>
        </motion.div>

      </div>
    </section>
  );
}