import React, { useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { fabric } from "fabric"
import decorations from './images'
import { datadogRum } from '@datadog/browser-rum';

const Decorate = ({ stage, setStage, photoTaken, photoTakenEncoded, dimensions, toggleAbout, toggleCredit, toggleHelp }) => {

  const opacity = useSpring({ opacity: 1, from: { opacity: 0 } });

  // Set up a persistent canvas
  let canvas;
  let canvasContainer;
  let images;

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

  const keyPress = useCallback((event) => {
    if (event.keyCode === 68) {
      //Do whatever when esc is pressed
      canvas.remove(canvas.getActiveObject());
    }
  }, []);

  let handleDragStart = (e) => {

    [].forEach.call(images, function (img) {
      img.classList.remove('img_dragging');
    });
    e.target.classList.add('img_dragging');
  }

  let handleDragOver = (e) => {
    if (e.preventDefault) {
      e.preventDefault();
    }

    e.dataTransfer.dropEffect = 'copy';
    return false;
  }

  let handleDragEnter = (e) => {
    canvasContainer.classList.add('over');
  }

  let handleDragEnd = (e) => {
    // this/e.target is the source node.
    [].forEach.call(images, function (img) {
      img.classList.remove('img_dragging');
    });
  }

  let getFileName = (path) => {
    return path.match(/([^/]+)\.[\w\d]+$/)[1];
  }

  let handleDragLeave = (e) => {
    canvasContainer.classList.remove('over');
  }

  let handleDrop = (e) => {
    e.preventDefault();

    var img = document.querySelector('#decoration-container img.img_dragging').src;

    let imgSelect = getFileName(img);

    datadogRum.addAction('decorate', {
      decorate: {
        decoration: imgSelect,
        type: 'dragged'
      },
    });

    fabric.util.loadImage(img, function (img) {
      var droppedImage = new fabric.Image(img, {
        left: e.layerX,
        top: e.layerY,
        width: img.width,
        height: img.height,
      });
      canvas.add(droppedImage);
      canvas.renderAll();
    });

    return false;
  }

  React.useEffect(() => {
    document.addEventListener("keydown", keyPress, false);

    images = window.document.querySelectorAll('#decoration-container img');
    [].forEach.call(images, function (img) {
      img.addEventListener('dragstart', handleDragStart, false);
      img.addEventListener('dragend', handleDragEnd, false);
    });

    canvasContainer = document.getElementById('decorateCanvas');
    canvasContainer.addEventListener('dragenter', handleDragEnter, false);
    canvasContainer.addEventListener('dragover', handleDragOver, false);
    canvasContainer.addEventListener('dragleave', handleDragLeave, false);
    canvasContainer.addEventListener('drop', handleDrop, false);


    // This blog post helped me solve how to keep the aspect ratio of the canvas the same as the image https://prcode.co.uk/2018/04/20/keeping-an-images-ratio-on-resize-in-javascript/
    let widthOnePercent = dimensions.width / 100,
      heightOnePercent = dimensions.height / 100,
      imageCurrentWidth = document.getElementById('decorateCanvas').clientWidth,
      imageCurrentPercent = imageCurrentWidth / widthOnePercent,
      imageNewHeight = heightOnePercent * imageCurrentPercent;

    canvas = new fabric.Canvas("my-fabric-canvas", {
      preserveObjectStacking: true,
      width: imageCurrentWidth,
      height: imageNewHeight,
      enableRetinaScaling: false
    });
    
    fabric.Image.fromURL(photoTaken, (photoTaken) => {
      canvas.setBackgroundImage(photoTaken, canvas.renderAll.bind(canvas), {
        // should the image be resized to fit the container?
        backgroundImageStretch: false,
        scaleX: canvas.width / photoTaken.width,
        scaleY: canvas.height / photoTaken.height
      })
    }
    )
  }, [canvas]);

  // These two functions are equivalent, just sharing how to arrow-syntax for fun
  const decorateImage = (url) =>
    fabric.Image.fromURL(url, (oImg) => {
      let imageSelect = getFileName(url);

      canvas.add(oImg);
      datadogRum.addAction('decorate', {
        decorate: {
          decoration: imageSelect,
          type: 'click'
        },
      });
    }
    );

    const decorateSVG = (url) =>
    fabric.loadSVGFromURL(url, (objects, options) => {
      let imageSelect = getFileName(url);

      var obj = fabric.util.groupSVGElements(objects, options);
      canvas.add(obj).renderAll();
      
      datadogRum.addAction('decorate', {
        decorate: {
          decoration: imageSelect,
          type: 'click'
        },
      });
    }
    );


  return (
    <animated.div style={opacity} className="decorate-page wrapper">
      <div className="main-container">
        <div className="title">
          <div className="pull-right">
            {/* Commented out for later in case I want to use buttons, but it doesn't seem accessible or reasonable at the current moment<button class="minimize"><span class="fa fa-minus">-</span></button>
            <button class="expand"><span class="fa fa-square-o"></span></button>
            <button class="times"><span class="fa fa-times">x</span></button> */}
          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
        <div className="container-inner">
          <div id="decorateCanvas">
            <canvas id="my-fabric-canvas" width="500" height="500" />
          </div>
        </div>
        <div className="statusbar">
          <div className="left">made by <a rel="noopener noreferrer" href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
      <div className="main-container secondary window">
        <div className="title">
          <div className="pull-right">
          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
       
        <div className="container-inner decoration-container">
        <a href="http://www.purrybooth.com" alt="landing page"><img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        </a>
          <p>Let's decorate! Click or drag stickers to add to canvas & scroll down for more. Once sticker is on the photo you can click on it to resize, rotate, and drag it around to place it where you'd like. To remove a sticker or change the order it shows in, make sure it's highlighted and select any of the following: </p>
          <img
            src="images/buttons/remove.png"
            alt="remove"
            className="toolbar remove"
            onClick={() => {
              canvas.remove(canvas.getActiveObject());
            }}
          ></img>

          <img
            src="images/buttons/move-to-top.png"
            alt="move-to-top"
            className="toolbar z-index"
            onClick={() => {
              canvas.bringToFront(canvas.getActiveObject());
            }}
          ></img>
          <img
            src="images/buttons/send-to-back.png"
            alt="send to back"
            className="toolbar z-index"
            onClick={() => {
              canvas.sendToBack(canvas.getActiveObject());
            }}
          ></img>
          <div id="decoration-container">

            {decorations.map((decoration, i) => {

              let decorationUrl = 'images/' + decoration + '.png',
                decorationAlt = decoration.replace(/-/g, ' ');
              return (
                <img
                  className="decoration"
                  src={decorationUrl}
                  alt={decorationAlt}
                  key={decorationAlt}
                  draggable={true}
                  onClick={e => decorateImage(e.target.src)}
                ></img>
              )
            })}
          </div>
          <p> there's more stickers and frames, scroll in the div above :)</p>

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
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Decorate