import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './mainCss/index.css'
import './mainCss/root.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
