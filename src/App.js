import React from 'react'
import Landing from './landing/Landing'
import Mode from './mode/Mode'
import Photo from './photo/Photo'
import Filter from './filter/Filter'
import Decorate from './decorate/Decorate'
import Share from './share/Share'
import Upload from './upload/Upload'
import About from './modal/About'
import Credit from './modal/Credit'
import Help from './modal/Help'

import './app.scss';

const App = () => {

  const [stage, setStage] = React.useState("landing"),
        [photoTaken, photoTakenEncoded] = React.useState(null),
        [dimensions, setDimensions] = React.useState(null),
        [filter, setFilter] = React.useState(null),
        [about, toggleAbout] = React.useState(false),
        [credit, toggleCredit] = React.useState(false),
        [help, toggleHelp] = React.useState(false);

  return (
    <div>
      {about === true && <About {...{toggleAbout}} /> }
      {credit === true && <Credit {...{toggleCredit}} /> }
      {help === true && <Help {...{toggleHelp}} /> }
      {stage === "landing" && <Landing {...{ setStage }} { ...{stage} } {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "mode" && <Mode {...{ setStage }} { ...{stage} } {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "upload" && <Upload {...{ setStage }} {...{ photoTakenEncoded }} {...{ setDimensions }} { ...{stage} } {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "photo" && <Photo {...{ setStage }} {...{ photoTakenEncoded }} { ...{stage} } {...{ setDimensions }} {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "filter" && <Filter {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }} { ...{stage} } {...{ setFilter }} {...{ filter }} {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "decorate" && <Decorate {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }} {...{ dimensions }} { ...{stage} } {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}} />}
      {stage === "share" && <Share {...{ setStage }} {...{ photoTaken }} { ...{stage} }  {...{toggleAbout}} {...{toggleCredit}}  {...{toggleHelp}}/>}
    </div>
  )}
  
export default App