import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from 'react-router-dom'


import Home from './components/pages/home/home'
import Contato from './components/pages/contato/contato'
import Sobre from './components/pages/sobre/sobre'
import Trabalhe from './components/pages/trabalhe/trabalhe'



function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contato' element={<Contato/>} />
        <Route path='/sobre' element={<Sobre/>} /> 
        <Route path='/trabalhe' element={<Trabalhe/>} /> 
      </Routes>

    </Router>


    /*    <Header/>
       <Main/>
       <Section_1/>
       <Section_2/>
       <Footer/> */


  );
}

export default App;
