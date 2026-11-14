import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Certifications from "../components/Certifications";
import Policy from "../components/Policy";         
import Complaints from "../components/Complaints";  
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Certifications />
      <Policy />        {/* 👈 Renderizar sección de Política */}
      <Complaints />    {/* 👈 Renderizar sección de Quejas y Apelaciones */}
      <CTA />
      <Contact />
      <Footer />
      <WhatsApp />
    </>
  );
}