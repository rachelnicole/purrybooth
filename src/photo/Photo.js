import React from 'react'
import { useSpring, animated } from 'react-spring'
import Webcam from "react-webcam";

import './photo.css'

const videoConstraints = {
  width: 600,
  height: 600,
};

const Photo = ( {setStage, photoTakenEncoded} ) => {
  
  // this is the react-spring controls for fading in on load
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  const webcamRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const capture = React.useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    photoTakenEncoded(imageSrc);
  }, [webcamRef, setImgSrc]);
 
  return (
    <animated.div style={props} className="photo-page">
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
          src={imgSrc}
        />
      )}
    </animated.div>
  );
};



export default Photo
