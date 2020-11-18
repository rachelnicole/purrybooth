import React from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"

const Decorate = ({ stage, setStage, photoTaken, photoTakenEncoded, dimensions }) => {

  const opacity = useSpring({ opacity: 1, from: { opacity: 0 } });

  // Set up a persistent canvas
  let canvas;

  const clearCanvas = () => {

    canvas.discardActiveObject().renderAll();
    
    updateState();
    
  }

  const updateState = () => {
    const filteredImage = document.getElementById('my-fabric-canvas'),
    dataURL = filteredImage.toDataURL();

    photoTakenEncoded(dataURL);

    setStage("share");

  }

  React.useEffect(() => {
    canvas = new fabric.Canvas("my-fabric-canvas");
    canvas.enableRetinaScaling = false;
    canvas.setDimensions({
      width: dimensions.width,
      height: dimensions.height
    });
    console.log(dimensions)
  }, [canvas]);


  const addBackground = (photoTaken) => {
    console.log(photoTaken)
    fabric.Image.fromURL(photoTaken, (photoTaken) =>
      canvas.setBackgroundImage(photoTaken, canvas.renderAll.bind(canvas), {
        // should the image be resized to fit the container?
        backgroundImageStretch: false,
        scaleX: canvas.width / photoTaken.width,
        scaleY: canvas.height / photoTaken.height
      })
    )
  }
    

  const removeItem = () => {
    let object = canvas.getActiveObject();
    let remove = canvas.discardActiveObject();
    // if (!object){
    //   alert('Please select the element to remove');
    //   return '';
    // }
    canvas.discardActiveObject()
  }

  addBackground(photoTaken)

  // These two functions are equivalent, just sharing how to arrow-syntax for fun
  const decorateImage = (url) =>
    fabric.Image.fromURL(url, (oImg) =>
      canvas.add(oImg)
    );

  return (
    <animated.div style={opacity} className="decorate-page">
      <div className="main-container">
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
          <p>Let's Decorate:</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              clearCanvas()
            }}>
            Let's Share!
          </button>
          <div id="decorateCanvas">
            <canvas id="my-fabric-canvas" width="500" height="500" />
          </div>
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
        <div className="container-inner decoration-container">
          <p>Let's decorate:</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              removeItem()
            }}>
            Remove Active Object
          </button>
          <img
            className="decoration"
            src="images/panda_ears.png"
            alt="panda bear ears"
            onClick={e => decorateImage(e.target.src)}
          ></img>
          <img
            className="decoration"
            src="images/cat-ears.png"
            alt="cat ears"
            onClick={e => decorateImage(e.target.src)}
          ></img>
          <img
            className="decoration"
            src="images/sparkles.png"
            alt="sparkles"
            onClick={e => decorateImage(e.target.src)}
          ></img>
          <img
            className="decoration"
            src="images/devil.png"
            alt="devil horns"
            onClick={e => decorateImage(e.target.src)}
          ></img>

        </div>
        <div className="statusbar">
          <div className="left">3 object(s)</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Decorate