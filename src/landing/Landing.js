import React from 'react'
import { useSpring, animated } from 'react-spring'
import './landing.css'

const Landing = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="landing-page">
      <p>this is the landing page</p>
      <p onClick={() => setStage("layout")}>Go to Layout Page</p>
    </animated.div>
  )
}

export default Landing
