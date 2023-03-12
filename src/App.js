import { useState } from 'react';
import './App.css';
import Menu from './menu.js';
// import Themechange from './themechage.js';
import TextForm from './TextForm.js';
import Alert from './alert.js';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";



function App() {
  const [modeValue, setmode] = useState('light');
  const [alert, setalert] = useState(null);
 
  const showalert =(message,type)=>{
    setalert({
      messg: message,
      type: type
    });
    setTimeout(() => {
      setalert(null);
    }
   ,3000);
  }
  
  const changemode = () =>{
    if(modeValue === 'dark'){
    setmode('light');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    showalert('Light Mode Enabled', 'success');
    }else{
      setmode('dark');
      document.body.style.backgroundColor='gray';
      document.body.style.color='white';
      showalert('Dark Mode Enabled', 'success');
    }
  }
  return (
    <Router>

   <Menu title="Text Editor" mode={modeValue} changemode={changemode}/>
   <Alert mesg={alert}/>

   <div className="mt-4 container">
   <Routes>
          {/* <Route exact path="/About" element={ <Themechange/>}/> */}
          <Route exact path="/Home" element={<TextForm showalert={showalert} mode={modeValue}/>}/>
          <Route exact path="/" element={<TextForm showalert={showalert} mode={modeValue}/>}/>
  </Routes>
</div>
</Router>
    );
}

export default App;
