import { useState } from 'react';
import { Play, Calendar, TrendingUp, Eye, Star, Zap, Award } from 'lucide-react';

export default function RecentHighlights() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Get current month and year
  const now = new Date();
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentMonthYear = `${monthNames[now.getMonth()]} ${now.getFullYear()}`;

  const featuredVideo = {
    id: 1,
    src: "/VID-20250806-WA0003.mp4",
    thumbnail: "/1.jpeg",
    title: "Luxury Development Showcase",
    subtitle: "Islamabad Link's Premier Real Estate Collection",
    date: currentMonthYear,
    duration: "3:38",
    views: "8.1K"
  };

  const recentStats = [
    { icon: TrendingUp, label: "Market Growth", value: "28%", color: "from-blue-500 to-cyan-400" },
    { icon: Award, label: "Awards Won", value: "5", color: "from-purple-500 to-pink-400" },
    { icon: Star, label: "Client Rating", value: "4.9", color: "from-orange-500 to-yellow-400" },
    { icon: Eye, label: "Total Views", value: "125K", color: "from-green-500 to-emerald-400" }
  ];

  const recentProjects = [];

  const handleVideoPlay = () => {
    setShowModal(true);
  };

  return (
    <section className="relative py-16 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            Latest Showcase
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover our most recent developments and market insights in this exclusive presentation
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch xl:gap-12">
          {/* Left Stats Panel */}
          <div className="lg:col-span-4 xl:col-span-3 flex items-stretch">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 w-full h-full flex flex-col justify-center">
              <div className="">
                <h3 className="text-2xl text-center font-bold text-slate-800">Recent Activity</h3>
              </div>
              
              <div className="space-y-5">
                {recentStats.map((stat, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="flex items-center justify-between py-5 px-2 rounded-2xl">
                      <div className="flex items-center gap-2">
                        <div className={`p-3 rounded-full bg-yellow`}>
                          <stat.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-slate-700 font-semibold text-lg">{stat.label}</span>
                      </div>
                      <span className="text-2xl font-bold text-slate-800">{stat.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Center Video */}
          <div className="lg:col-span-8 xl:col-span-9 flex items-center justify-center">
            <div className="relative group w-full max-w-4xl xl:max-w-5xl">
              {/* Main Video Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-slate-800 to-slate-900 hover:shadow-3xl transition-all duration-500 w-full">
                <div className="aspect-video relative w-full">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Branding Overlay */}
                  <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex items-center gap-2 sm:gap-3 z-10 bg-teal-800/30 rounded-xl backdrop-blur-md px-2 py-1 sm:px-4 sm:py-2">
                    <img src="/Logo.png" alt="Islamabad Link Logo" className="w-8 h-8 sm:w-12 sm:h-12" />
                    <span className="text-white text-base sm:text-xl font-bold drop-shadow-lg tracking-wide">Islamabad Link</span>
                  </div>
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="group-hover:scale-110 transition-all duration-500 bg-white/90 cursor-pointer backdrop-blur-sm p-4 sm:p-8 rounded-full shadow-2xl hover:bg-white hover:shadow-3xl transform hover:-translate-y-2"
                    >
                      <Play className="w-7 h-7 sm:w-12 sm:h-12 text-yellow ml-1 sm:ml-2" fill="currentColor" />
                    </button>
                  </div>

                  {/* Video Stats */}
                  <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex gap-2 sm:gap-3">
                    <div className="bg-teal-800 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                      {featuredVideo.duration}
                    </div>
                    <div className="bg-teal-800 backdrop-blur-sm text-white px-2 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 sm:gap-2">
                      <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                      {featuredVideo.views}
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <div className="flex items-center gap-1 sm:gap-2 text-yellow text-xs sm:text-sm mb-2 sm:mb-4">
                      <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="font-medium">{featuredVideo.date}</span>
                    </div>
                    <h3 className="text-white text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 leading-tight">{featuredVideo.title}</h3>
                    <p className="text-white/80 text-base sm:text-xl leading-relaxed">{featuredVideo.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute -top-12 right-0 text-white/80 hover:text-white text-xl bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300"
            >
              ×
            </button>
            <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
              <video
                src={featuredVideo.src}
                controls
                autoPlay
                className="w-full h-auto max-h-[80vh]"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}