import React from 'react'
import PropTypes from 'prop-types' // import for the props
import { Link } from 'react-router-dom';



export default function Navbar(props) 
{
  const getNavMode = ()=>{
    if (props.mode === 'light')
      {
          return {backgroundColor: 'white', color: 'black'};
      }
      else if (props.mode === 'dark')
      {
          return {backgroundColor: 'rgb(29, 29, 29)', color: 'white'};
      }
      if (props.mode === 'blue')
      {
          return {backgroundColor: 'rgb(11, 3, 61)', color: 'white'};
      }
      if (props.mode === 'green')
      {
          return {backgroundColor: 'rgb(3, 43, 14)', color: 'white'};
      }
  }

  const getModeForSearchBox = ()=>{
      if (props.mode === 'light')
      {
          return {backgroundColor: 'white', color: 'black', border: '1px solid black'};
      }
      else if (props.mode === 'dark')
      {
          return {backgroundColor: 'rgb(150, 150, 150)', color: 'white', border: '1px solid white'};
      }
      if (props.mode === 'blue')
      {
          return {backgroundColor: 'rgb(172, 195, 244)', color: 'white', border: '1 px solid white'};
      }
      if (props.mode === 'green')
      {
          return {backgroundColor: 'rgb(135, 203, 153)', color: 'white', border: '1 px solid white'};
      }
  }



  return (
    <nav className={`navbar navbar-expand-lg`} style={getNavMode()}>
      <div className="container-fluid">
        <Link className={`navbar-brand ${props.mode === 'light'? 'text-black': 'text-white'}`} to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${props.mode === 'light'? 'text-gray': 'text-white'}`} aria-current="page" to="/">Home</Link>
              {/* <a className={`nav-link active ${props.mode === 'light'? 'text-black': 'text-white'}`} aria-current="page" href="#">Home</a> */}
            </li>
            <li className="nav-item">
              <Link className= {`nav-link ${props.mode === 'light'? 'text-gray': 'text-white'}`} to="/about">About TextUtils</Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" style={getModeForSearchBox()} type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-outline-${props.mode === 'light'? 'dark': 'light'} me-2`} type="submit">Search</button>
          </form>

          <div className='dropdown mx-2'>
            <button className="btn tbn-primary dropdown-toggle" type="button" id="themeDropDown" data-bs-toggle="dropdown" aria-expanded="false" style={getNavMode()}>
              Theme
            </button>
            <ul className="dropdown-menu" aria-labelledby="themeDropdown">
              <li><button className="dropdown-item" onClick={() => props.changeTheme('light')}>Light</button></li>
              <li><button className="dropdown-item" onClick={() => props.changeTheme('dark')}>Dark</button></li>
              <li><button className="dropdown-item" onClick={() => props.changeTheme('blue')}>Blue</button></li>
              <li><button className="dropdown-item" onClick={() => props.changeTheme('green')}>Green</button></li>
            </ul>
          </div>


          {/* <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
            <label className={`form-check-label`} style={getNavMode()} htmlFor="switchCheckDefault">Enable Dark mode</label>
          </div> */}
        </div>
      </div>
    </nav>

  )
}

Navbar.propTypes  = /* This sets the data type for the props */ 
{
    title: PropTypes.string,  /* Pts */
    aboutTexts: PropTypes.string
}

// if we use proptypes.string.isRequired makes it so that if the prop isnt sent to na cahle then use this
// dont make the default thing if using isRequired

Navbar.defaultProps = /* if no props sent */
{
    title: "set title here",
    aboutTexts: "about text here"
}