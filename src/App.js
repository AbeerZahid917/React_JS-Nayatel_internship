// import logo from './logo.svg'; // this was a picture
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
