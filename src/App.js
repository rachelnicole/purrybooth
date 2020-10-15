import React from 'react'
import Landing from './landing/Landing'
import Layout from './layout/Layout'
import Mode from './mode/Mode'
import Photo from './photo/Photo'
import Decorate from './decorate/Decorate'
import Share from './share/Share'
import Upload from './upload/Upload'
import './app.scss';

const App = () => {

  const [stage, setStage] = React.useState("landing"),
        [photoTaken, photoTakenEncoded] = React.useState(null);

  return (
    <div>
      {stage === "landing" && <Landing {...{ setStage }} { ...{stage} }/>}
      {stage === "layout" && <Layout {...{ setStage }} { ...{stage} }/>}
      {stage === "mode" && <Mode {...{ setStage }} { ...{stage} }/>}
      {stage === "upload" && <Upload {...{ setStage }} {...{ photoTakenEncoded }} { ...{stage} }/>}
      {stage === "photo" && <Photo {...{ setStage }} {...{ photoTakenEncoded }} { ...{stage} } />}
      {stage === "decorate" && <Decorate {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }} { ...{stage} }/>}
      {stage === "share" && <Share {...{ setStage }} { ...{stage} } />}
    </div>
  )}
  
export default App