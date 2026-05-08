import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import App from './App_215.jsx'
//import App from './App_248.jsx'
//import App from './App_253.jsx'
//import App from './App_256.jsx'
//import App from './App_286.jsx'
//import App from './App_mui.jsx'
import App from './components/Chapter11_Context/App.jsx';


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <App/>
  // </StrictMode>
  ,
)
