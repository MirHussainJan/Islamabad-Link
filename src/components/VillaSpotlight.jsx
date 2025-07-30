import { Search, Users, Key, House } from "lucide-react"

export default function RealEstateComponent() {
  return (
    <section className="py-16 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Irregular Grid */}
          <div className="relative">
            <div className="grid grid-cols-6 grid-rows-5 gap-2 h-[700px]">
              {/* First row - Family with keys (4 cols, spans 2 rows) */}
              <div className="col-span-4 row-span-2 relative">
                <div className="relative w-full h-full">
                  <img
                    src="https://img.freepik.com/free-photo/back-view-family-hugging-admiring-their-home_259150-59357.jpg?semt=ais_hybrid&w=740"
                    alt="Family with keys"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'}}></div>
                </div>
              </div>
              {/* Second row first image (3 cols, spans 2 rows) */}
              <div className="col-span-3 row-start-3 row-span-2 relative">
                <div className="relative w-full h-full">
                  <img
                    src="https://media.istockphoto.com/id/1398069511/photo/affectionate-and-loving-mixed-race-family-sitting-together-happy-family-with-two-daughters.jpg?s=612x612&w=0&k=20&c=4fbf7r7dLgn-LrSC7-cKELm4bHjXOh3ctv56t3R1MLw="
                    alt="Happy family"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'}}></div>
                </div>
              </div>
              {/* Third image (4 cols, spans from 3rd to 5th row) */}
              <div className="col-span-3 row-start-3 row-span-3 col-start-4 relative">
                <div className="relative w-full h-full">
                  <img
                    src="/Hello.jpg"
                    alt="Modern house"
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 rounded-xl pointer-events-none" style={{background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 100%)'}}></div>
                </div>
              </div>
            </div>
            
            {/* Absolute positioned label in center */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-lg flex items-center space-x-2 shadow-lg">
              <div className="w-9 h-9 text-black rounded-full flex items-center justify-center">
                <img src="./Logo.png" />
              </div>
              <div className="text-base">
                <div className="font-semibold">Properties For Sell</div>
              </div>
            </div>
          </div>

          {/* Right Side - How it works */}
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <img src="/Logo.png" className="w-10 h-10 md:w-16 md:h-16 drop-shadow" alt="Islamabad Link Logo" />
                <span className="text-2xl md:text-5xl font-extrabold tracking-tight pt-2">Islamabad Link</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-bold mb-4 text-center md:text-left">Find a perfect home</h3>
              <p className="text-gray-600 text-sm md:text-lg leading-relaxed mb-6 md:mb-12 text-center md:text-left">
                Our streamlined process makes finding and purchasing your dream home simple with <span className="text-yellow font-bold">Islamabad Link</span>
              </p>
            </div>
            <div className="space-y-12">
              {/* Find Real Estate */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Search className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-2xl">Find Real Estate</h4>
                  <p className="text-gray-600 text-sm">
                    Browse through our extensive database of premium properties with advanced search filters to find homes that match your exact criteria and budget.
                  </p>
                </div>
              </div>

              {/* Meet Realtor */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-2xl">Meet Realtor</h4>
                  <p className="text-gray-600 text-sm">
                    Connect with our experienced real estate professionals who provide personalized guidance and expert market insights throughout your home buying journey.
                  </p>
                </div>
              </div>

              {/* Take The Keys */}
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                  <Key className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1 text-2xl">Take The Keys</h4>
                  <p className="text-gray-600 text-sm">
                    Complete the seamless closing process with our support team handling all paperwork and legal requirements, then receive your keys to your new home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}