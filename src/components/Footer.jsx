export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="mx-auto bg-teal-800 text-white">
      <div className="p-4 text-center">
        <a href="#" className="flex flex-col items-center mb-3">
          <img
            src="/Logo.png"
            className="md:w-10 md:h-10 w-8 h-8"
            alt="Islamabad Link Logo"
          />
          <span>Islamabad Link</span>
        </a>
        <div className="flex items-center justify-center gap-2 flex-wrap">
          <span>&copy; {currentYear}</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}
