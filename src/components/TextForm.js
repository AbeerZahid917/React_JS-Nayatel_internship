import React, {useState} from 'react'



export default function TextForm(props) {
    // functions
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }  

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }  
    
    const [text, setText] = useState("Enter text here"); // hook
    // setText("this will change the text")

    return (
    <div>
        <h1> {props.heading} </h1> 
        <div className="mb-3">
            {/* <label for="myBox" className="form-label">{props.heading}</label> */}
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>

        <button className="btn btn primary" onClick={handleUpClick}>
            Convert to uppercase
        </button>
    </div>
  )
}
