import React from 'react'
import "../Styles/Global.scss"

import Hero from '../Sections/Hero'
import ErrorLabel from '../Components/ErrorLabel'

const Error = () => {
  return (
    <div className={"Page"}>
        <Hero />
        <ErrorLabel />
    </div>
  )
}

export default Error