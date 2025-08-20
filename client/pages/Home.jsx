import React from 'react'
import Hero from '../src/components/Hero'
import FeaturedSection from '../src/components/FeaturedSection'
import Banner from '../src/components/Banner'
import Testimonial from '../src/components/Testimonial'
import Newsletter from '../src/components/Newsletter'

const Home = () => {
  return (
    <>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonial/>
      <Newsletter/>
    </>
  )
}

export default Home
