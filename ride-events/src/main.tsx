import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/app/App.tsx';
import './main.scss';
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
