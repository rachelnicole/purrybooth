import React from 'react'
import ReactDOM from 'react-dom'
import { datadogRum } from '@datadog/browser-rum'
import { datadogLogs } from '@datadog/browser-logs'
import App from './App'

datadogLogs.init({
  clientToken: process.env.DD_LOGGING_TOKEN,
  site: 'datadoghq.com',
  forwardErrorsToLogs: true,
  sessionSampleRate: 100,
})

datadogRum.init({
  applicationId: process.env.REACT_APP_APP_ID,
  clientToken: process.env.REACT_APP_CLIENT_TOKEN,
  site: 'datadoghq.com',
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