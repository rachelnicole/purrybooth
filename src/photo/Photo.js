import React from 'react'
import { useSpring, animated } from 'react-spring'
import Webcam from "react-webcam";

const videoConstraints = {
  width: 1000,
  height: 1000,
};

const Photo = ({ stage, setStage, photoTakenEncoded, setDimensions, toggleAbout, toggleCredit, toggleHelp }) => {

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
    const imageUploaded = document.querySelector('.photoPreviewWebcam');

    const image = {
      width: imageUploaded.naturalWidth,
      height: imageUploaded.naturalHeight
    };
    setDimensions(image);
  }

  return (
    <animated.div style={props} className="photo-page wrapper">
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
        <li className="gh"><a rel="noopener noreferrer" href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
        <li onClick={() => toggleHelp(true)}><u>H</u>elp</li>
      </ul>
        <div className="container-inner webcam-main">
          <div className="webcamWrapper">
            <Webcam
              audio={false}
              ref={webcamRef}
              videoConstraints={videoConstraints}
              screenshotFormat="image/jpeg"
              className="webcamBlock"
            />
            {imgSrc && (
              <img
                className="photoPreviewWebcam"
                src={imgSrc}
                alt="photobooth snapshot"
              />
            )}
          </div>
          <button onClick={capture}>Capture photo</button>
        </div>
        <div className="statusbar">
        <div className="left">made by <a rel="noopener noreferrer" href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
      <div className="main-container secondary window">
        <div className="title">
          <div className="pull-right">
          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
        <div className="container-inner webcam-container">
        <a href="http://www.purrybooth.com" alt="landing page"><img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        </a>
          <p>Keep on taking photos until you're happy with the preview to the right of the webcam window.</p>
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
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  );
};



export default Photo
