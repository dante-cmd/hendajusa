'use client'

import { contactos } from "../constants";
import "boxicons"

const Contacto = () => {
  return (
    <section className="contact mt-6 px-10" id="contacto">
      <div className="w-full">
        <h1 className="w-full text-black font-poppins italic uppercase py-2 text-2xl">
          Contacto
        </h1>
      </div>
      <div className="w-full flex justify-end items-center">
        <div className="border-l-2 border-l-gray-200 max-w-[900px] pl-2 font-poppins">
          <h1 className="text-2xl py-2 font-[600]">Distribuidora Hendajusa</h1>
          <p className="my-2">
            Hendajusa S.A.C. es una distribuidora autorizada de bebidas en
            general como cerveza, gaseosas, energizantes, néctares,
          </p>
          {contactos.map((cont) => (
            <>
              <h2 className="pt-3 font-[500]" key={cont.title} >{cont.title}</h2>
              <p className=" text-emerald-600 font-[200] flex justify-start items-center" key={cont.title + "p"}>
                {cont.icon}{cont.value}
              </p>
            </>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Contacto;
