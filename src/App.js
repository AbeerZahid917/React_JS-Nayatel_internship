// import logo from './logo.svg'; // this was a picture
import './App.css';
import React, { useState } from 'react'; //imrs
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';


function App() 
{
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not


  const toggleMode = ()=>{
    if (mode === 'light')
    {
      let newText = 'dark';
      setMode(newText);
      document.body.style.backgroundColor = 'rgb(12, 4, 61)';
    }
    else
    {
      let newText = 'light';
      setMode(newText);
      document.body.style.backgroundColor = 'white';
    }
  }



  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      
      <div className="container">
        <TextForm heading= "ENTER THE TEXT TO ANALYZE" mode={mode}/> 
        <About/>
      </div>
    </>
  );
}

export default App;