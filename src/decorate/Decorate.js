import React, {Component} from 'react'
import { useSpring, animated } from 'react-spring'
import './decorate.css'

const Decorate = ( {setStage}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="decorate-page">
      <p>this is the Decorate page</p>
      <p onClick={() => setStage("share")}>Go to Share Page</p>
    </animated.div>
  )
}

export default Decorate
