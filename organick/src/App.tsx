// import { useState } from 'react'

import './App.css'
import { AboutUsSection } from './components/about-us/about-us'
import { EcoFriendly } from './components/eco-friendly/eco-friendly'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { HeroSection } from './components/hero/hero-section'
import { NewsSection } from './components/news/news-section'
import { OrganicHighlights } from './components/organic-highlights/organic-highlights'
import { OrganicSection } from './components/organic/organic-section'
import { ProductsSection } from './components/products/products-section'
import { TestimonialSection } from './components/testimonial/testimonial-section'
import { UnderHeroSection } from './components/under-hero/under-hero-section'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <UnderHeroSection />
        <AboutUsSection />
        <OrganicSection />
        <TestimonialSection />
        <ProductsSection />
        <EcoFriendly />
        <OrganicHighlights />
        <NewsSection />
      </main>
      <Footer />
    </>
  )
}

export default App
