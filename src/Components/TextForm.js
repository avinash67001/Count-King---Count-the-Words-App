import React, { useState } from "react";
// useState is a hook in React. It is used to change the state of a particular element

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked");
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Converted to Uppercase", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked");
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Converted to Lowercase", "success");
  };

  const handleClear = () => {
    console.log("Text is Cleared");
    let newtext = " ";
    setText(newtext);
    props.showAlert("Text is Cleared", "success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  //  text is the initial state of the text and 'Enter text here is the default value in the text'
  // and settext would be the new state of the text

  //   text = "Please enter the text here" // Wrong way to change the state
  //   setText("Please enter the text here") // Correct way to change the state
  return (
    <>
      <div>
        <h2> {props.heading}</h2>
        <div>
          <textarea
            className="form-control"
            id="MyBox"
            rows="10"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary m-2" onClick={handleClear}>
          Clear Text
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary</h1>
        <p>
          {
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h2> Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
