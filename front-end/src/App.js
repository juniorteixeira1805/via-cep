import React from 'react'
import { Router } from "react-router-dom";
import history from './services/history'

import Routes from './routes/index'
import GlobalStyle from './styles/global'
import { ToastContainer } from 'react-toastify'

function App() {
  return (  
    <>
      <GlobalStyle/>
      <Router history={history}>
        <ToastContainer autoClose={7000} />
        <Routes />
      </Router>
    </>
  )
}

export default App;
