import React from 'react'
import Styles from "../Styles/Component-Styles/Map.module.scss"

const Map = () => {
  return (
    <div className={Styles.Map}>
<iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=2880%D%20&%20E%20Marine%20Ltd&t=k&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </div>
  )
}

export default Map