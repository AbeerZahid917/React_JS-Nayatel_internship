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

## Video 4 - JSX
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

## Video 6 - Part 2 of textutils project
* after making a folder called components in src, make separate folders for each component
* Begin the file with rfc then tab, that just gives the default template (shortcut)
* **Navbar title="TextUtils" />** this is the app.js file, basically shows both how to use files or components made and the title part is the prop 
* then in the file with navbar, add props to the arguments and then props.title where the title of the navbar is supposed to go in curly brackets. 
* you can add more stuff and keep modifying the func file to match the changes.
* Dont need to add more arguments just do {props.whatever}
* do not change the props in the function

## Video 7
* **div className="container" >** for a centralized whatever this is **/div>**
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

## Video 8
* for word count:
    {text.split(" ").length}
* for character count:
    {text.length}
* for minutes to read multiply the characters with 0.008
* preview im code
* to lowercase in code
* mx-2 to create space between the two case buttons (in code btw)
* this to the first line in navbar for a dark colored navbar **nav className="navbar navbar-expand-lg navbar-dark bg-dark">**

## Video 9
* in code buttons:
    * to lowercase
    * to uppercase
    * capitalize first letter
    * clear text
    * copy text

## Video 10
* how to make an about us drop down text sorta thing
* add btn-secondary etc to change the button color
* light mode and dark mode using objects + states 
* remove extra spaces button for text form:
      const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/); // this basically finds all the words that have one or more spaces between them and puts them into an array
        setText(newText.join(" ")) // this then concatenates all the words putting one space between the elements
      }

## Video 12
* expanding on the dark mode thing, where how to toggle between light and dark mode on the navbar + the actual toggle switch thingy
* most of the differences are in APP.js and the textform file, navbar file
* to change the color of the entire documents bg set and change in APP.js, for the rest use their corresponding files

## Video 13 - alerts for every action
* for alert showing and dismissing, first make the alert component and then build the alert func, its pretty simple
* put an extra alert arrow func + use state to make the alert itself
* then pass the show alert func to textform so that it can show the alert when it needs to 

* use props.alert && div> etc so that if its null it doesnt give an error aage
* method to capitalize the first letter in the alert
* to get alert for all the buttons in the text func, pass showAlert to the textform thing in APP.js and in then add the props.showAlert in each func in textform

## Video 14 - multiple page modes and text count issue
* fixed the text issue
* added multiple different options for bg color
* I used a different and more long-winded approach and made a drop-down 
* in video 20, he made squares in the navbar that if you press, the mode changes, a very different implementation, also smaller

## Video 15 - title and icon
* changed the title in index.html in content=
* changed the logo
* get a png image then convert it to a fav icon, then extract from the zip file you get, then add to the public file and update path in the index.html file
* if you want (you probably wont want to) to change the title of the page everytime you use a func then just add document.title = "textutils-dark mode enabled" for eg within that function 

## Video 16 - React router
* why use a react router: we can change a single component keeping everything else the same and no reloading 

* go to react router dom - quick start on the internet
* npm install react router dom

## Video 17
* npm run build basically builds a folder that can be used by its lonesome to run the entire app using the live server
* node and npm etc is necessary for building but just need the build folder to run
* going to github pages and with deploying actions, setting up the stuff, bu first removing all the router related stuff, will put it back later cuz it causes unnecessary masle
* also remove the about page cuz routing issues and stuff
* get rid of link from the navbar file too

* then go to deployment create react app and then find github pages
* add the link for the homepage thing into the packet json thing, then the script files, and basically follow the steps 
* then run at the end and it should deploy after a bit
* after that reload the github page and go to settings, pages, then deploy from a branch and gh pages, then save and visit site
      https://abeerzahid917.github.io/React_JS-Nayatel_internship/

* if it doesnt work, try clearing the cache and then retrying

## Video 18
* uncommented the commented code
* remove the homepage thing from packet.json and uninstall gh-pages
* run npm run build

## Video 19
* if i ever felt like hosting it on a server or smth; its paid tho

## Video 20
* height component added to the alert file, so that the alert doesnt ruin the template again and again
* also changed the layout of about us (the heading) a little bit
* continuation of if you want your site to be found on the internet
* if the buttons should be disabled when no text then, 
      disabled={text.length===0}
      before classname of the button you want disabled

* also how to completely upload your website to the internet