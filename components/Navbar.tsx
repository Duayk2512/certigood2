"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all ${
        scroll ? "bg-white shadow-md" : "bg-white/80 backdrop-blur"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-2">

        {/* ✅ LOGO */}
        <a href="#inicio">
          <Image
            src="/logo.png"
            alt="logo"
            className="w-28 md:w-36 object-contain"
            width={200}
            height={80}
          />
        </a>

        {/* ✅ MENÚ DESKTOP */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <li><a href="#inicio" className="hover:text-primary">Inicio</a></li>
          <li><a href="#nosotros" className="hover:text-primary">Nosotros</a></li>
          <li><a href="#servicios" className="hover:text-primary">Servicios</a></li>
          <li><a href="#contacto" className="hover:text-primary">Contacto</a></li>
        </ul>

        {/* ✅ BOTÓN DESKTOP */}
        <a
          href="https://wa.me/51931089649"
          target="_blank"
          className="hidden md:block bg-primary text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-secondary transition"
        >
          Solicitar Inspección
        </a>

        {/* ✅ BOTÓN HAMBURGUESA */}
        <button
          className="md:hidden text-primary"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* ✅ MENÚ MÓVIL */}
      {open && (
        <div className="md:hidden bg-white shadow-lg px-6 py-6 space-y-6 text-center animate-slide-down">

          <a href="#inicio" onClick={() => setOpen(false)} className="block text-lg font-medium">Inicio</a>
          <a href="#nosotros" onClick={() => setOpen(false)} className="block text-lg font-medium">Nosotros</a>
          <a href="#servicios" onClick={() => setOpen(false)} className="block text-lg font-medium">Servicios</a>
          <a href="#contacto" onClick={() => setOpen(false)} className="block text-lg font-medium">Contacto</a>

          {/* ✅ BOTÓN WHATSAPP MÓVIL */}
          <a
            href="https://wa.me/51931089649"
            target="_blank"
            className="block bg-primary text-white px-6 py-3 rounded-xl font-semibold"
          >
            Solicitar Inspección
          </a>
        </div>
      )}
    </header>
  );
}
