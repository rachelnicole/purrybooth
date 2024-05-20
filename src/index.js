import React from 'react'
import ReactDOM from 'react-dom'
import { datadogRum } from '@datadog/browser-rum'
import App from './App'

datadogRum.init({
  applicationId: process.env.REACT_APP_APP_ID,
  clientToken: process.env.REACT_APP_CLIENT_TOKEN,
  site: 'purrybooth.com',
  service: 'purrybooth',
  env: 'production',
  // Specify a version number to identify the deployed version of your application in Datadog
  // version: '1.0.0', 
  sessionSampleRate: 100,
  sessionReplaySampleRate: 20,
  trackUserInteractions: true,
  trackResources: true,
  trackLongTasks: true,
  defaultPrivacyLevel: 'allow',
});


ReactDOM.render(<App />, document.getElementById('root'))