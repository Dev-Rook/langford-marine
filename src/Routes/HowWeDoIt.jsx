import React from 'react'
import "../Styles/Global.scss"

import Hero from '../Sections/Hero'
import HwdoiIntro from '../Sections/HwdoiIntro'
import HwdoiItem from '../Components/HwdoiItem'

const HowWeDoIt = () => {
  return (
    <div className={"Page"}>
      <Hero />
      <HwdoiIntro />
      <HwdoiItem />
    </div>
  )
}

export default HowWeDoIt