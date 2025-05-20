# React_JS-Nayatel_internship
Full React JS course + project
React JS can be used to make single page applications
  Single page applications basically receive the html and css file from the server only once and then the javascript takes over. This saves a lot of bandwidth and transmission from the server to the client. Only the API is updated


## Video Two - Starting up + setting up environment:
* check **npm -v** and **npx -v** to make sure that they are installed and update if necessary
* run **npx create-react-app my-app** in the terminal to make a react app for that project/run, cuz otherwise it'll take up unnecessary space
* **npx create-react-app <project_name>**, this creates a project file
* component = template sorta
* props = the details themselves
* state = what the details are and mean
* App.js makes the interface; basically what it looks like on the internet
* **npm start** runs it so it shows up on google

### Video 4 - JSX
* its basically html, but class is replaced with classname
* tab = tabIndex
* curly brackets for javascript - hello {name (var above in the code)}


import logo from './logo.svg'; // this was a picture
import './App.css';

let name = "abeer"; 
function App() 
{
  return (
    <>
      <nav> 
        <li> Home </li>
        <li> About </li>
        <li> Cntact </li>
      </nav>
      <div className="container"> 
        <h1>
          hello {name}
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolores ab fugit. Veritatis, tempora ducimus ad totam vitae quis dignissimos molestiae, recusandae, quo velit repellendus? Fugiat veritatis mollitia pariatur doloribus!
        </p>
      </div>
    </>
    // they seem to be bullet points
    // heading using the var before the func
    // random text generator
    // <div className="blank">lovely</div> // check the .blank in the css file
  );
}
export default App;

