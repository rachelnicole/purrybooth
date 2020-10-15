import React from 'react'
import { useSpring, animated } from 'react-spring'

const Layout = ( {stage, setStage}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="layout-page main-container">
      <div class="title">
        <div class="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div class="icon-my-computer"></div> {stage}　プリクラ</h1>
      </div>
      <ul class="toolbar">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>V</u>iew</li>
        <li><u>H</u>elp</li>
      </ul>
      <div className="ie-bar">
        <div className="label">Address:</div>
        <div className="combo">
          <input spellcheck="false" value="http://itsasecret"></input>
        </div>
      </div>
      <div class="container-inner">
        <p>Let's Share:</p>
        <button
          type="button"
          className="btn"
          onClick={() => setStage("share")}
          role="button"
        >
          Let's Get Started
        </button>
      </div>
      <div class="statusbar">
        <div class="left">3 object(s)</div>
        <div class="right">&nbsp;</div>
      </div>
    </animated.div>
  )
}

export default Layout
