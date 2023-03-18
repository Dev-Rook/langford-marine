import React from 'react'
import "../Styles/Global.scss"

import Hero from '../Sections/Hero'
import ServiceItem from '../Components/ServiceItem'

const Services = () => {
  return (
    <div className={"Page"}>
        <Hero />
        <ServiceItem />
    </div>
  )
}

export default Services