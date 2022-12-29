'use client';

const navigations = [
  { name: "Principal", href: "#principal", id:"123" },
  { name: "Productos", href: "#producto", id:"124" },
  { name: "Contacto", href: "#contacto", id:"125" },
];

const ribbon = [
  "Hendajusa",
  "Gasesosas, Cervezas, Energizantes y Más para tu Negocio y Hogar",
  "WhatsApp: 946-250-150",
];
const Navbar = () => {
  return (
    <header>
      <div className="w-full bg-emerald-600 flex justify-between items-center font-poppins py-3 px-2">
        {ribbon.map((e, index) => (
          <span
            className={`text-white text-xs w-10 text-center px-2 md:text-sm  ${
              index == 1 ? "basis-56" : "basis-28"
            }`} key={e}
          >
            {e}
          </span>
        ))}
        
      </div>

      <nav className="w-full flex px-16 py-5 border border-slate-200 justify-around">
        <img src='./logo-2.png' className="w-[60px] object-contain mr-10" />
        <div className="flex-1 flex justify-end items-center">
          <ul className="list-none items-center flex">
            {navigations.map((e) => (
              <li className="flex-1 text-base font-poppins text-gray-800 font-medium mr-6" key={e.id}>
                {
                  <a className="cursor-pointer" href={e.href}>
                    {e.name}
                  </a>
                }
              </li>
            ))}
          </ul>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;

