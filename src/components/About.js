import React from 'react'

export default function About(props) 
{
    const getMode = ()=>{
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



  return (
    <div className='container' style={getMode()}>
        <h2 className="my-2"> About Us </h2>
        <div className="accordion" id="accordionExample" style={getMode()}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" style={getMode()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>

                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">

                <div className="accordion-body" style={getModeForTextBox()}>
                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={getMode()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Accordion Item #2
                </button>
                </h2>

                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={getModeForTextBox()}>
                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" style={getMode()} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Accordion Item #3
                </button>
                </h2>

                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={getModeForTextBox()}>
                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
