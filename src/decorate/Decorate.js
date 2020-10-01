import React from 'react'
import { useSpring, animated } from 'react-spring'
import './decorate.css'
import Canvas from "../canvas/Canvas"


const Decorate = ( {setStage, photoTaken, photoTakenEncoded}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="decorate-page">
      <p>this is the Decorate page</p>
      <p onClick={() => setStage("share")}>Go to Share Page</p>

    <Canvas {...{photoTaken}}></Canvas>
    </animated.div>
  )
}

export default Decorate
