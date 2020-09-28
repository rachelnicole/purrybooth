import React, {Component} from 'react'
import { useSpring, animated } from 'react-spring'
import Webcam from "react-webcam";

import './photo.css'

const videoConstraints = {
  width: 800,
  height: 800,
  facingMode: "user"
};

const Photo = ( {setStage} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState("photoSrc");

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef, setImgSrc]);
 
  return (
    <animated.div style={props} className="photo-page">
      <p>this is the Photo page</p>
      
      <p onClick={() => setStage("decorate")}>Go to Decorate Page</p>
      <Webcam
        audio={false}
        height={600}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={600}
      />
      <button onClick={capture}>Capture photo</button>
      {imgSrc && (
        <img
          src={imgSrc}
        />
      )}
    </animated.div>
  );
};



export default Photo
