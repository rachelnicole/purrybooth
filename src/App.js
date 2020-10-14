import React from 'react'
import Landing from './landing/Landing'
import Layout from './layout/Layout'
import Mode from './mode/Mode'
import Photo from './photo/Photo'
import Decorate from './decorate/Decorate'
import Share from './share/Share'
import Upload from './upload/Upload'


const App = () => {
  const [stage, setStage] = React.useState("landing"),
        [photoTaken, photoTakenEncoded] = React.useState(null);

  return (
    <div>
      <h1>Photothing</h1>
      {stage === "landing" && <Landing {...{ setStage }}/>}
      {stage === "layout" && <Layout {...{ setStage }}/>}
      {stage === "mode" && <Mode {...{ setStage }}/>}
      {stage === "upload" && <Upload {...{ setStage }} {...{ photoTakenEncoded }}/>}
      {stage === "photo" && <Photo {...{ setStage }} {...{ photoTakenEncoded }} />}
      {stage === "decorate" && <Decorate {...{ setStage }} {...{ photoTakenEncoded }} {...{ photoTaken }}/>}
      {stage === "share" && <Share {...{ setStage }} />}
    </div>
  )}
  
export default App