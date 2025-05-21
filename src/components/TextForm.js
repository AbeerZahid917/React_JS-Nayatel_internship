import React, {useState} from 'react'



export default function TextForm(props) {
    // FUNCTIONS:

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }  

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }  

    const handleCapitalizeClick = ()=>{
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        setText(newText);
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        alert("text copied");

    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }  



    // HOOK / STATE:

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




            <button className="btn btn-secondary mx-2" onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn btn-secondary mx-1" onClick={handleDownClick}>
                Convert to lowercase
            </button>
            <button className="btn btn-secondary mx-1" onClick={handleCapitalizeClick}>
                Convert the first letter of each word to capital
            </button>
            <button className="btn btn-secondary mx-1" onClick={handleClearClick}>
                Clear text
            </button>
             <button className="btn btn-secondary mx-1" onClick={handleCopyClick}>
                Copy text
            </button>
        </div>


        <div className="container my-2">
            <h3> Your text summary </h3>
            <p> {text.split(" ").length} words </p>
            <p> {text.length} characters </p>
            <p> {0.008 * text.split(" ").length} Minute read </p>

            <h3> Preview </h3>
            <p>
                {text}
            </p>
        </div>
        </>
    )
}
