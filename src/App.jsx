import React, { useState, useEffect } from 'react';
import Hero from "./components/Hero"
import FeaturedProperties from "./components/FeaturedProperties"
import WhyChooseUs from "./components/WhyChooseUs"
import DiscoverSection from "./components/DiscoverSection"
import VillaSpotlight from "./components/VillaSpotlight"
import Testimonials from "./components/Testimonials"
import BecomeAgent from "./components/BecomeAgent"
import Footer from "./components/Footer"
import Header from "./components/Header";
import RecentHighlights from "./components/RecentArticles";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show popup after component mounts (website loads)
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Small delay to ensure smooth loading

    return () => clearTimeout(timer);
  }, []);

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="relative">
      <Header/>
      <Hero id="hero" />
      <WhyChooseUs />
      <FeaturedProperties id="properties" />
      <VillaSpotlight />
      <DiscoverSection />
      <BecomeAgent id="about" />
      <Testimonials />
      <RecentHighlights/>
      <Footer />

      {/* Brand Promotion Popup */}
      {showPopup && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closePopup}
          ></div>
          
          {/* Popup Content */}
          <div className="relative bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-yellow cursor-pointer rounded-full p-2 transition-all duration-200 shadow-lg"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row min-h-[500px]">
              {/* Left Side - CEO Section */}
              <div className="lg:w-1/2 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center p-8 lg:p-12">
                <div className="relative z-20 flex flex-col items-center justify-center h-full pt-8 sm:pt-12 lg:pt-16">
                  <div className="relative mb-3 sm:mb-4">
                    <img
                      src="/CEO.png"
                      alt="CEO Aqeel Haider Kazmi"
                      className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 object-cover rounded-full border-2 sm:border-4 border-yellow shadow-xl sm:shadow-2xl"
                    />
                    {/* Online indicator */}
                    <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 bg-green-500 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 rounded-full border sm:border-4 border-white flex items-center justify-center">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
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

              {/* Right Side - Marketing Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="text-center lg:text-left">
                  {/* Brand Logo/Title */}
                  <div className="mb-6">
                    <h1 className="text-3xl lg:text-4xl font-bold mb-2">
                      Welcome to Our Brand
                    </h1>
                    <p className="text-lg text-teal-700 font-medium">
                      Your Trusted Real Estate Partner
                    </p>
                  </div>

                  {/* Marketing Content */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-yellow rounded-full mt-1 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm lg:text-base">
                        <strong className="text-black">15+ Years</strong> of Excellence in Real Estate
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-yellow rounded-full mt-1 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm lg:text-base">
                        <strong className="text-black">500+</strong> Properties Successfully Sold
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-yellow rounded-full mt-1 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm lg:text-base">
                        <strong className="text-black">24/7</strong> Expert Consultation Available
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-4 h-4 bg-yellow rounded-full mt-1 flex-shrink-0"></div>
                      <p className="text-gray-700 text-sm lg:text-base">
                        <strong className="text-black">Premium</strong> Properties at Best Prices
                      </p>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="space-y-4">
                    <div className="bg-teal-800 text-white px-6 py-3 rounded-lg text-center">
                      <p className="text-sm lg:text-base">
                        🎉 Special Offer: Free Property Consultation
                      </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3">
                      <a 
                        href="tel:0336-1012742"
                        className="bg-teal-800 text-white text-sm cursor-pointer px-3 py-2 rounded-lg"
                      >
                        Contact Us
                      </a>
                      
                      <button
                        onClick={closePopup}
                        className="bg-yellow px-3 py-2 text-sm rounded-lg"
                      >
                        Explore Properties
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App;