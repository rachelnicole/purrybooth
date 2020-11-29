import React from 'react'
import { useSpring, animated } from 'react-spring'
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1000,
  height: 1000,
};

const Photo = ({ stage, setStage, photoTakenEncoded, setDimensions }) => {

  // this is the react-spring controls for fading in on load
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    photoTakenEncoded(imageSrc);
  }, [webcamRef, setImgSrc, photoTakenEncoded]);

  const calculateImage = () => {
    const imageUploaded = document.querySelector('.photoPreview');

    const image = {
        width: imageUploaded.naturalWidth,
        height: imageUploaded.naturalHeight
    };
    setDimensions(image);
  }

  return (
    <animated.div style={props} className="photo-page">
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
          <p>this is the Photo page</p>

          <Webcam
            audio={false}
            ref={webcamRef}
            videoConstraints={videoConstraints}
            screenshotFormat="image/jpeg"
          />
          <button onClick={capture}>Capture photo</button>
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
        <div className="container-inner webcam-container">
        <img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
          
          {imgSrc && (
            <img
              className="photoPreview"
              src={imgSrc}
              alt="photobooth snapshot"
            />
          )}
          {imgSrc &&
        <div className="photo-added">
        <p>When you're happy with your photo, go ahead and go to the filter page.</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
            setStage("filter")
            calculateImage()
            }}
          >
            Filters » 
        </button>
        </div>
      }

        </div>
        <div className="statusbar">
          <div className="left">3 object(s)</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  );
};



export default Photo
