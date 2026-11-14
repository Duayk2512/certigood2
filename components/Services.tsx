"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "INSPECCIÓN DE LOTE POR MUESTREO(CARACTERÍSTICAS MICROBIOLÓGICAS)",
  },
  {
    title:
      "INSPECCIÓN DE BUENAS PRÁCTICAS DE MANUFACTURAS(BPM) Y CONDICIONES HIGIÉNICO SANITARIAS",
  },
  {
    title: "INSPECCIÓN DE CONDICIONES HIGIÉNICO SANITARIAS DE ALMACENES",
  },
  {
    title: "INSPECCIÓN DEL SISTEMA HACCP EN LA FABRICACIÓN",
  },
  {
    title: "INSPECCIÓN TÉCNICO PRODUCTIVO DE PLANTA",
  },
  {
    title: "INSPECCIÓN DE CONDICIONES HIGIÉNICO SANITARIAS DE TRANSPORTE",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary">
          Nuestros Servicios
        </h2>

        <p className="text-center mt-4 max-w-2xl mx-auto text-gray-600">
          Seleccione el servicio de su interés y contáctenos directamente por WhatsApp.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => {

            // ✅ MENSAJE PROFESIONAL PERSONALIZADO
            const message = encodeURIComponent(
              `Hola, estoy interesado en el servicio: "${service.title}". Me gustaría recibir información y una cotización.`
            );

            const url = `https://wa.me/51931089649?text=${message}`;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4 }}
               className="bg-white p-6 rounded-2xl flex flex-col border-2 border-purple-500 shadow-md hover:shadow-xl hover:border-purple-600 hover:-translate-y-2 transition-all duration-300"

              >
                {/* ICONO */}
                <CheckCircle className="text-primary w-8 h-8" />

                {/* TÍTULO */}
                <h3 className="font-semibold text-lg mt-4">
                  {service.title}
                </h3>

                {/* ✅ BOTÓN PROFESIONAL */}
              
<a
  href={url}
  target="_blank"
  className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:text-secondary transition"
>
  Consultar
  <span className="text-lg">→</span>
</a>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
