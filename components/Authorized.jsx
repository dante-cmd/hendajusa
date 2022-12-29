import { authorized } from "../constants";
const Authorized = () => {
  return (
    <section className="authorized w-full px-10 pt-6">
        <h1 className="w-full text-black font-poppins italic uppercase py-2 text-2xl">
          Autorizado por
        </h1>
        <div className="w-full bg-gray-100 py-6">
        <div className="flex justify-center items-center flex-wrap sm:flex-nowrap">
          {authorized.map((el) => (
            <img src={el.pic} alt={el.title} className="w-[100px] h-[70px] object-contain bg-white rounded-[10px] mr-10 px-2 shadow-lg mb-2" key={el.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Authorized;