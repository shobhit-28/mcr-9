import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { VideoHandler } from './context/videoContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <VideoHandler>
        <App />
      </VideoHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
