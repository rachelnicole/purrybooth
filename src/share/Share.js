import React, {Component} from 'react'
import { useSpring, animated } from 'react-spring'
import './share.css'

const Share = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="share-page">
      <p>this is the Share page</p>
      <p>The end!</p>
    </animated.div>
  )
}

export default Share
