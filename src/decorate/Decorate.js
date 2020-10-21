import React from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"


const Decorate = ( {stage, setStage, photoTaken, photoTakenEncoded}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}}),
        canvas = new fabric.Canvas('decorateCanvas'),
        imgElement = document.getElementById('photoBoothImage'),
        imgInstance = new fabric.Image(imgElement, {
          left:0,
          top: 0
        });

  canvas.add(imgInstance);


  return (
    <animated.div style={props} className="decorate-page main-container">
      <div className="title">
        <div className="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
      </div>
      <ul className="toolbar">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>V</u>iew</li>
        <li><u>H</u>elp</li>
      </ul>
      <div className="ie-bar">
        <div className="label">Address:</div>
        <div className="combo">
          <input readOnly value="http://itsasecret"></input>
        </div>
      </div>
      <div className="container-inner">
        <p>Add some filters to your photo:</p>
        <button
          type="button"
          className="btn"
          onClick={() => {
          setStage("share")
          }}>
          Let's Share!
        </button>
        <div id="decorateCanvas">
        {photoTaken && (
          <img
            src={photoTaken} 
            alt="photobooth snapshot"
            className="photoPreview"
            id="photoBoothImage"
          />
        )}
        </div>
      </div>
      <div className="statusbar">
        <div className="left">3 object(s)</div>
        <div className="right">&nbsp;</div>
      </div>
    </animated.div>
  )
}

export default Decorate
