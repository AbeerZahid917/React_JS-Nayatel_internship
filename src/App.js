// import logo from './logo.svg'; // this was a picture
import './App.css';
import React, { useState } from 'react'; //imrs
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';


function App() 
{
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);



  const toggleMode = ()=>{
    if (mode === 'light')
    {
      let newText = 'dark';
      setMode(newText);
      document.body.style.backgroundColor = 'rgb(12, 4, 61)';
      showAlert("dark mode has been enabled", "success");
    }
    else
    {
      let newText = 'light';
      setMode(newText);
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enabled", "success");
    }
  }


  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }




  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert} />

      <div className="container">
        <TextForm showAlert={showAlert} heading= "ENTER THE TEXT TO ANALYZE" mode={mode}/> 
        <About/>
      </div>
    </>
  );
}

export default App;