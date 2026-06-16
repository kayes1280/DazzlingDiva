import { useState } from "react";
import { Link } from "react-router";
import { FiSearch, FiUser, FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Three Piece", path: "/category/three-piece" },
  { name: "Two Piece", path: "/category/two-piece" },
  { name: "Hijab", path: "/category/hijab" },
];

const buttons = [
  { name: "New Arrivals", path: "/new-arrivals", type: "dark" },
  { name: "Deals & Offers", path: "/deals", type: "light" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full border-b border-gray-300">
      <div className="bg-[#4b033d] px-3 py-2 text-center text-[10px] leading-4 text-white sm:px-4 sm:py-2.5 sm:text-xs md:text-sm">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-x-1.5 gap-y-0.5 sm:w-[90%] md:gap-x-2">
          <span>Get</span>
          <span className="font-bold text-yellow-400">30% OFF</span>
          <span>Your First Order</span>
          <span className="font-bold text-yellow-400">30% OFF</span>
          <span className="text-yellow-400">*</span>
          <span>Order Now And Get A</span>
          <span className="font-bold text-yellow-400">Free</span>
          <span>Delivery Inside Dhaka City.</span>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto w-[90%]">
          <div className="flex h-16 items-center justify-between gap-3 sm:h-20 lg:h-24 lg:gap-4">
            <h1 className="min-w-0 shrink text-[22px] font-bold leading-none text-[#4b033d] sm:text-[28px] lg:shrink-0 lg:text-[32px] xl:text-[35px]">
              Dazzling Diva
            </h1>

            <ul className="hidden items-center gap-4 text-sm font-semibold lg:flex xl:gap-7 xl:text-base">
              {menuItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    className="whitespace-nowrap text-black duration-200 hover:text-orange-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

              {buttons.map((btn) => (
                <li key={btn.name}>
                  <Link
                    to={btn.path}
                    className={`whitespace-nowrap rounded-md px-3 py-2.5 font-bold duration-200 hover:opacity-80 xl:px-5 ${
                      btn.type === "dark"
                        ? "bg-[#4b033d] text-yellow-300"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {btn.name}
                  </Link>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md text-3xl text-[#4b033d] transition hover:bg-[#4b033d]/5 lg:hidden"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen((current) => !current)}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </button>

            <div className="hidden items-center gap-4 text-2xl lg:flex xl:gap-5">
              <FiSearch className="cursor-pointer duration-200 hover:scale-110" />
              <FiUser className="cursor-pointer duration-200 hover:scale-110" />

              <div className="relative cursor-pointer">
                <FiShoppingBag className="duration-200 hover:scale-110" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-black">
                  1
                </span>
              </div>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-gray-200 bg-white shadow-sm lg:hidden">
            <div className="mx-auto w-[90%] py-4">
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-3 text-base font-semibold text-[#2B0029] transition hover:bg-yellow-400"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {buttons.map((btn) => (
                  <Link
                    key={btn.name}
                    to={btn.path}
                    onClick={closeMenu}
                    className={`rounded-md px-4 py-3 text-center font-bold transition hover:opacity-85 ${
                      btn.type === "dark"
                        ? "bg-[#4b033d] text-yellow-300"
                        : "bg-yellow-400 text-black"
                    }`}
                  >
                    {btn.name}
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-center gap-6 border-t border-gray-100 pt-4 text-2xl text-[#4b033d]">
                <Link to="/search" onClick={closeMenu} aria-label="Search">
                  <FiSearch />
                </Link>
                <Link to="/account" onClick={closeMenu} aria-label="Account">
                  <FiUser />
                </Link>
                <Link
                  to="/cart"
                  onClick={closeMenu}
                  aria-label="Cart"
                  className="relative"
                >
                  <FiShoppingBag />
                  <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-yellow-400 text-[10px] font-bold text-black">
                    1
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
