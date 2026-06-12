import { FaBasketShopping } from "react-icons/fa6";

const products = [
  {
    id: 1,
    image: "/product.jpg",
    title: "Orange Color Abaya With Lace & Stone Work",
    oldPrice: "৳ 8,642.00",
    price: "৳ 8,642.00",
    save: "৳ 680.00",
  },
  {
    id: 2,
    image: "/product.jpg",
    title: "Orange Color Abaya With Lace & Stone Work",
    oldPrice: "৳ 8,642.00",
    price: "৳ 8,642.00",
    save: "৳ 680.00",
  },
  {
    id: 3,
    image: "/product.jpg",
    title: "Orange Color Abaya With Lace & Stone Work",
    oldPrice: "৳ 8,642.00",
    price: "৳ 8,642.00",
    save: "৳ 680.00",
  },
  {
    id: 4,
    image: "/product.jpg",
    title: "Orange Color Abaya With Lace & Stone Work",
    oldPrice: "৳ 8,642.00",
    price: "৳ 8,642.00",
    save: "৳ 680.00",
  },
];

export default function ThreePieceSection() {
  return (
    <section className="bg-[#E5E5E5] py-10">
      <div className="w-[90%] mx-auto">

        {/* Header */}
        <div className="bg-white rounded-md p-3 md:p-4 flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">

          <h2 className="text-2xl md:text-4xl font-bold text-black">
            Three Piece
          </h2>

          <button
            className="  bg-[#FFD500] px-6 py-3 font-semibold
              rounded transition-all duration-300 hover:bg-[#4A003F] hover:text-white
            "
          >
            Explore More
          </button>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div key={product.id}>

              {/* Image */}
              <div className="relative overflow-hidden rounded-md group">

                <span
                  className=" absolute top-3 left-0 z-10 bg-[#FFD500]
                    text-xs px-3
                    py-1 rounded-r-full
                  "
                >
                  Save: {product.save}
                </span>

                <img
                  src={product.image}
                  alt={product.title}
                  className="
                    w-full
                    h-[320px]
                    md:h-[420px]
                    object-cover
                    transition-transform
                    duration-500
                  "
                />
              </div>

              {/* Content */}
              <div className="pt-4">

                <h3
                  className="
                    text-lg
                    font-semibold
                    leading-6
                    text-[#1F1F1F]
                    line-clamp-2
                    min-h-[52px]
                  "
                >
                  {product.title}
                </h3>

                <div className="flex items-center gap-3 mt-2">
                  <span className="font-bold">
                    {product.price}
                  </span>

                  <span className="text-gray-600">
                    -
                  </span>

                  <span className="font-bold">
                    {product.oldPrice}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 mt-4">

                  <button
                    className="
                      flex-1
                      bg-[#4A003F]
                      text-[#FFD500]
                      py-3
                      rounded
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-2
                      transition-all
                      duration-300
                      hover:bg-[#FFD500]
                      hover:text-[#4A003F]
                    "
                  >
                    <FaBasketShopping />
                    Add to Cart
                  </button>

                  <button
                    className="
                      px-5
                      bg-[#FFD500]
                      text-[#4A003F]
                      rounded
                      font-semibold
                      transition-all
                      duration-300
                      hover:bg-[#4A003F]
                      hover:text-[#FFD500]
                    "
                  >
                    Buy Now
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}