export default function Hero({ id }) {
  return (
    <section id={id} className="text-white w-full min-h-screen relative">
      <div className="flex flex-col justify-between lg:flex-row h-screen bg-teal-800">
        {/* Left Content */}
        <div className="space-y-2 lg:space-y-8 text-center lg:text-left lg:ps-14 w-[80%] md:w-[65%] lg:w-[60%] lg:m-0 mx-auto mt-[15vh] lg:h-screen flex flex-col justify-center">
          <h1 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight">
            The <span className="text-yellow">#1</span> site real estate
            professionals trust*
          </h1>

          <p className="text-lg md:text-xl leading-relaxed">
            From as low as $10 per day with limited time offer discounts.
          </p>
          <a
            href="#properties"
            className="text-sm lg:text-md text-black p-3 px-5 rounded-lg cursor-pointer bg-yellow font-bold self-center lg:self-start"
          >
            Browse More Properties
          </a>
        </div>
        <div className="w-full lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0 flex justify-center lg:justify-end">
          <img
            src="/home.png"
            className="w-3/4 lg:w-[100%] lg:h-auto max-h-[60vh] lg:max-h-[75vh] object-contain lg:object-bottom"
            alt="Modern luxury home"
          />
        </div>
      </div>

      <div className="absolute hidden lg:block left-0 bottom-0 bg-yellow text-black p-4 md:p-8 w-full md:w-[40%] rounded-tr-3xl">
        <div className="flex flex-row md:grid md:grid-cols-3 gap-4 md:gap-8 text-center justify-between">
          <div className="flex-1 space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              680
            </div>
            <div className="text-xs md:text-sm lg:text-base font-medium">
              Award Winning
            </div>
          </div>
          <div className="flex-1 space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              8K+
            </div>
            <div className="text-xs md:text-sm lg:text-base font-medium">
              Happy Customer
            </div>
          </div>
          <div className="flex-1 space-y-1 md:space-y-2">
            <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
              500+
            </div>
            <div className="text-xs md:text-sm lg:text-base font-medium">
              Property Ready
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
