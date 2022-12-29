"use client";
import {
  Navbar,
  Authorized,
  Hero,
  Contacto,
  Ubicacion,
  Footer,
} from "../components";

const Page = () => (
  <div className="App flex justify-center items-start">
    <div className="w-full">
      <Navbar />
      <Authorized />
      <Hero />
      <Contacto />
      <Ubicacion />
      <Footer />
    </div>
  </div>
);

export default Page;
