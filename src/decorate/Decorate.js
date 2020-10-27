import React from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"

// this was very helpful in figuring out how to get fabric in react https://codesandbox.io/s/react-fabric-example-87hh4


const Decorate = ( {stage, setStage, photoTaken, photoTakenEncoded, ...props}) => {
  // I would suggest against calling a variable "props", that's sort of reserved.
  const opacity = useSpring({opacity: 1, from: {opacity: 0}});
  // Also note my use of "...props" above. Now there is a variable called props which is
  //   an object that contains anything we didn't destructure above.
  // ex. if you had called this component thusly: <Decorate stage={something} setStage={somethingElse} herp="derp" hoop="doop" />
  //   `props` would equal { herp: 'derp', hoop: 'doop' }
  
  // Set up a persistent canvas
  let canvas;

  React.useEffect(() => {
      canvas = new fabric.Canvas("my-fabric-canvas");
  }, []);


   const addBackground = (photoTaken) => 
     fabric.Image.fromURL(photoTaken, (oImg) => 
     canvas.setBackgroundImage(oImg, canvas.renderAll.bind(canvas), {
        // Optionally add an opacity lvl to the image
        backgroundImageOpacity: 0.5,
        // should the image be resized to fit the container?
        backgroundImageStretch: false
    })
   );

   addBackground(photoTaken)

  const testingCrap = (url) => 
    fabric.Image.fromURL(url, (oImg) => 
    canvas.add(oImg)
  );
  
  // These two functions are equivalent, just sharing how to arrow-syntax for fun
  const decorateImage = (url) => 
    fabric.Image.fromURL(url, (oImg) => 
    canvas.add(oImg)
  );

  // function decorateImage (url) {
  //   fabric.Image.fromURL(url, function(oImg) {
  //     canvas.add(oImg);
  //   });
  // }

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
            setStage("share")
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
          src={photoTaken}
          alt="cat ears"
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