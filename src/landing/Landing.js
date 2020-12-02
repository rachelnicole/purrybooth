import React from 'react'
import { useSpring, animated } from 'react-spring'

const Landing = ( {stage, setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  return (
    <animated.div style={props} className="landing-page wrapper">
    <div className="main-container">
      <div className="title">
        <div className="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div className="icon-my-computer"></div>{stage}　プリクラ</h1>
      </div>
      <ul className="toolbar">
        <li><u>A</u>bout</li>
        <li><u>C</u>redit</li>
        <li><u>G</u>itHub</li>
        <li><u>H</u>elp</li>
      </ul>
      <div className="ie-bar">
        <label for="url" className="label">Address:</label>
        <div className="combo">
          <input id="url"readOnly value="http://purrybooth.com"></input>
        </div>
      </div>
      <div className="container-inner">
        <p>this is the landing page</p>
        <button
          type="button"
          className="btn"
          onClick={() => setStage("mode")}
        >
          Let's Get Started »
        </button>
      </div>
      <div className="statusbar">
        <div className="left">3 object(s)</div>
        <div className="right">&nbsp;</div>
      </div>
    </div>
    <div className="main-container secondary window">
        <div className="title">
          <div className="pull-right">
            {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
            <button class="expand"><span class="fa fa-square-o"></span></button>
            <button class="times"><span class="fa fa-times">x</span></button> */}
          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
        <div className="ie-bar">
          <label for="url-second" className="label">Address:</label>
          <div className="combo">
          <input id="url-second" readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner landing-container">
        <img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
          

        </div>
        <div className="statusbar">
          <div className="left">3 object(s)</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Landing
