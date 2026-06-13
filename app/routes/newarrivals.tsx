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
      <div className="mx-auto mb-8 w-[90%] text-center sm:mb-10">
        <h2 className="text-2xl font-semibold text-purple-900 sm:text-3xl">
          New Arrivals
        </h2>
        <p className="mt-1 text-sm text-gray-600 sm:text-base">
          Just In Great Product With Great Deal
        </p>
      </div>

      {/* Products */}
      <div className="mx-auto grid w-[90%] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((item) => (
          <div key={item.id} className="relative w-full overflow-hidden rounded-xl">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-slate-100">
              <img
                src={item.image}
                alt={item.title}
                className="h-full w-full object-cover object-top"
              />

              {/* Badge */}
              <span className="absolute left-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs">
                New Arrival
              </span>

              {/* Price */}
              <div className="absolute bottom-3 right-3 rounded-md bg-white px-4 py-2 text-sm font-semibold shadow transition-colors duration-300 hover:bg-yellow-400 hover:text-white sm:px-5 sm:py-2.5">
                {item.price}
              </div>
            </div>

            {/* Title */}
            <div className="py-4">
              <h3 className="text-sm font-bold leading-6 text-gray-800 sm:text-base">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
