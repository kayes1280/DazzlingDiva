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
    <section className="py-12 bg-[#F2F4F8]">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-purple-900">
          New Arrivals
        </h2>
        <p className="text-gray-600 mt-1">
          Just In Great Product With Great Deal
        </p>
      </div>

      {/* Products */}
      <div className="w-[90%] mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className=" w-[500px] rounded-xl overflow-hidden relative group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[600px] object-cover rounded-sm"
              />

              {/* Badge */}
              <span className="absolute top-3 left-3 bg-yellow-400 text-xs px-3 py-1 rounded-full">
                New Arrival
              </span>

              {/* Price */}
              <div className="absolute bottom-3 right-3 bg-white px-5 py-2.5 rounded-md shadow text-sm font-semibold hover:bg-yellow-400 hover:text-white transition-colors duration-300">
                {item.price}
              </div>
            </div>

            {/* Title */}
            <div className="py-4">
              <h3 className="text-sm font-medium text-gray-800 font-bold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}