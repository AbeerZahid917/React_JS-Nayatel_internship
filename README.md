# React_JS-Nayatel_internship
Full React JS course + project
React JS can be used to make single page applications
  Single page applications basically receive the html and css file from the server only once and then the javascript takes over. This saves a lot of bandwidth and transmission from the server to the client. Only the API is updated


## Video Two - Starting up + setting up environment:
* check **npm -v** and **npx -v** to make sure that they are installed and update if necessary
* run **npx create-react-app my-app** in the terminal to make a react app for that project/run, cuz otherwise it'll take up unnecessary space
* **npx create-react-app <project_name>**, this creates a project file
* component = template sorta
* props = the details themselves, the properties
* state = what the details are and mean
* App.js makes the interface; basically what it looks like on the internet
* **npm start** runs it so it shows up on google

### Video 4 - JSX
* its basically html, but class is replaced with classname
* tab = tabIndex
* curly brackets for javascript - hello {name (var above in the code)}


import logo from './logo.svg';
import './App.css';
let name = "abeer";

function App() {

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

### Video 6 - Part 2 of textutils project
* after making a folder called components in src, make separate folders for each component
* Begin the file with rfc then tab, that just gives the default template (shortcut)
* **<Navbar title="TextUtils" />** this is the app.js file, basically shows both how to use files or components made and the title part is the prop 
* then in the file with navbar, add props to the arguments and then props.title where the title of the navbar is supposed to go in curly brackets. 
* you can add more stuff and keep modifying the func file to match the changes.
* Dont need to add more arguments just do {props.whatever}
* do not change the props in the function

### Video 7
* <div className="container" > for a centralized whatever this is </div>
* my-3 is for margin
* for button = **button.btn.btn.priamry** then the tab
* for handling events, make an event handler function
* state is just whats written maybe, like text or set text
* to turn to upper case:
      const handleUpClick = ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
      }  
* useState hook helps us make state variables like:
      const [text, setText] = useState("Enter text here"); // hook