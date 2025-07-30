import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Ali Hassan",
      role: "Designer",
      image: "https://t4.ftcdn.net/jpg/03/68/19/97/360_F_368199710_PLnFixaBph9LVYliDIwAIB5aWxGzAoCP.jpg",
      quote:
        "Searches for multiplexes, property comparisons, and the loan estimator. Works great. The platform has revolutionized how I search for properties and made the entire process seamless and efficient.",
    },
    {
      name: "Fatima Khan",
      role: "Marketing Executive",
      image: "https://img.freepik.com/premium-photo/confident-indian-woman-professional-attire-posing-portrait_875825-96444.jpg",
      quote:
        "The user interface is incredibly intuitive and the customer support team is always responsive. I found exactly what I was looking for without any hassle. Highly recommended for anyone seeking quality real estate services.",
    },
    {
      name: "Ahmad Malik",
      role: "Software Developer",
      image: "https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/image/rZJIMvhmliwmde8a6/000120-40040-7se0a5e7q2_thumb.jpg",
      quote:
        "Outstanding service with comprehensive property listings and detailed market analysis. The advanced search filters helped me find the perfect investment opportunity. The team's expertise made all the difference in my property search.",
    },
    {
      name: "Ayesha Siddique",
      role: "Business Owner",
      image: "https://media.istockphoto.com/id/157419876/photo/indian-businesswoman.jpg?s=612x612&w=0&k=20&c=kZi-YQwWhNXkcL9XnAFNHIWWNJWCJoz1tvyr8g5cfXo=",
      quote:
        "Professional service with excellent market insights and personalized guidance throughout the buying process. The loan calculator and comparison tools were particularly helpful in making informed decisions.",
    },
    {
      name: "Hassan Ali",
      role: "Engineer",
      image: "https://media.istockphoto.com/id/1455343282/photo/portrait-of-an-indian-man.jpg?s=612x612&w=0&k=20&c=v0FUUguRBJLKtsSW2kFwVqqieKfTT7ULKHpe6n7MwvE=",
      quote:
        "Exceptional platform with cutting-edge technology and comprehensive property database. The mobile app is user-friendly and the notification system keeps me updated on new listings matching my criteria.",
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasPartialStar = rating % 1 !== 0;
    const partialStarPercentage = (rating % 1) * 100;

    // Full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="w-4 h-4 fill-[#e7c873] text-yellow" />
      );
    }

    // Partial star
    if (hasPartialStar) {
      stars.push(
        <div key="partial" className="relative">
          <Star className="w-4 h-4 text-gray-300" />
          <div
            className="absolute top-0 left-0 overflow-hidden"
            style={{ width: `${partialStarPercentage}%` }}
          >
            <Star className="w-4 h-4 fill-[#e7c873] text-yellow" />
          </div>
        </div>
      );
    }

    // Empty stars
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-16 lg:py-32 bg-gray-100">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12">
          <div className="mb-6 lg:mb-0">
            <h2 className="text-3xl text-center md:text-left md:text-5xl font-bold text-black mb-2">
              What our customers are
              <br />
              saying us?
            </h2>
          </div>
          <div className="flex space-x-8 justify-center w-full md:w-auto">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black">8K+</div>
              <div className="text-xs md:text-sm text-gray-600">Happy People</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-black">4.68</div>
              <div className="text-xs md:text-sm text-gray-600">Overall rating</div>
              <div className="flex justify-center mt-1">{renderStars(4.6)}</div>
            </div>
          </div>
        </div>
        {/* Infinite scrolling testimonials */}
        <div className="relative overflow-hidden">
          {/* Left vignette */}
          <div className="pointer-events-none absolute top-0 -left-5 h-full w-16 z-10 bg-gray-100" style={{filter: 'blur(5px)'}}></div>
          {/* Right vignette */}
          <div className="pointer-events-none absolute top-0 -right-5 h-full w-16 z-10 bg-gray-100" style={{filter: 'blur(5px)'}}></div>
          <div className="flex animate-scroll relative z-0">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4"
                style={{ width: "340px", height: "210px" }}
              >
                <div
                  className="bg-white p-4 rounded-xl shadow-sm relative h-full w-full flex flex-col gap-1"
                  style={{
                    minWidth: "340px",
                    minHeight: "210px",
                    maxWidth: "340px",
                    maxHeight: "210px",
                  }}
                >
                  <div className="text-6xl text-black  font-serif absolute top-2 right-4">
                    "
                  </div>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-yellow">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-black text-xs leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-4"
                style={{ width: "340px", height: "210px" }}
              >
                <div
                  className="bg-white p-4 rounded-lg shadow-sm relative h-full w-full flex flex-col gap-1"
                  style={{
                    minWidth: "340px",
                    minHeight: "210px",
                    maxWidth: "340px",
                    maxHeight: "210px",
                  }}
                >
                  <div className="text-6xl text-black font-serif absolute top-2 right-4">
                    "
                  </div>
                  <div className="flex items-center mb-4">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-yellow">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-black text-xs leading-relaxed">
                    {testimonial.quote}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
