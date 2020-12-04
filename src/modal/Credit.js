import React from 'react'
import { useSpring, animated } from 'react-spring'

const Credit = ( {toggleCredit} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div style={props} className="modal wrapper">
    <div className="main-container modal">
        <div className="title">
          <h1><div className="icon-my-computer"></div>Credit プリクラ</h1>
        </div>
        <div className="ie-bar">
          <label htmlFor="url-second" className="label">Address:</label>
          <div className="combo">
          <input id="url-second" readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner landing-container">
          <p>Logo by Rachelle Viola <a rel="noopener noreferrer"  href="https://rachelleviola.com/" target="_blank">Rachelle Viola</a>.</p>
          <p>Some stickers and frames illustrated by Jewels Lei <a rel="noopener noreferrer"  href="http://www.instagram.com/crimebird" target="_blank">http://www.instagram.com/crimebird</a></p>
          <div className="continue">
        <button
          type="button"
          className="btn"
          onClick={() => toggleCredit(false)}
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

export default Credit
