import React from "react";
import { useSpring, animated } from 'react-spring'
import ImageUploader from "react-images-upload";

const Upload = ({ stage, setStage, photoTakenEncoded }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });


  const [imgSrc, setImgSrc] = React.useState(null);


  const onDrop = React.useCallback((picture, pictures) => {
    console.log(pictures);
    setImgSrc(pictures);
    photoTakenEncoded(pictures);
  }, [photoTakenEncoded]);

  return (
    <animated.div style={props} className="upload-page main-container">
      <div className="title">
        <div className="pull-right">
          {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
          <button class="expand"><span class="fa fa-square-o"></span></button>
          <button class="times"><span class="fa fa-times">x</span></button> */}
        </div>
        <h1><div className="icon-my-computer"></div>{stage}　プリクラ</h1>
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
      {imgSrc && (
          <img
            src={imgSrc} 
            alt="photobooth snapshot"
            className="photoPreview"
          />
        )}
        <ImageUploader
          withIcon={false}
          onChange={onDrop}
          singleImage={true}
          imgExtension={[".jpg", ".gif", ".png", ".gif"]}
          maxFileSize={5242880}
        />
        <button
          type="button"
          className="btn"
          onClick={() => setStage("resize")}
        >
          Resize Photo
        </button>
      </div>
      <div className="statusbar">
        <div className="left">3 object(s)</div>
        <div className="right">&nbsp;</div>
      </div>
    </animated.div>
  );
};

export default Upload;