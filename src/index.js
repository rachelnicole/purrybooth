import React from 'react'
import ReactDOM from 'react-dom'
import { datadogRum } from '@datadog/browser-rum'
import App from './App'

datadogRum.init({
  applicationId: process.env.APP_ID,
  clientToken: process.env.CLIENT_TOKEN,
  site: 'datadoghq.com',
//  service: 'my-web-application',
//  env: 'production',
//  version: '1.0.0',
  sampleRate: 100,
  trackInteractions: true
});


ReactDOM.render(<App />, document.getElementById('root'))