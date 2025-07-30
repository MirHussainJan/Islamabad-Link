export default function FeaturedCategories() {
  const categories = [
    { name: "Houses", image: "/placeholder.svg?height=200&width=300" },
    { name: "Apartments", image: "/placeholder.svg?height=200&width=300" },
    { name: "Office", image: "/placeholder.svg?height=200&width=300" },
    { name: "Villa", image: "/placeholder.svg?height=200&width=300" },
    { name: "Loft", image: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <h3 className="text-lg font-semibold text-center">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
