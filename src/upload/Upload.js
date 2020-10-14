import React from "react";
import { useSpring, animated } from 'react-spring'
import ImageUploader from "react-images-upload";

const Upload = ( {setStage, photoTakenEncoded} ) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});

  const imageRef = React.useRef(null);
  const [imgSrc, setImgSrc] = React.useState(null);

  const onDrop = React.useCallback((pictureFile, picture) => {
    console.log(picture);
    setImgSrc(picture);
    photoTakenEncoded(picture);
  }, [imageRef, setImgSrc]);

  return (
    <animated.div style={props} className="upload-page main-container">
    {imgSrc && (
        <img
          src={imgSrc} alt="photobooth snapshot"
        />
      )}
      <ImageUploader
        withIcon={true}
        onChange={onDrop}
        singleImage={true}
        imgExtension={[".jpg", ".gif", ".png", ".gif"]}
        maxFileSize={5242880}
      />
      <p onClick={() => setStage("decorate")}>Go to Decorate Page</p>
    </animated.div>
  );
};

export default Upload;