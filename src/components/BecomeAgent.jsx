export default function BecomeAgent({ id }) {
  return (
    <section id={id} className="py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-black text-center lg:text-left leading-tight">
              Meet Our Expert Team
            </h2>
            <ul className="list-disc pl-5 text-gray-600 text-sm sm:text-base space-y-2 max-w-lg mx-auto lg:mx-0">
              <li>
                Trusted advisors for residential and commercial properties
              </li>
              <li>Proven track record in successful transactions</li>
              <li>Comprehensive market analysis and insights</li>
              <li>Client-focused approach for lasting relationships</li>
            </ul>
            <div className="flex justify-center lg:justify-start flex-col sm:flex-row gap-3 sm:gap-4 items-center sm:items-start mt-4 sm:mt-6">
              <a
                href="https://wa.me/+923361012742"
                target="_blank"
                rel="noopener noreferrer"
                className={`text-sm lg:text-md p-3 px-5 rounded-lg cursor-pointer bg-yellow font-bold
                }`}
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Islamabad Link Banner with CEO */}
          <div className="relative w-full h-64 sm:h-80 lg:h-96 flex items-center justify-center order-1 lg:order-2">
            {/* Background Container with Gradient */}
            <div className="absolute inset-0 w-full h-full">
              {/* Background Logo Pattern */}
              <div className="absolute inset-0 scale-120">
                {/* Main large logo watermark */}
                <img
                  src="/Logo.png"
                  alt="Islamabad Link Banner"
                  className="absolute w-2/3 sm:w-3/5 lg:w-1/2 left-1/2 transform -translate-x-1/2 select-none pointer-events-none object-contain top-0"
                />
              </div>
            </div>

            {/* CEO Profile */}
            <div className="relative z-20 flex flex-col items-center justify-center h-full pt-8 sm:pt-12 lg:pt-16">
              <div className="relative mb-3 sm:mb-4">
                <img
                  src="/CEO.png"
                  alt="CEO Aqeel Haider Kazmi"
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover rounded-full border-2 sm:border-4 border-yellow shadow-xl sm:shadow-2xl"
                />
                {/* Online indicator */}
                <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full border sm:border-4 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 lg:w-3 lg:h-3 bg-white rounded-full"></div>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm px-3 sm:px-4 lg:px-6 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl shadow-lg sm:shadow-xl text-center max-w-xs mx-2">
                <span className="text-sm sm:text-base lg:text-lg font-bold text-teal-900 block">
                  Syed Aqeel Haider Kazmi
                </span>
                <div className="text-xs sm:text-sm text-teal-700 font-semibold mb-1 sm:mb-2">
                  CEO
                </div>
                <div className="flex items-center justify-center gap-1 sm:gap-2 text-xs sm:text-sm">
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 text-teal-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-teal-800 font-medium">
                    0336-1012742
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
