import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SignUpForm from './SignupForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />

    <SignUpForm></SignUpForm>
  </StrictMode>,
)
