import React from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"

// this was very helpful in figuring out how to get fabric in react https://codesandbox.io/s/react-fabric-example-87hh4


const Decorate = ( {stage, setStage, photoTaken, photoTakenEncoded}) => {
  const props = useSpring({opacity: 1, from: {opacity: 0}});
  
  const [decorateImage, setDecorateImage] = React.useState(null);

  React.useEffect(() => {
    const canvas = new fabric.Canvas("my-fabric-canvas");

    const rect = new fabric.Rect({
      width: 50,
      height: 50,
      fill: "blue",
      angle: 10,
      top: 20,
      left: 20
    });
    const textbox = new fabric.Textbox("Click on the Rectangle to move it.", {
      fontSize: 20,
      left: 50,
      top: 100,
      width: 200
    });
    

    fabric.Image.fromURL(decorateImage, function(oImg) {
      canvas.add(oImg);
    });
    

    canvas.add(textbox);
    canvas.add(rect);

    // UseEffect's cleanup function
    return () => {
      canvas.dispose();
    };
  }, [decorateImage, setDecorateImage]);

  return (
    <animated.div style={props} className="decorate-page">
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
          <p>Add some filters to your photo:</p>
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
          onClick={e => setDecorateImage(e.target.src)}
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
