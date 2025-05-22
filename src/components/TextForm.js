// import { getMouseEventOptions } from '@testing-library/user-event/dist/utils';
import React, {useState} from 'react'



export default function TextForm(props) {
    // FUNCTIONS:

    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    }  

    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    }  

    const handleCapitalizeClick = ()=>{
        let newText = text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        setText(newText);
        props.showAlert("converted to capital", "success");
    }

    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("cleared", "success");
    }

    const handleCopyClick = ()=>{
        navigator.clipboard.writeText(text);
        alert("text copied");
        
        props.showAlert("copied", "success");

    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value)
    }  


    const getMode = ()=>{
        if (props.mode === 'light')
        {
            return {backgroundColor: 'white', color: 'black'};
        }
        else if (props.mode === 'dark')
        {
            return {backgroundColor: 'rgb(74, 74, 74)', color: 'white'};
        }
        if (props.mode === 'blue')
        {
            return {backgroundColor: 'rgb(44, 32, 117)', color: 'white'};
        }
        if (props.mode === 'green')
        {
            return {backgroundColor: 'rgb(45, 118, 66)', color: 'white'};
        }
    }



    const getModeForTextBox = ()=>{
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



    // HOOK / STATE:

    const [text, setText] = useState("Enter text here"); // hook
    // setText("this will change the text")




    return (
        <>
        <div className='container'>
            <h1 style={getMode()}>
                {props.heading} 
            </h1> 

            <div className="mb-3">
                {/* <label for="myBox" className="form-label">{props.heading}</label> */}
                <textarea className="form-control" value={text} onChange={handleOnChange} rows='8' style={getModeForTextBox()}/>
            </div>




            <button className="btn mx-1" style={getModeForTextBox()} onClick={handleUpClick}>
                Convert to uppercase
            </button>
            <button className="btn mx-1" style={getModeForTextBox()} onClick={handleDownClick}>
                Convert to lowercase
            </button>
            <button className="btn mx-1" style={getModeForTextBox()} onClick={handleCapitalizeClick}>
                Convert the first letter of each word to capital
            </button>
            <button className="btn mx-1" style={getModeForTextBox()} onClick={handleClearClick}>
                Clear text
            </button>
             <button className="btn mx-1" style={getModeForTextBox()} onClick={handleCopyClick}>
                Copy text
            </button>
        </div>


        <div className="container my-2" style={getMode()}>
            <h3> Your text summary </h3>
            <p> {text.trim === ""? 0: text.trim().split(" ").length} words </p>
            <p> {text.length} characters </p>
            <p> {0.008 * text.split(" ").length} Minute read </p>

            <h3> Preview </h3>
            <p>
                {text.length > 0? text: "enter something to preview"}
            </p>
        </div>
        </>
    )
}
