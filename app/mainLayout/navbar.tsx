import {
  FiSearch,
  FiUser,
  FiShoppingBag,
  FiMenu,
} from "react-icons/fi";

const menuItems = [
  { name: "Home" },
  { name: "Shop" },
  { name: "Three Piece" },
  { name: "Two Piece" },
  { name: "Hijab" },
];

const buttons = [
  { name: "New Arrivals", type: "dark" },
  { name: "Deals & Offers", type: "light" },
];

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-300">
      

        {/* Top Bar */}
        <div className=" bg-[#4b033d] text-white text-xs md:text-sm py-3 text-center flex flex-wrap justify-center gap-1 md:gap-2">
          <span>Get</span>
          <span className="text-yellow-400 font-bold">30% OFF</span>
          <span>Your First Order</span>
          <span className="text-yellow-400 font-bold">30% OFF</span>
          <span className="text-yellow-400">★</span>
          <span>Order Now And Get A</span>
          <span className="text-yellow-400 font-bold">Free</span>
          <span>Delivery Inside Dhaka City.</span>
        </div>
      <div className="bg-white">
        {/* Main Navbar */}
        <div className="w-[90%] mx-auto ">
          <div className="flex items-center justify-between h-20 md:h-24 px-4 md:px-6 lg:px-10">

            {/* Logo */}
            <h1 className="text-[22px] md:text-[28px] lg:text-[35px] font-bold text-[#4b033d]">
              Dazzling Diva
            </h1>

            {/* Menu */}
            <ul className="hidden lg:flex items-center gap-6 xl:gap-8 font-semibold">

              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="cursor-pointer text-black hover:text-orange-500 duration-200"
                >
                  {item.name}
                </li>
              ))}

              {buttons.map((btn, index) => (
                <li key={index}>
                  <button
                    className={`px-4 xl:px-6 py-3 rounded-md font-bold whitespace-nowrap duration-200 hover:opacity-80
                      ${
                        btn.type === "dark"
                          ? "bg-[#4b033d] text-yellow-300 hover:bg-[#4b033d]"
                          : "bg-yellow-400 text-black"
                      }`}
                  >
                    {btn.name}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile Menu */}
            <div className="lg:hidden text-3xl cursor-pointer">
              <FiMenu />
            </div>

            {/* Icons */}
            <div className="hidden lg:flex items-center gap-5 text-2xl">

              <FiSearch className="cursor-pointer hover:scale-110 duration-200" />

              <FiUser className="cursor-pointer hover:scale-110 duration-200" />

              <div className="relative cursor-pointer">
                <FiShoppingBag className="hover:scale-110 duration-200" />

                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  1
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </nav>
  );
}