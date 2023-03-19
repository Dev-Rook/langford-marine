import React from 'react'
import {TabTitle} from "../Utilities/TabTitle"
import "../Styles/Global.scss"

import Hero from '../Sections/Hero'
import ServiceItem from '../Components/ServiceItem'

const Services = () => {
  TabTitle("D&E | Services")
  return (
    <div className={"Page"}>
        <Hero />
        <ServiceItem />
    </div>
  )
}

export default Services