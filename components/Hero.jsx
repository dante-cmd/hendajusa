'use client'
import Carousel from "./Carousel";
// import Carousel from "./Carousel";

const Hero = () => {
  return (
    <section className="products mt-6 px-10" id="producto">
      <div className="w-full">
        <h1 className="w-full text-black italic uppercase font-poppins py-2 text-2xl">Productos</h1>
      </div>
      <>
      <Carousel />
      </>
    </section>
  );
};

export default Hero;