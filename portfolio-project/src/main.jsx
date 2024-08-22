import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import emailjs from 'emailjs-com';
emailjs.init(import.meta.env.VITE_EMAILJS_USER_ID);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <main className="p-0"><App /></main>
    
  </StrictMode>,
)
