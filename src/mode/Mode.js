import React from 'react'
import { useSpring, animated } from 'react-spring'

const Mode = ( { stage, setStage, toggleAbout, toggleCredit, toggleHelp } ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})

  return (
    <animated.div style={props} className="mode-page wrapper">
    <div className="main-container">
      <div className="title">
        <div className="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div className="icon-my-computer"></div> {stage}　プリクラ</h1>
      </div>
      <ul className="toolbar">
        <li onClick={() => toggleAbout(true)}><u>A</u>bout</li>
        <li onClick={() => toggleCredit(true)}><u>C</u>redit</li>
        <li className="gh"><a rel="noopener noreferrer"  href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
        <li onClick={() => toggleHelp(true)}><u>H</u>elp</li>
      </ul>
      <div className="container-inner">
        <p>Time to choose whether you'd like to upload one of your own photos, or use your webcam to take a new one. Either way, none of the photos are saved in any way shape or form. :)</p>
        <div className="continue">
        <button
          type="button"
          className="btn"
          onClick={() => setStage("upload")}
        >
          Upload Photo
        </button>

        <button
          type="button"
          className="btn webcamBtn"
          onClick={() => setStage("photo")}
        >
          Use Webcam
        </button>
        </div>
      </div>
      <div className="statusbar">
      <div className="left">made by <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
        <div className="right">&nbsp;</div>
      </div>
    </div>
    <div className="main-container secondary window">
        <div className="title">
          <div className="pull-right">
          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
        <div className="container-inner mode-container">
        <a href="http://www.purrybooth.com" alt="landing page"><img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        </a>
          

        </div>
        <div className="statusbar">
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Mode
