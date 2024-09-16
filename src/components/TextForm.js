import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("Upper Case Waas Clicked"+text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case","success");
  };
  const handleLoClick = () => {
    // console.log("Upper Case Waas Clicked"+text);
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case","success");
  };
  const handleClearClick = () => {
    // console.log("Upper Case Waas Clicked"+text);
    let newText="";
    setText(newText);
    props.showAlert("Cleared","success");
  };
  const handleonChange = (event) => {
    console.log("On Change");
    setText(event.target.value)
  };
  const [text, setText] = useState("");
  //   text="newText"; Wrong Way
  //   setText("newText"); Correct Way
  return (
    <><div className="container" style={{color:props.mode===`dark`?'white':`black`}}>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="myBox"
          rows="10"
          value={text}
          onChange={handleonChange}
          style={{backgroundColor:props.mode===`dark`?'grey':`white`,color:props.mode===`dark`?'white':`black`}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        Convert UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert LowerCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear Text
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode===`dark`?'white':`black`}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words,{text.length} characters</p>
        <h2>Time Taken to Read: </h2>
        <p>{0.008*text.split(" ").length}</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter text Above!!"}</p>
    </div>
    </>
    
  );
}
