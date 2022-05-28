import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
    props.showAlert("Cleared the text","success");
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted text to Uppercase","success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted text to Lowercase","success");
  };

  const TitleCase = () => {
    let updatedText="";
    let words = text.split(" ");
    words.forEach((word) => {
      let firstChar = word.charAt(0).toUpperCase();
       updatedText = updatedText + (firstChar + word.slice(1))+ " ";
    });
    setText(updatedText);
    props.showAlert("Converted text to Title Case","success");
  };


 const copyCase = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text to clipboard!","success");
};

  const handleChange = (event) => {
    //to write in textarea
    setText(event.target.value); //get the value
  };

  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'black':'white' , color:props.mode==='dark'?'white':'black'}} value={text} id="myBox" rows="8" onChange={handleChange} ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleClearClick}> Clear </button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={TitleCase}>Title Case</button>
        <button className="btn btn-primary mx-1 my-1" disabled={text.length===0} onClick={copyCase}>Copy Text</button>
      </div>

      <div className="container my-4" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary :</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words | {text.length} characters</p>
        {/* time taken to read words */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read </p>  
        <h2>Preview:</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p> 
      </div>
    </>
  );
}
