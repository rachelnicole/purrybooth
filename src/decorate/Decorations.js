import React from 'react'
import decorations from './images'
import { fabric } from "fabric"

const Decorations = () => {

  let canvas;

  const decorateImage = (url) =>
  fabric.Image.fromURL(url, (oImg) =>
    canvas.add(oImg)
  );

  decorations.map((decoration, i) => {     
    console.log("Entered");
    let decorationUrl = 'images/' + decoration + '.png',
        decorationAlt = decoration.replace(/-/g, ' ');                
    // Return the element. Also pass key     
    return (<img
      className="decoration"
      src={decorationUrl}
      alt={decorationAlt}
      onClick={e => decorateImage(e.target.src)}
    ></img>) 
  })
}

export default Decorations