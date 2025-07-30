export default function RecentArticles() {
  const articles = [
    {
      id: 1,
      image: "/placeholder.svg?height=200&width=300",
      title: "The 20 Biggest Fintech Companies In America 2021",
      excerpt: "Funding to fintech startups was down about 12% in 2020...",
      date: "Jan 15, 2024",
      author: "Admin",
    },
    {
      id: 2,
      image: "/placeholder.svg?height=200&width=300",
      title: "The Complete Guide to Buying Your First Home",
      excerpt: "Everything you need to know about the home buying process...",
      date: "Jan 12, 2024",
      author: "Admin",
    },
    {
      id: 3,
      image: "/placeholder.svg?height=200&width=300",
      title: "5 Tips for Selling Your Home Quickly",
      excerpt: "Learn the best strategies to sell your property fast...",
      date: "Jan 10, 2024",
      author: "Admin",
    },
    {
      id: 4,
      image: "/placeholder.svg?height=200&width=300",
      title: "Real Estate Investment Trends 2024",
      excerpt: "What to expect in the real estate market this year...",
      date: "Jan 8, 2024",
      author: "Admin",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold">Recent Articles & News</h2>
          <button className="text-teal-600 hover:text-teal-800 font-semibold">Explore All →</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img src={article.image || "/placeholder.svg"} alt={article.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">
                  {article.date} • By {article.author}
                </div>
                <h3 className="text-lg font-semibold mb-3 line-clamp-2">{article.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3">{article.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
