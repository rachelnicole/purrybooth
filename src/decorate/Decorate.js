import React from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"
import decorations from './images'

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

    // This blog post helped me solve how to keep the aspect ratio of the canvas the same as the image https://prcode.co.uk/2018/04/20/keeping-an-images-ratio-on-resize-in-javascript/

    let widthOnePercent = dimensions.width / 100,
      heightOnePercent = dimensions.height / 100,
      imageCurrentWidth = document.getElementById('decorateCanvas').clientWidth,
      imageCurrentPercent = imageCurrentWidth / widthOnePercent,
      imageNewHeight = heightOnePercent * imageCurrentPercent;

    console.log(imageCurrentWidth);

    canvas.setDimensions({
      width: imageCurrentWidth,
      height: imageNewHeight
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
            <input readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner">
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
          <img
            className="purrybooth-logo"
            src="images/logo.png"
            alt="purrybooth-logo"
          />
          <p>Let's decorate (scroll for more):</p>
          <div id="decoration-container">
            {decorations.map((decoration, i) => {
              console.log("Entered");
              let decorationUrl = 'images/' + decoration + '.png',
                decorationAlt = decoration.replace(/-/g, ' ');
              return (
                <img
                  className="decoration"
                  src={decorationUrl}
                  alt={decorationAlt}
                  key={decorationAlt}
                  onClick={e => decorateImage(e.target.src)}
                ></img>
              )
            })}
          </div>

          <button
            type="button"
            className="btn"
            onClick={() => {
              clearCanvas()
            }}>
            Lets Share »
          </button>


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