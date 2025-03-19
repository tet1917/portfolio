import React from 'react'
import About from '../features/about/About'
import { LowerHero } from '../components/lowerHero/LowerHero'

function aboutPage() {
  return (
    <>
      <LowerHero en='about' ja='私について' />
      <About />
    </>
  )
}

export default aboutPage
