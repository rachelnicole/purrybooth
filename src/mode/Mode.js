import React from 'react'
import { useSpring, animated } from 'react-spring'
import './mode.css'

const Mode = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="mode-page main-container">
      <p>this is the Mode page</p>
      <p onClick={() => setStage("upload")}>I want to Upload Photo</p>

      <p onClick={() => setStage("photo")}>I want to use my Camera</p>
    </animated.div>
  )
}

export default Mode
