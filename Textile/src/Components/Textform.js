import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    // console.log("lowercase was clicked" + text);
    let newText = "";
    setText(newText);
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
    //by this we can able to write in the textbox
  };

  const [text, setText] = useState("");

  // text = "new text"; //wrong way to change the state
  // setText("new text");   //correct way to change the state

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          Convert to uppercase{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          Convert to lowercase{" "}
        </button>

        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear Text{" "}
        </button>
      </div>

      <div className="container my-3">
        <h2>Your text Summary</h2>
        <p>
          {text.split(" ").length} and {text.length} characters
        </p>
        <p>{0.08 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
