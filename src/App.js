// import logo from './logo.svg'; // this was a picture
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';


function App() 
{
  return (
    <>
      {/* <Navbar/>  */}
      <Navbar title="TextUtils" aboutTexts="About TextUtils" />
      
      <div className="container">
        <TextForm heading= "ENTER THE TEXT TO ANALYZE" /> 
        <About/>
      </div>
    </>
  );
}

export default App;