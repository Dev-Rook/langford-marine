import React from 'react'
import { TabTitle } from '../Utilities/TabTitle'
import "../Styles/Global.scss"

import Hero from '../Sections/Hero'
import ErrorLabel from '../Components/ErrorLabel'

const Error = () => {
  TabTitle("D&E | 404")
  return (
    <div className={"Page"}>
        <ErrorLabel />
    </div>
  )
}

export default Error