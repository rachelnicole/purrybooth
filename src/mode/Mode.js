import React from 'react'
import { useSpring, animated } from 'react-spring'
import './mode.css'

const Mode = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="mode-page">
      <p>this is the Mode page</p>
      <p onClick={() => setStage("photo")}>Go to Photo Page</p>
    </animated.div>
  )
}

export default Mode
