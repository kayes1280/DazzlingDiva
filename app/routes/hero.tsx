export default function Hero() {
    return (
        <section className="bg-[#e5e5e5] py-8 px-4">
      <div className="max-w-[1600px] mx-auto">
        <div className="relative overflow-hidden rounded-[30px]">

          {/* Your Uploaded Picture */}
          <img
            src="background.png"
            alt="Banner"
            className="w-full h-[700px] object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35"></div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">

            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
              Where Comfort And Style Hang Out
            </h1>

            <p className="text-white text-lg md:text-2xl mt-5">
              Cool Drapes And Unique Prints That Make You Feel
              <br />
              At Home Forever.
            </p>

            <button className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-[#4b033d] font-bold text-xl px-8 py-4 rounded-md">
              ✦ Explore Collections
            </button>

            <div className="flex gap-3 mt-12">
              <div className="w-14 h-1 bg-yellow-400 rounded-full"></div>
              <div className="w-10 h-1 bg-white/50 rounded-full"></div>
              <div className="w-10 h-1 bg-white/50 rounded-full"></div>
              <div className="w-10 h-1 bg-white/50 rounded-full"></div>
              <div className="w-10 h-1 bg-white/50 rounded-full"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
    ); 

}
