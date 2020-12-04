import React from 'react'
import { useSpring, animated } from 'react-spring'

const About = ( {toggleAbout} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div style={props} className="modal wrapper">
    <div className="main-container modal">
        <div className="title">
          <h1><div className="icon-my-computer"></div>About プリクラ</h1>
        </div>
        <div className="ie-bar">
          <label htmlFor="url-second" className="label">Address:</label>
          <div className="combo">
          <input id="url-second" readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner landing-container">
          <p>PurryBooth was made by <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">Rachel White</a> who is a creative technologist and currently a Technical Evangelist at Datadog. You can find more of her work here: <a rel="noopener noreferrer"  href="http://www.rachelisaweso.me" target="_blank">http://www.rachelisaweso.me</a> and <a rel="noopener noreferrer"  href="http://www.imcool.online" target="_blank">http://www.imcool.online</a>. 
          All other drawings done by <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">Rachel White</a></p>
          <div className="continue">
        <button
          type="button"
          className="btn"
          onClick={() => toggleAbout(false)}
        >
          close popup
        </button>
        </div>
        
        </div>
        <div className="statusbar">
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default About
