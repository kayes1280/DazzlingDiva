const products = [
  {
    id: 1,
    title: "Orange Color Abaya With Lace & Stone Work",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=800&q=80",
    price: "৳ 10,000.00",
  },
  {
    id: 2,
    title: "Brown Georgette Straight Salwar Kameez",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=800&q=80",
    price: "৳ 8,642.00",
  },
  {
    id: 3,
    title: "Orange A-Line Tunic With Shrug",
    image:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=800&q=80",
    price: "৳ 10,000.00",
  },
];

export default function NewArrivals() {
  return (
    <section className="bg-[#F2F4F8] py-10 sm:py-12 lg:py-14">
      {/* Heading */}
      <div className="mx-auto mb-6 w-[90%] text-center sm:mb-10">
        <h2 className="text-2xl font-semibold text-purple-900 sm:text-3xl">
          New Arrivals
        </h2>
        <p className="mt-1 text-xs text-gray-600 sm:text-base">
          Just In Great Product With Great Deal
        </p>
      </div>

      {/* Products */}
      <div className="mx-auto grid w-[90%] grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
        {products.map((item) => (
          <div key={item.id} className="relative w-full overflow-hidden rounded-md">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-top"
              />

              {/* Badge */}
              <span className="absolute left-2 top-2 rounded-full bg-yellow-400 px-2 py-1 text-[10px] sm:left-3 sm:top-3 sm:px-3 sm:text-xs">
                New Arrival
              </span>

              {/* Price */}
              <div className="absolute bottom-2 right-2 rounded-md bg-white px-2.5 py-1.5 text-xs font-semibold shadow transition-colors duration-300 hover:bg-yellow-400 hover:text-white sm:bottom-3 sm:right-3 sm:px-5 sm:py-2.5 sm:text-sm">
                {item.price}
              </div>
            </div>

            {/* Title */}
            <div className="py-3 sm:py-4">
              <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5 text-gray-800 sm:min-h-12 sm:text-base sm:leading-6">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
