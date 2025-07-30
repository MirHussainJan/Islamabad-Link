export default function DiscoverSection({ id }) {
  return (
    <section id={id} className="relative py-40 md:py-64 overflow-hidden">
      <div className="absolute inset-0 -z-10 before:content-[''] before:absolute before:inset-0 before:bg-[url('/bg-discover.png')] before:bg-cover before:bg-center before:bg-fixed after:content-[''] after:absolute after:inset-0 after:bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.6)_0%,_rgba(0,0,0,0.40)_100%)] after:pointer-events-none" />
      <div className="container mx-auto px-4 text-center text-white relative z-10">
        <h2 className="text-4xl md:text-4xl lg:text-5xl xl:text-7xl font-bold mb-6">Discover a place you'll love to live</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Get the best villa for you and your family, a place where you can live peacefully
        </p>
          <a
            href="https://wa.me/+923361012742"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm lg:text-md text-black p-3 px-5 rounded-lg cursor-pointer bg-yellow font-bold"
          >
            Contact Us
          </a>
      </div>
    </section>
  )
}
