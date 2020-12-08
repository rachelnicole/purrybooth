import React from 'react'
import { useSpring, animated } from 'react-spring'

const Share = ({ stage, setStage, photoTaken, toggleAbout, toggleCredit, toggleHelp }) => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } })

  return (
    <animated.div style={props} className="share-page wrapper">
      <div className="main-container">
        <div className="title">
          <div className="pull-right">
          </div>
          <h1><div className="icon-my-computer"></div>{stage}　プリクラ</h1>
        </div>
        <ul className="toolbar">
          <li onClick={() => toggleAbout(true)}><u>A</u>bout</li>
          <li onClick={() => toggleCredit(true)}><u>C</u>redit</li>
          <li className="gh"><a rel="noopener noreferrer" href="https://github.com/rachelnicole/purrybooth" target="_blank"><u>G</u>itHub</a></li>
          <li onClick={() => toggleHelp(true)}><u>H</u>elp</li>
        </ul>
        <div className="container-inner">
          <p>Please right click and save as image, and post with the tag #PurryBooth :)</p>
          <p>See what other people have made on <a rel="noopener noreferrer" href="https://twitter.com/search?q=%23PurryBooth&src=typed_query" target="_blank">Twitter</a> and <a rel="noopener noreferrer" href="https://www.instagram.com/explore/tags/PurryBooth/" target="_blank">Instagram</a></p>
          <p></p>
          {photoTaken && (
            <img
              src={photoTaken}
              alt="photobooth snapshot"
              className="photoPreview"
            />
          )}

        </div>
        <div className="statusbar">
        <div className="left">made by <a rel="noopener noreferrer"  href="http://www.twitter.com/ohhoe" target="_blank">ohhoe</a></div>
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


        </div>
        <div className="statusbar">
          <div className="left">^_^</div>
          <div className="right">&nbsp;</div>
        </div>
      </div>
    </animated.div>
  )
}

export default Share
