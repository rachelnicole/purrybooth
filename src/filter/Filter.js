import React from 'react'
import { useSpring, animated } from 'react-spring'
import Canvas from "../canvas/Canvas"
import { datadogRum } from '@datadog/browser-rum';

const Filter = ({ stage, setStage, photoTaken, photoTakenEncoded, filter, setFilter, toggleAbout, toggleCredit, toggleHelp }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  const updateState = () => {
    const filteredImage = document.getElementById('canvas'),
      dataURL = filteredImage.toDataURL();
    photoTakenEncoded(dataURL);
  }

  const effectPipeline = (e) => {
    setFilter(e.target.value)

    datadogRum.addAction('filter', {
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

          </div>
          <h1><div className="icon-my-computer"></div> {stage} プリクラ</h1>
        </div>
        <div className="container-inner">

          <Canvas {...{ photoTaken }} {...{ filter }} className="photoPreview"></Canvas>
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
        
        <div className="container-inner landing-container">
        <a href="http://www.purrybooth.com" alt="landing page"><img
              className="purrybooth-logo"
              src="images/logo.png"
              alt="purrybooth-logo"
            />
        </a>

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
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Filter
