'use client'

import { contactos } from '../constants';
// import 'boxicons'

const Contacto = () => {
  return (
    <section className="contact mt-6 px-10" id="contacto">
      <div className="w-full" id="title-container">
        <h1 className="w-full text-black font-poppins italic uppercase py-2 text-2xl" id="title-contact">
          Contacto
        </h1>
      </div>
      <div className="w-full flex justify-end items-center" id='sasasa'>
        <div className="border-l-2 border-l-gray-200 max-w-[900px] pl-2 font-poppins" id='first-child'>
          <h1 className="text-2xl py-2 font-[600]" id='sub-title-company'>Distribuidora Hendajusa</h1>
          <p className="my-2" id='desc-company'>
            Hendajusa S.A.C. es una distribuidora autorizada de bebidas en
            general como cerveza, gaseosas, energizantes, néctares,
          </p>
          {contactos.map((cont) => (
            <>
              <h2 className="pt-3 font-[500]" id={cont.title} >{cont.title}</h2>
              <p className=" text-emerald-600 font-[200] flex justify-start items-center" id={cont.title + "p"}>
                {cont.value}
              </p>
            </>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Contacto;
