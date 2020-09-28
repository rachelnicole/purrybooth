import React, { Component, lazy, useState } from 'react'
import Landing from './landing/Landing'
import Layout from './layout/Layout'
import Mode from './mode/Mode'
import Photo from './photo/Photo'
import Decorate from './decorate/Decorate'
import Share from './share/Share'


const App = () => {
  const [stage, setStage] = React.useState("landing")
  return (
    <div>
      <h1>Photothing</h1>
      {stage === "landing" && <Landing {...{ setStage }}/>}
      {stage === "layout" && <Layout {...{ setStage }}/>}
      {stage === "mode" && <Mode {...{ setStage }}/>}
      {stage === "photo" && <Photo {...{ setStage }}/>}
      {stage === "decorate" && <Decorate {...{ setStage }}/>}
      {stage === "share" && <Share {...{ setStage }}/>}
    </div>
  )}
  
export default App