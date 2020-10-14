import React from 'react'
import { useSpring, animated } from 'react-spring'

const Landing = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="landing-page main-container">
      <p>this is the landing page</p>
      <p onClick={() => setStage("layout")}>Go to Layout Page</p>
    </animated.div>
  )
}

export default Landing
