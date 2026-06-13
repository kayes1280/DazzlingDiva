import { FaBasketShopping } from "react-icons/fa6";

const sections = [
  {
    heading: "Three Piece",
    button: "Explore More",
    products: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=600",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 2,
        image: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 4,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
    ],
  },


  {
    heading: "Three Piece",
    button: "Explore More",
    products: [
      {
        id: 5,
        image:  "https://images.pexels.com/photos/1852382/pexels-photo-1852382.jpeg",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 6,
        image: "https://images.pexels.com/photos/1381556/pexels-photo-1381556.jpeg",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 7,
        image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
      {
        id: 8,
        image:"https://images.pexels.com/photos/291762/pexels-photo-291762.jpeg",
        title: "Orange Color Abaya With Lace & Stone Work",
        oldPrice: "৳ 8,642.00",
        price: "৳ 8,642.00",
        save: "৳ 680.00",
      },
    ],
  },
];

export default function ThreePieceSection() {
  return (
    <section className="bg-[#F2F4F8] py-10 sm:py-12">
      <div className="w-[90%] mx-auto">
        {sections.map((section, index) => (
          <div key={index} className="mt-12 sm:mt-16 lg:mt-20">
            {/* Header */}
            <div className="mb-8 flex items-center justify-between gap-4 rounded-md bg-white p-3 shadow-sm sm:mb-10 md:p-4">
              <h2 className="text-xl font-bold text-black sm:text-2xl md:text-4xl">
                {section.heading}
              </h2>

              <button className="whitespace-nowrap rounded bg-[#FFD500] px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-[#4A003F] hover:text-white sm:px-6 sm:py-3 sm:text-base">
                {section.button}
              </button>
            </div>

            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {section.products.map((product) => (
                <div key={product.id} className="w-full">
                  {/* Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-slate-100">
                    <span className="absolute top-3 left-0 z-10 bg-[#FFD500] text-xs px-3 py-1 rounded-r-full">
                      Save: {product.save}
                    </span>

                    <img src={product.image} alt={product.title}
                      className="h-full w-full object-cover object-top" />
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="line-clamp-2 min-h-[48px] text-base font-semibold leading-6 text-[#1F1F1F] sm:text-lg sm:min-h-[52px]">
                      {product.title}
                    </h3>

                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm sm:text-base">
                      <span className="font-bold">{product.price}</span>

                      <span className="text-gray-600">-</span>

                      <span className="font-bold">
                        {product.oldPrice}
                      </span>
                    </div>

                    <div className="mt-4 flex gap-2">
                      <button className="flex flex-1 items-center justify-center gap-2 rounded bg-[#4A003F] px-3 py-3 text-sm font-semibold text-[#FFD500] transition-all duration-300 hover:bg-[#FFD500] hover:text-[#4A003F] sm:text-base">
                        <FaBasketShopping />
                        Add to Cart
                      </button>

                      <button className="whitespace-nowrap rounded bg-[#FFD500] px-4 text-sm font-semibold text-[#4A003F] transition-all duration-300 hover:bg-[#4A003F] hover:text-[#FFD500] sm:px-5 sm:text-base">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
