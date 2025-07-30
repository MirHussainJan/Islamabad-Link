export default function Footer() {
  return (
    <footer className="bg-teal-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LOGO</h3>
            <p className="text-gray-400">We provide full service at every step.</p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Login
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  My account
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">About</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About locations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+1 (555) 123-4567</li>
              <li>info@realestate.com</li>
              <li>
                123 Main Street
                <br />
                New York, NY 10001
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Real Estate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
