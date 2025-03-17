import React from 'react'
import { LowerHero } from '../component/lowerHero/LowerHero'
import About from '../features/about/About'

function aboutPage() {
  return (
    <>
      <LowerHero en='about' ja='私について' />
      <About />
    </>
  )
}

export default aboutPage
