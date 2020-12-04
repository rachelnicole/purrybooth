import React from 'react'
import { useSpring, animated } from 'react-spring'

const Share = ({ stage, setStage, photoTaken, toggleAbout, toggleCredit, toggleHelp }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props} className="share-page wrapper">
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
        <li onClick={() => toggleAbout(true)}><u>A</u>bout</li>
        <li onClick={() => toggleCredit(true)}><u>C</u>redit</li>
        <li className="gh"><a rel="noopener noreferrer" href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
        <li onClick={() => toggleHelp(true)}><u>H</u>elp</li>
      </ul>
        <div className="ie-bar">
          <label htmlFor="url" className="label">Address:</label>
          <div className="combo">
            <input id="url" readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner">
          <p>Thank you for using PurryBooth! Please right click and save as image, and feel free to tag us in your posts :) #PurryBooth</p>
          <p>See what other people have made on <a rel="noopener noreferrer" href="https://twitter.com/search?q=%23PurryBooth&src=typed_query" target="_blank">Twitter</a> and <a rel="noopener noreferrer" href="https://www.instagram.com/explore/tags/Purr/" target="_blank">Instagram</a></p>
          <p></p>
          {photoTaken && (
            <img
              src={photoTaken}
              alt="photobooth snapshot"
              className="photoPreview"
            />
          )}

        </div>
        <div className="statusbar">
        <div className="left">made by <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
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
          <label htmlFor="url-second" className="label">Address:</label>
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
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Share
