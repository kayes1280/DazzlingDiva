import { FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-[#F2F4F8] py-4 sm:py-6 md:py-8 lg:py-12">
      <div className="mx-auto w-[90%] max-w-[1600px]">
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-[30px] mb-20">

          <img
            src="background.png"
            alt="Banner"
            className="w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[640px] xl:h-[700px] 2xl:h-[750px] object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 mt-25 sm:px-6 md:px-10 md:mt-40 lg:mt-48 xl:mt-56 2xl:mt-64">

            <h1 className=" text-white font-bold leading-tight text-xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl" >
              Where Comfort And Style Hang Out
            </h1>

            <p
              className=" mt-3 sm:mt-4 md:mt-6 text-white text-center text-sm sm:text-base md:text-lg lg:text-xl leading-6 md:leading-8 ">
              Cool Drapes And Unique Prints That Make You Feel At Home Forever.
            </p>
            <button
              className=" mt-5 sm:mt-6 md:mt-8 inline-flex items-center gap-2 rounded-md bg-yellow-400 px-4 sm:px-10 md:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-bold text-[#4b033d] transition-all duration-300 hover:bg-yellow-500 hover:scale-105 " >
              <FaStar />
              Explore Collections
            </button>

            <div className="mt-6 sm:mt-8 md:mt-12 flex justify-center gap-2">
              <div className="h-1 w-14 sm:w-16 lg:w-20 rounded-full bg-yellow-400"></div>
              <div className="h-1 w-8 sm:w-10 lg:w-14 rounded-full bg-white/50"></div>
              <div className="h-1 w-8 sm:w-10 lg:w-14 rounded-full bg-white/50"></div>
              <div className="h-1 w-8 sm:w-10 lg:w-14 rounded-full bg-white/50"></div>
              <div className="h-1 w-8 sm:w-10 lg:w-14 rounded-full bg-white/50"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}