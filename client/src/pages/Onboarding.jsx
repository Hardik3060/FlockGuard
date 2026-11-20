function Onboarding() {
  return (
    <div className="flex flex-col flex-1 mx-auto w-full max-w-7xl px-6 py-8 sm:py-12">
      <section className="flex flex-col-reverse lg:flex-row items-center justify-around gap-10 lg:gap-24">
        <div className="w-full lg:w-1/4 flex justify-center lg:justify-start">
          <div className="relative group max-w-56 sm:max-w-64">
            <img
              className="relative w-full h-auto object-contain rounded-3xl shadow-2xl transform rotate-2 group-hover:rotate-0 transition-transform duration-500 ease-out"
              src="images/screens.gif"
              alt="App Interface Preview"
            />
          </div>
        </div>

        <div className="w-full lg:w-fit flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-4 text-red-500 tracking-wide sm:tracking-tighter leading-none">
            FlockGuard
          </h1>
          <p className="text-xs sm:text-base lg:text-lg text-zinc-500 mb-8 sm:mb-12 max-w-[280px] sm:max-w-lg font-medium leading-relaxed sm:leading-tight tracking-tight">
            <span className="font-bold text-black">PROTECT, MANAGE</span> and{" "}
            <span className="font-bold text-black">SECURE</span> your pig &
            poultry farms with innovative technology.
          </p>

          <div className="w-full max-w-xl bg-gray-50/50 border border-gray-100 p-5 sm:p-6 rounded-3xl shadow-sm">
            <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-5">
              Android Build · ARMv7 (32-bit)
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 text-xs md:text-sm">
              <a
                href="/release/FlockGuard-release-armeabi-v7a.apk"
                download
                className="flex-1 text-center bg-red-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-red-200 hover:bg-red-600 hover:-translate-y-0.5 transition-all active:scale-95 tracking-widest"
              >
                Install App
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/Hardik3060/FlockGuard"
                className="flex items-center justify-center px-6 py-4 bg-white border-2 border-gray-100 text-gray-700 font-black rounded-2xl hover:border-red-500 hover:text-red-500 transition-all tracking-widest"
              >
                GitHub 🚀
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Onboarding;
