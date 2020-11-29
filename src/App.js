import React from 'react'
import Landing from './landing/Landing'
import Mode from './mode/Mode'
import Photo from './photo/Photo'
import Filter from './filter/Filter'
import Decorate from './decorate/Decorate'
import Share from './share/Share'
import Upload from './upload/Upload'
import './app.scss';

const App = () => {

  const [stage, setStage] = React.useState("landing"),
        [photoTaken, photoTakenEncoded] = React.useState(null),
        [dimensions, setDimensions] = React.useState(null),
        [filter, setFilter] = React.useState(null);

  return (
    <div>
      {stage === "landing" && <Landing {...{ setStage }} { ...{stage} }/>}
      {stage === "mode" && <Mode {...{ setStage }} { ...{stage} }/>}
      {stage === "upload" && <Upload {...{ setStage }} {...{ photoTakenEncoded }} {...{ setDimensions }} { ...{stage} }/>}
      {stage === "photo" && <Photo {...{ setStage }} {...{ photoTakenEncoded }} { ...{stage} } {...{ setDimensions }}/>}
      {stage === "filter" && <Filter {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }} { ...{stage} } {...{ setFilter }} {...{ filter }}/>}
      {stage === "decorate" && <Decorate {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }} {...{ dimensions }} { ...{stage} }/>}
      {stage === "share" && <Share {...{ setStage }} {...{ photoTaken }} { ...{stage} } />}
    </div>
  )}
  
export default App