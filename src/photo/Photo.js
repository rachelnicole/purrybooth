import React from 'react'
import { useSpring, animated } from 'react-spring'
import Webcam from "react-webcam";

const videoConstraints = {
  width: 600,
  height: 600,
};

const Photo = ({ stage, setStage, photoTakenEncoded }) => {

  // this is the react-spring controls for fading in on load
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    photoTakenEncoded(imageSrc);
  }, [webcamRef, setImgSrc, photoTakenEncoded]);

  return (
    <animated.div style={props} className="photo-page main-container">
      <div class="title">
        <div class="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div class="icon-my-computer"></div> {stage}</h1>
      </div>
      <ul class="toolbar">
        <li><u>F</u>ile</li>
        <li><u>E</u>dit</li>
        <li><u>V</u>iew</li>
        <li><u>H</u>elp</li>
      </ul>
      <div class="container-inner">
        <p>this is the Photo page</p>

        <p onClick={() => setStage("decorate")}>Go to Decorate Page</p>
        <Webcam
          audio={false}
          ref={webcamRef}
          videoConstraints={videoConstraints}
          screenshotFormat="image/jpeg"
        />
        <button onClick={capture}>Capture photo</button>
        {imgSrc && (
          <img
            src={imgSrc} alt="photobooth snapshot"
          />
        )}
      </div>
      <div class="statusbar">
        <div class="left">3 object(s)</div>
        <div class="right">&nbsp;</div>
      </div>
    </animated.div>
  );
};



export default Photo
