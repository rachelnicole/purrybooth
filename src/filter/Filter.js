import React from 'react'
import { useSpring, animated } from 'react-spring'
import Canvas from "../canvas/Canvas"
import { datadogRum } from '@datadog/browser-rum';

datadogRum.addUserAction('<NAME>', '<JSON_OBJECT>');

const Filter = ({ stage, setStage, photoTaken, photoTakenEncoded, filter, setFilter }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  const updateState = () => {
    const filteredImage = document.getElementById('canvas'),
      dataURL = filteredImage.toDataURL();
    photoTakenEncoded(dataURL);
  }

  const effectPipeline = (e) => {
    setFilter(e.target.value)

    datadogRum.addUserAction('filter', {
      filter: {
          filterName: e.target.value,
      },
    });

  }

  return (
    <animated.div style={props} className="decorate-page wrapper">
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

          <Canvas {...{ photoTaken }} {...{ filter }} className="photoPreview"></Canvas>
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
            <input readOnly value="http://purrybooth.com"></input>
          </div>
        </div>
        <div className="container-inner landing-container">
          <img
            className="purrybooth-logo"
            src="images/logo.png"
            alt="purrybooth-logo"
          />

          <p>Let's add some filters to your photo:</p>
          <select onChange={e => effectPipeline(e)}>
            <option value="none">No Filter</option>
            <option value="greyscale">GreyScale</option>
            <option value="threeDee">3D Glasses</option>
            <option value="oceanic">Oceanic</option>
            <option value="islands">Islands</option>
            <option value="marine">Marine</option>
            <option value="seagreen">Seagreen</option>
            <option value="liquid">Liquid</option>
            <option value="diamante">Diamante</option>
            <option value="radio">Radio</option>
            <option value="twenties">Twenties</option>
            <option value="rosetint">Rosetint</option>
            <option value="mauve">Mauve</option>
            <option value="bluechrome">Blue Chrome</option>
            <option value="vintage">Vintage</option>
            <option value="perfume">Perfume</option>
            <option value="serenity">Serenity</option>
          </select>

          <p>Once you're happy, let's head to the decorate page!</p>
          <button
            type="button"
            className="btn"
            onClick={() => {
              setStage("decorate")
              updateState()
            }}>
            Decorate »
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

export default Filter
