export default function PartnerLogos() {
  const partners = ["Google", "Amazon", "Slack", "Shopify", "Spotify", "Zoom"]

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {partners.map((partner, index) => (
            <div key={index} className="text-2xl font-bold text-gray-400">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
