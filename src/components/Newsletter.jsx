export default function Newsletter() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Up to Date</h2>
        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">Subscribe to our newsletter to receive our weekly feed.</p>

        <div className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
