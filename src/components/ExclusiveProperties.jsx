export default function ExclusiveProperties() {
  return (
    <section className="py-16 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Exclusive Properties</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Large Property Image */}
          <div className="lg:col-span-2 relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Exclusive Property"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold">Luxury Penthouse</h3>
              <p className="text-sm">Manhattan, New York</p>
            </div>
          </div>

          {/* Side Content */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/placeholder.svg?height=180&width=300"
                alt="Property Interior"
                className="w-full h-44 object-cover rounded-lg"
              />
            </div>

            <div className="bg-yellow-500 text-black p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">25% Discount</h3>
              <p className="text-sm mb-4">Make your first purchase and get 25% discount</p>
              <button className="bg-black text-white px-4 py-2 rounded font-semibold">Get Discount</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
