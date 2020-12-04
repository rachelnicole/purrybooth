import React from "react";
import { useSpring, animated } from 'react-spring'
import ImageUploader from "react-images-upload";

const Upload = ({ stage, setStage, photoTakenEncoded, setDimensions, toggleAbout, toggleCredit, toggleHelp }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });


  const [imgSrc, setImgSrc] = React.useState(null);


  const onDrop = React.useCallback((picture, pictures) => {
    setImgSrc(pictures);
    photoTakenEncoded(pictures);
  }, [photoTakenEncoded]);

  const calculateImage = () => {
    const imageUploaded = document.querySelector('.photoPreview');

    const image = {
        width: imageUploaded.naturalWidth,
        height: imageUploaded.naturalHeight
    };
    setDimensions(image);
  }


  return (
    <animated.div style={props} className="upload-page wrapper">
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
          imgExtension={[".jpg", ".gif", ".png", ".gif", ".jpeg"]}
          maxFileSize={5242880}
        />
      </div>
      <div className="statusbar">
      <div className="left">made by <a rel="noopener noreferrer" href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
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
        <div className="container-inner upload-container">
  
        <img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        <p>Please choose a photo to work with, if you don't like the first you've chosen, just select another.</p>
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

export default Upload;