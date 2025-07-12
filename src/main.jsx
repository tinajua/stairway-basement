import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css' // This imports Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="pt-20">
      <App />
    </div>  
  </React.StrictMode>,
)
