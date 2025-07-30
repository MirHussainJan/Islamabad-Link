export default function Stats() {
  const stats = [
    { number: "50K", label: "Renters" },
    { number: "10K", label: "Properties" },
    { number: "200+", label: "Daily Completed Transactions" },
  ]

  return (
    <section className="bg-yellow-500 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-black">
              <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
