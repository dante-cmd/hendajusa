'use client'

const Ubicacion = () => {
  return (
    <section className="mt-6">
      <div className="w-full px-6">
        <h1 className="w-full text-black italic uppercase font-poppins px-2 py-2 text-2xl">
          Ubicación
        </h1>
        <div className="w-full">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4776605304764!2d-77.04028917084642!3d-12.049668987910144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8cf284eb72f%3A0xcbfa8cc3cbb09d87!2sAv.%20Tacna%20774%2C%20Lima%2015001!5e0!3m2!1ses-419!2spe!4v1664673991793!5m2!1ses-419!2spe"
        height="300" className="w-full"></iframe>
        </div>
        
      </div>
    </section>
  );
};

export default Ubicacion;
