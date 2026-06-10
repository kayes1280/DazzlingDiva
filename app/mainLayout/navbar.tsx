// Navbar.jsx

export default function Navbar() {
  return (
    <nav className="w-full min-w-full border-b border-gray-300">
      {/* Top Offer Bar */}
      <div className="bg-[#4b033d] text-white text-xs md:text-sm py-3">
        <div className="max-w-[1600px] mx-auto flex justify-center items-center gap-1 md:gap-2 text-center px-2 md:px-4 flex-wrap">
          <span>Get</span>

          <span className="text-yellow-400 font-bold">
            30% OFF
          </span>

          <span>Your First Order</span>

          <span className="text-yellow-400 font-bold">
            30% OFF
          </span>

          <span className="text-yellow-400">★</span>

          <span>Order Now And Get A</span>

          <span className="text-yellow-400 font-bold">
            Free
          </span>

          <span>Delivery Inside Dhaka City.</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white">
        <div className="w-full max-w-[1600px] mx-auto flex items-center justify-between px-4 md:px-6 lg:px-10 h-20 md:h-24">

          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-[22px] md:text-[28px] lg:text-[35px] font-bold text-[#4b033d] whitespace-nowrap">
              Dazzling Diva
            </h1>
          </div>

          {/* Menu */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[16px] xl:text-[18px] font-semibold">

            <a className="text-black cursor-pointer hover:text-orange-500 duration-200">
              Home
            </a>

            <a className="text-black cursor-pointer hover:text-orange-500 duration-200">
              Shop
            </a>

            <a className="text-black cursor-pointer hover:text-orange-500 duration-200">
              Three Piece
            </a>

            <a className="text-black cursor-pointer hover:text-orange-500 duration-200">
              Two Piece
            </a>

            <a className="text-black cursor-pointer hover:text-orange-500 duration-200">
              Hijab
            </a>

            <a>
              <button className="bg-[#4b033d] text-yellow-300 px-4 xl:px-7 py-3 xl:py-4 rounded-md font-bold hover:opacity-90 whitespace-nowrap">
                New Arrivals
              </button>
            </a>

            <a>
              <button className="bg-yellow-400 text-black px-4 xl:px-7 py-3 xl:py-4 rounded-md font-bold hover:opacity-90 whitespace-nowrap">
                Deals & Offers
              </button>
            </a>

          </ul>

          {/* Mobile Menu Button */}
          <div className="lg:hidden text-3xl cursor-pointer">
            ☰
          </div>

          {/* Right Icons */}
          <div className="hidden lg:flex items-center gap-3 md:gap-4 lg:gap-6">

            <span className="text-2xl lg:text-3xl cursor-pointer hover:scale-110 duration-200">
              🔍
            </span>

            <span className="text-2xl lg:text-3xl cursor-pointer hover:scale-110 duration-200">
              👤
            </span>

            <div className="relative cursor-pointer">
              <span className="text-2xl lg:text-3xl hover:scale-110 duration-200">
                🛍️
              </span>

              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                01
              </span>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}