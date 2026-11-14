"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";

export default function Contact() {
  const { register, watch } = useForm();
  const formData = watch();

  const getWhatsAppLink = () => {
    const message = `
Hola, quiero realizar una consulta:

Nombre: ${formData?.name || ""}
Correo: ${formData?.email || ""}
Mensaje: ${formData?.message || "Por favor completar el mensaje"}
    `;

    return `https://wa.me/51931089649?text=${encodeURIComponent(message)}`;
  };

  return (
    <section
      id="contacto"
      className="py-20 max-w-5xl mx-auto px-4 md:px-6"
    >
      {/* TÍTULO */}
      <h2 className="text-3xl font-bold text-center text-primary">
        Contáctenos
      </h2>

      {/* INFORMACIÓN */}
      <div className="mt-6 text-center text-gray-700 space-y-2">
        <p>
          <strong>Correo:</strong> informescertigood@gmail.com
        </p>
        <p>
          <strong>Teléfono:</strong> 931089649
        </p>
      </div>

      {/* FORMULARIO */}
      <form className="mt-10 space-y-5">
        <input
          {...register("name")}
          type="text"
          placeholder="Nombre"
          className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <input
          {...register("email")}
          type="email"
          placeholder="Correo"
          className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <textarea
          {...register("message")}
          placeholder="Escriba su consulta..."
          rows={4}
          className="w-full border p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        {/* BOTÓN */}
        <div className="pt-4">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full block text-center bg-purple-400 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-purple-800 transition"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </form>

      {/* LOGO FINAL */}
      <div className="mt-12 text-center">
        <Image
          src="/logo.png"
          alt="Logo Certigood"
          width={120}
          height={120}
          className="mx-auto opacity-90"
        />
      </div>
    </section>
  );
}