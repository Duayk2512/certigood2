"use client";

import { motion } from "framer-motion";
import { MessageSquareWarning } from "lucide-react";
import Image from "next/image";

export default function Complaints() {
  return (
    <section id="quejas-apelaciones" className="py-20 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-purple-500 p-8 md:p-12 rounded-3xl shadow-xl flex flex-col items-center"
      >
        {/* Cabecera con el Título exacto */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <MessageSquareWarning className="text-primary w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
            PROCESO PARA EL TRATAMIENTO DE QUEJAS Y APELACIONES
          </h2>
        </div>

        {/* Imagen del Diagrama de Flujo del cliente */}
        <div className="w-full max-w-2xl flex justify-center">
          <Image
            src="/quejas.jpeg" // Asegúrate de colocar la imagen con este nombre en la carpeta public
            alt="Diagrama de flujo de tratamiento de quejas y apelaciones"
            width={700}
            height={900}
            className="rounded-2xl shadow-md border border-purple-100 object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}