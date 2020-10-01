import React from 'react'
import { useSpring, animated } from 'react-spring'
import './layout.css'

const Layout = ( {setStage}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="layout-page">
      <p>this is the layout page</p>
      <p onClick={() => setStage("mode")}>Go to Mode Page</p>
    </animated.div>
  )
}

export default Layout
