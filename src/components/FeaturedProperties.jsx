// Custom Swiper pagination style
const swiperPaginationStyle = `
.swiper-pagination-bullet {
  opacity: 0.5;
}
.swiper-pagination-bullet-active {
  background: #115e59 !important;
  opacity: 1;
}
`;

import React, { useState } from "react";
import {
  MapPin,
  Bed,
  Bath,
  Square,
  X,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const properties = [
  {
    id: 1,
    image: "/1.jpeg",
    title: "Block C Near J7 Emporium",
    location: "B-17 Islamabad",
    price: "$280,000",
    beds: 6,
    baths: 6,
    sqft: "50 X 90",
    type: "FOR SALE",
    featured: false,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg"],
  },
  {
    id: 2,
    image: "/2.jpeg",
    title: "Block C",
    location: "B-17 Islamabad",
    price: "$250/month",
    beds: 4,
    baths: 2,
    sqft: "400",
    type: "FOR SALE",
    featured: false,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg"],
  },
  {
    id: 3,
    image: "/3.jpeg",
    title: "Block C",
    location: "B-17 Islamabad",
    price: "$180,000",
    beds: 4,
    baths: 2,
    sqft: "450",
    type: "FOR SALE",
    featured: true,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg", "/5.jpeg", "/6.jpeg"],
  },
  {
    id: 4,
    image: "/4.jpeg",
    title: "Block C",
    location: "B-17 Islamabad",
    price: "$220,000",
    beds: 4,
    baths: 1,
    sqft: "380",
    type: "FOR SALE",
    featured: true,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg", "/4.jpeg"],
  },
  {
    id: 5,
    image: "/5.jpeg",
    title: "Block C",
    location: "B-17 Islamabad",
    price: "$320,000",
    beds: 3,
    baths: 2,
    sqft: "520",
    type: "FOR SALE",
    featured: false,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg"],
  },
  {
    id: 5,
    image: "/6.jpeg",
    title: "Block C",
    location: "B-17 Islamabad",
    price: "$320,000",
    beds: 3,
    baths: 2,
    sqft: "520",
    type: "FOR SALE",
    featured: false,
    gallery: ["/1.jpeg", "/2.jpeg", "/3.jpeg"],
  },
];

export default function FeaturedProperties({ id }) {
  const [selectedProperty, setSelectedProperty] = useState(null);

  const openPropertyModal = (property) => {
    setSelectedProperty(property);
    document.body.style.overflow = "hidden";
  };

  const closePropertyModal = () => {
    setSelectedProperty(null);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <section id={id}>
        <style>{swiperPaginationStyle}</style>
        <section className="py-16 lg:py-32 bg-gray-100 overflow-x-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-32">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-yellow font-bold text-sm text-center md:text-left mb-12">
              The projects we have delievered
            </p>

            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1}
                navigation={{
                  nextEl: ".custom-swiper-next",
                  prevEl: ".custom-swiper-prev",
                }}
                pagination={{ clickable: true }}
                breakpoints={{
                  640: { slidesPerView: 1.1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 2 },
                  1280: { slidesPerView: 3 },
                }}
                className="py-4"
                style={{ maxWidth: "100%" }}
              >
                {properties.map((property) => (
                  <SwiperSlide key={property.id}>
                    <div
                      className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer flex-shrink-0 w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto transition-all duration-300 border border-teal-100 hover:shadow-2xl"
                      style={{ minWidth: 0 }}
                      onClick={() => openPropertyModal(property)}
                    >
                      <div className="relative">
                        <img
                          src={property.image || "/placeholder.svg"}
                          alt={property.title}
                          className="w-full h-56 object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              property.type === "FOR SALE"
                                ? "bg-teal-800 text-white"
                                : "bg-teal-800 text-white"
                            }`}
                          >
                            {property.type}
                          </span>
                        </div>
                        {property.featured && (
                          <div className="absolute top-4 right-4">
                            <span className="bg-yellow text-black px-3 py-1 rounded-full text-xs font-semibold shadow">
                              FEATURED
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-6 flex flex-col gap-2">
                        <h3 className="text-xl font-bold mb-1 text-gray-900 tracking-tight">
                          {property.title}
                        </h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span className="text-sm font-medium">
                            {property.location}
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Bed className="w-4 h-4 mr-1 text-teal-700" />
                            <span>{property.beds} Bed</span>
                          </div>
                          <div className="flex items-center">
                            <Bath className="w-4 h-4 mr-1 text-teal-700" />
                            <span>{property.baths} Bath</span>
                          </div>
                          <div className="flex items-center">
                            <Square className="w-4 h-4 mr-1 text-teal-700" />
                            <span>{property.sqft} Plot</span>
                          </div>
                          {/* Example: Kitchens, Drawing/Dining */}
                          {property.kitchens && (
                            <div className="flex items-center">
                              <span className="font-medium">
                                {property.kitchens} Kitchen
                              </span>
                            </div>
                          )}
                          {property.drawingDining && (
                            <div className="flex items-center">
                              <span className="font-medium">
                                {property.drawingDining} Drawing/Dining
                              </span>
                            </div>
                          )}
                        </div>
                        <div className="flex w-full justify-between items-center">
                          {/* Islamabad Link Branding at the bottom */}
                          <div className="flex items-center gap-2 px-3 py-2 rounded-lg border">
                            <img
                              src="/Logo.png"
                              className="w-5 h-5"
                              alt="Islamabad Link Logo"
                            />
                            <span className="text-sm font-bold text-teal-900">
                              Islamabad Link
                            </span>
                          </div>
                          <button
                            className="bg-yellow text-black font-bold px-6 py-2 rounded-lg"
                            onClick={() => openPropertyModal(property)}
                          >
                            See More
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Custom Navigation Buttons - must be outside Swiper for Swiper to find them */}
              <button
                className="custom-swiper-prev hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 text-md text-black p-3 rounded-full cursor-pointer bg-yellow font-bold shadow-lg"
                tabIndex={0}
                aria-label="Previous slide"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                className="custom-swiper-next hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 text-md text-black p-3 rounded-full cursor-pointer bg-yellow font-bold shadow-lg"
                tabIndex={0}
                aria-label="Next slide"
                style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.12)" }}
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>

        {/* Custom Modal */}
        {selectedProperty && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-teal-900/70 backdrop-blur-md transition-all duration-300">
            <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[95vh] overflow-y-auto shadow-2xl relative scrollbar-hide">
              <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; } .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }`}</style>
              {/* Close Button */}
              <button
                onClick={closePropertyModal}
                className="absolute top-6 right-6 text-black p-3 rounded-full cursor-pointer bg-yellow font-bold shadow-lg z-20"
                aria-label="Close"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Main Property Image with Logo Overlay */}
              <div className="relative w-full h-64 md:h-80 rounded-t-3xl overflow-hidden shadow-lg">
                <img
                  src={selectedProperty.image || "/placeholder.svg"}
                  alt={selectedProperty.title}
                  className="w-full h-full object-cover"
                />
                {/* Logo Overlay */}
                <div className="absolute bottom-4 left-4 flex items-center gap-3 bg-teal-800/20 backdrop-blur-md px-4 py-2 rounded-xl shadow-md">
                  <img
                    src="/Logo.png"
                    className="w-10 h-10"
                    alt="Islamabad Link Logo"
                  />
                  <span className="text-xl font-bold pt-2 text-white">Islamabad Link</span>
                </div>
              </div>

              {/* Modal Content */}
              <div className="px-8 py-6">
                {/* Title & Location */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      {selectedProperty.title}
                    </h2>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span className="text-md">
                        {selectedProperty.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-4 md:mt-0">
                    {selectedProperty.featured && (
                      <span className="bg-yellow text-black px-4 py-1 rounded-full text-xs font-semibold shadow">
                        FEATURED
                      </span>
                    )}
                    <span className="bg-teal-800 text-white px-4 py-1 rounded-full text-xs font-semibold shadow">
                      {selectedProperty.type}
                    </span>
                  </div>
                </div>

                {/* Property Details & Agent Info */}
                <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
                  <div className="flex gap-6">
                    <div className="flex items-center">
                      <Bed className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="font-medium">
                        {selectedProperty.beds} Beds
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Bath className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="font-medium">
                        {selectedProperty.baths} Baths
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Square className="w-5 h-5 mr-2 text-gray-600" />
                      <span className="font-medium">
                        {selectedProperty.sqft} sqft
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end">

                    {/* Agent Info Minimal Card */}
                    <div className="mt-4 flex items-center gap-3 px-5 py-3 rounded-xl shadow border border-teal-100 bg-white/90">
                      <img
                        src="/Logo.png"
                        className="w-14 h-14 rounded-full border border-teal-200"
                        alt="Islamabad Link Logo"
                      />
                      <div className="flex flex-col">
                        <span className="text-base font-semibold text-gray-900">
                          Syed Aqeel Haider Kazmi
                        </span>
                        <span className="text-xs text-teal-700">CEO</span>
                        <span className="text-sm text-teal-900 font-medium">
                          0336-1012742
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Property Description */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">
                    Property Description
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    This beautiful {selectedProperty.title.toLowerCase()} offers
                    modern living with excellent amenities. Located in a prime
                    area with easy access to transportation, shopping, and
                    dining. The property features {selectedProperty.beds}{" "}
                    spacious bedrooms and {selectedProperty.baths}{" "}
                    well-appointed bathrooms across {selectedProperty.sqft}{" "}
                    square feet of living space.
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex justify-end">
                  <a
                    href="https://wa.me/+923361012742"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm lg:text-md text-black p-3 px-6 rounded-lg cursor-pointer bg-yellow font-bold transition"
                  >
                    Contact Agent
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
