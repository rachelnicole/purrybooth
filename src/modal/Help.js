import React from 'react'
import { useSpring, animated } from 'react-spring'

const Help = ( {toggleHelp} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div style={props} className="modal wrapper">
    <div className="main-container modal">
        <div className="title">
          <h1><div className="icon-my-computer"></div>Help プリクラ</h1>
        </div>
        <div className="ie-bar">
          <label htmlFor="url-second" className="label">Address:</label>
          <div className="combo">
          <input id="url-second" readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner landing-container">
          <p>If you have any questions please feel free to reach out to me on twitter at <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">@ohhoe</a> or via email at loveless /at/ gmail</p>
          <div className="continue">
        <button
          type="button"
          className="btn"
          onClick={() => toggleHelp(false)}
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

export default Help
