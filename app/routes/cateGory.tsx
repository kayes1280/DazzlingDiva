import type React from "react";
import { Link } from "react-router";

interface CategoryItem {
  id: number;
  title: string;
  image: string;
  link: string;
  isActive?: boolean;
}

const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Sharee",
    image:
      "https://images.unsplash.com/photo-1617019114583-affb34d1b3cd?auto=format&fit=crop&w=700&q=90",
    link: "/category/sharee",
    isActive: true,
  },
  {
    id: 2,
    title: "Three Piece",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=700&q=90",
    link: "/category/three-piece",
  },
  {
    id: 3,
    title: "Two Piece",
    image:
      "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?auto=format&fit=crop&w=700&q=90",
    link: "/category/two-piece",
  },
  {
    id: 4,
    title: "Hijab",
    image:
      "https://images.pexels.com/photos/7245672/pexels-photo-7245672.jpeg?auto=compress&cs=tinysrgb&w=700",
    link: "/category/hijab",
  },
  {
    id: 5,
    title: "Royal Abaya",
    image:
      "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&w=700&q=90",
    link: "/category/royal-abaya",
  },
];

const CategorySection: React.FC = () => {
  return (
    <section className="bg-[#F4F4F4] py-10 sm:py-14 lg:py-16">
      <div className="mx-auto w-[90%]">
        <div className="mb-8 flex min-h-16 w-full items-center justify-between gap-3 rounded-md bg-white px-3 py-3 shadow-sm sm:mb-10 sm:min-h-20 sm:px-6 sm:py-4">
          <h2 className="whitespace-nowrap text-lg font-bold tracking-normal text-black min-[380px]:text-xl sm:text-2xl md:text-3xl">
            Category{" "}
            <span className="font-serif text-base font-normal italic text-gray-500 min-[380px]:text-lg sm:text-xl md:text-2xl">
              Section
            </span>
          </h2>

          <Link
            to="/categories"
            className="whitespace-nowrap rounded bg-[#FFDE00] px-3 py-2.5 text-xs font-bold text-[#1B1B1B] shadow-sm transition duration-300 hover:bg-[#2B0029] hover:text-[#FFDE00] focus:outline-none focus:ring-2 focus:ring-[#FFDE00] focus:ring-offset-2 sm:px-7 sm:py-3 sm:text-base"
          >
            Explore More
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {categories.map((category) => (
            <article
              key={category.id}
              className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[3/4] h-full w-full overflow-hidden bg-slate-100">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover object-top "
                  loading="lazy"
                />

                <div className="absolute inset-x-3 bottom-3">
                  <Link
                    to={category.link}
                    className="block w-full rounded bg-white px-2 py-2.5 text-center text-xs font-bold text-[#2B0029] shadow-sm transition duration-300 hover:bg-[#FFDE00] hover:text-[#2B0029] hover:shadow-md sm:px-3 sm:py-3 sm:text-base"
                  >
                    {category.title}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
