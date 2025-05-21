import React, {useState} from 'react'



export default function TextForm(props) {
    // functions
    const handleUpClick = ()=>{
        // console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }  

    const handleDownClick = ()=>{
        // console.log("lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }  

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }  
    
    const [text, setText] = useState("Enter text here"); // hook
    // setText("this will change the text")

    return (
        <>
        <div className='container'>
            <h1> {props.heading} </h1> 
            <div className="mb-3">
                {/* <label for="myBox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>

            <button className="btn btn primary mx-2" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn btn primarymx-1" onClick={handleDownClick}>
                Convert to lowercase
            </button>
        </div>
        <div className="container my-2">
            <h2> Your text summary </h2>
            <p> {text.split(" ").length} words </p>
            <p> {text.length} characters </p>
            <p> {0.008 * text.split(" ").length} Minute read </p>

            <h2> Preview </h2>
            <p>
                {text}
            </p>
        </div>
        </>
    )
}
