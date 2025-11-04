import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';

const REPO_BASENAME = '/React-Todo-List/';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={REPO_BASENAME}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)