import React from "react";
import Hero from "./components/Hero"
import FeaturedCategories from "./components/FeaturedCategories"
import FeaturedProperties from "./components/FeaturedProperties"
import WhyChooseUs from "./components/WhyChooseUs"
import DiscoverSection from "./components/DiscoverSection"
import VillaSpotlight from "./components/VillaSpotlight"
import Testimonials from "./components/Testimonials"
import PartnerLogos from "./components/PartnerLogos"
import ExclusiveProperties from "./components/ExclusiveProperties"
import BecomeAgent from "./components/BecomeAgent"
import RecentArticles from "./components/RecentArticles"
import Newsletter from "./components/Newsletter"
import Footer from "./components/Footer"
import Header from "./components/Header";
import RecentHighlights from "./components/RecentArticles";

const App = () => {
  return (
    <div className=" relative">
      <Header/>
      <Hero id="hero" />
      {/* <FeaturedCategories /> */}
      <WhyChooseUs />
      <FeaturedProperties id="properties" />
      <VillaSpotlight />
      <DiscoverSection />
      <BecomeAgent id="about" />
      <Testimonials />
      <RecentHighlights/>
      <Footer />
      {/* <ExclusiveProperties />
      <Newsletter /> */}
    </div>
  )
}

export default App;
