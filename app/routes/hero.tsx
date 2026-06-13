import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#F2F4F8] px-0 py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-[30px]">
          <img
            src="background.png"
            alt="Banner"
            className="h-[420px] w-full object-cover sm:h-[520px] lg:h-[640px] xl:h-[700px]"
          />

          <div className="absolute inset-0 bg-black/35"></div>

          <div className="absolute inset-0 flex flex-col items-center  px-4 sm:px-8 ">
            <h1 className=" text-xl font-bold leading-tight text-white sm:text-5xl lg:text-7xl mt-95">
              Where Comfort And Style Hang Out
            </h1>

            <p className="mt-4 text-sm leading-6 text-white sm:text-lg md:text-xl md:leading-9">
              Cool Drapes And Unique Prints That Make You Feel At Home Forever.
            </p>

            <button className="mt-6 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-5 py-3 text-base font-bold text-[#4b033d] hover:bg-yellow-500 sm:mt-8 sm:px-8 sm:py-4 sm:text-xl">
              <FaStar className="h-5 w-5 sm:h-6 sm:w-6" />
              Explore Collections
            </button>

            <div className="mt-8 flex gap-2 sm:mt-12 sm:gap-3">
              <div className="h-1 w-12 rounded-full bg-yellow-400 sm:w-14"></div>
              <div className="h-1 w-8 rounded-full bg-white/50 sm:w-10"></div>
              <div className="h-1 w-8 rounded-full bg-white/50 sm:w-10"></div>
              <div className="h-1 w-8 rounded-full bg-white/50 sm:w-10"></div>
              <div className="h-1 w-8 rounded-full bg-white/50 sm:w-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
