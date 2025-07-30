import { Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`text-white fixed left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "top-[10px]" : "top-0"
      }`}
    >
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .nav-link {
          position: relative;
          display: inline-block;
          width: max-content;
        }
        .nav-link::before {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 2px;
          background: #e7c873;
          transition: width 0.3s cubic-bezier(.4,0,.2,1);
        }
        .nav-link:hover::before, .nav-link.active::before {
          width: 100%;
        }
      `}</style>
      <div
        className={`
          ${scrolled ? "w-[90%] py-4 bg-teal-800/30 backdrop-blur-xl shadow-xl" : "w-full pt-4 bg-teal-800"}
          transition-all duration-300 mx-auto px-6 rounded-xl`}
      >
        <div className={`flex items-center justify-between ${scrolled ? "flex-row" : ""}`}>
          {/* Logo */}

          <a href="#" className={`${scrolled ? "text-white flex flex-row items-center" : "flex flex-nl items-center"} gap-2 transition`}>
            <img src="/Logo.png" className="md:w-10 md:h-10 w-8 h-8" alt="" />
            <h1 className={`${scrolled ? "pt-3 hidden md:block" : "ps-3"} md:text-lg font-bold`}>Islamabad Link</h1>
          </a>

          {/* Desktop Navigation */}
          <nav className={`hidden md:flex items-center space-x-10 ${scrolled ? "text-white" : "text-white"}`}>
            <a href="#hero" className="nav-link transition-colors">Home</a>
            <a href="#about" className="nav-link transition-colors">About</a>
            <a href="#properties" className="nav-link transition-colors">Properties</a>
          </nav>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/+923361012742"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-sm lg:text-md p-3 px-5 rounded-lg cursor-pointer bg-yellow font-bold ${scrolled ? "text-black" : "text-black"}`}
            >
              Contact Us
            </a>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-2 mt-4 border-t border-teal-700">
            <div className="flex flex-col space-y-4">
              <a href="#hero" className="nav-link transition-colors">Home</a>
              <a href="#about" className="nav-link transition-colors">About</a>
              <a href="#properties" className="nav-link transition-colors">Properties</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
