"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function Policy() {
  return (
    <section id="politica" className="py-20 max-w-7xl mx-auto px-4 md:px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white border-2 border-purple-500 p-8 md:p-12 rounded-3xl shadow-xl"
      >
        <div className="flex items-center justify-center gap-3 mb-6">
          <FileText className="text-primary w-8 h-8" />
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center">
            POLÍTICA DEL SISTEMA DE GESTIÓN
          </h2>
        </div>

        <p className="text-gray-700 text-justify mb-6 leading-relaxed">
          CERTIGOOD LABORATORIOS S.A.C, realiza servicios de inspección de manera confiable, imparcial y confidencial en el sector alimentario, basándose en reglamentos y normas técnicas, para lo cual tiene implementado un sistema de gestión en base a la NTP-ISO/IEC 17020.
        </p>

        <p className="font-semibold text-gray-900 mb-4">
          Para ello CERTIGOOD LABORATORIOS S.A.C, se compromete a:
        </p>

        <ul className="text-gray-700 space-y-3 text-justify list-disc pl-6 leading-relaxed">
          <li>Asumir la responsabilidad por la imparcialidad de sus actividades de inspección.</li>
          <li>Proporcionar confianza a nuestros clientes en cuanto a confidencialidad de toda la información de propiedad del cliente obtenida o generada durante la realización de las actividades de inspección e imparcialidad.</li>
          <li>Asignar los recursos necesarios para la minimización y/o eliminación de los riesgos que atenten la imparcialidad de sus actividades.</li>
          <li>Contar con el personal con la capacidad técnica idónea y formación para conseguir la mejora de los procesos y su orientación a la satisfacción de los clientes y del propio personal.</li>
          <li>Preservar, incrementar y consolidar la innovación y el aprendizaje en el dominio de los procesos de inspección en un entorno de mejora continua.</li>
          <li>Investigar y tomar decisiones relativas a las apelaciones sin ninguna acción discriminatoria.</li>
        </ul>

        <p className="mt-6 text-gray-800 font-medium text-justify italic border-t pt-4 border-purple-100">
          Esta política es adoptada por la Gerencia y se aplica a todo el personal.
        </p>
      </motion.div>
    </section>
  );
}