// import logo from './logo.svg'; // this was a picture
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'


function App() 
{
  return (
    <>
      <Navbar title="TextUtils" aboutTexts="About TextUtils" />
      {/* <Navbar/>  */}
    </>
  );
}

export default App;