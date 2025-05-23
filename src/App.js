// import logo from './logo.svg'; // this was a picture
import './App.css';
import React, { useState } from 'react'; //imrs
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"





function App() 
{
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  // const [theme, setTheme] = useState('light'); // multiple modes


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



  const changeTheme = (newTheme) => {
    setMode(newTheme);

    if (newTheme === 'light')
    {
      document.body.style.backgroundColor = 'white';
      document.body.style.textColor = "black";
      showAlert("light mode has been enabled", "success");
    }
    else if (newTheme === "dark")
    {
      document.body.style.backgroundColor = 'rgb(74, 74, 74)';
      document.body.style.textColor = "white";
      showAlert("dark mode has been enabled", "success");
    }
    else if (newTheme === "blue")
    {
      document.body.style.backgroundColor = 'rgb(44, 32, 117)';
      document.body.style.textColor = "white";
      showAlert("blue mode has been enabled", "success");
    }
    else if (newTheme === "green")
    {
      document.body.style.backgroundColor = 'rgb(45, 118, 66)';
      document.body.style.textColor = "white";
      showAlert("green mode has been enabled", "success");
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
      <Router> 
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} changeTheme={changeTheme}/>
        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/" element={<TextForm changeTheme={changeTheme} showAlert={showAlert} heading="ENTER THE TEXT TO ANALYZE" mode={mode} />}/>
            <Route exact path="/about" element={<About mode={mode}/>} />
          </Routes>
        </div>
      </Router> 
    </>
  );
}

export default App;