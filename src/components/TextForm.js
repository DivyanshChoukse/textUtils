import React, { useState } from "react";

export default function TextForm(props) {
  const [text, changeText] = useState("Enter your text here.");
  const handleOnChange = function (event) {
    changeText(event.target.value);
  };
  const clearText = function () {
    changeText("");
    props.showAlert("Text cleared", "success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  const handleOnClick1 = function (event) {
    const newText = text;
    changeText(newText.toUpperCase());
    props.showAlert("Text converted to uppercase", "success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  const handleOnClick2 = function (event) {
    const newText = text;
    changeText(newText.toLowerCase());
    props.showAlert("Text converted to lowercase", "success");
    setTimeout(() => {
      props.setAlert(null);
    }, 1500);
  };
  const showText = text;
  let words;
  if (text.length === 0) words = 0;
  else words = text.split(" ").length;
  return (
    <>
      <div className="container">
        <h1
          style={
            props.mode === "dark" ? { color: "white" } : { color: "black" }
          }
        >
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            value={text}
            style={
              props.mode === "dark"
                ? { backgroundColor: "#212b57", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
            onChange={handleOnChange}
            rows="8"
          ></textarea>
          <button className="btn btn-primary mx-3" onClick={handleOnClick1}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-3" onClick={handleOnClick2}>
            Convert to Lowercase
          </button>
          <button className="btn btn-primary mx-3" onClick={clearText}>
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container"
        style={
          props.mode === "dark" ? { color: "white" } : { color: "#212b57" }
        }
      >
        <h1>Your text summary:</h1>
        <p>
          {text.split(" ").length - 1} words {text.length} characters
        </p>
        <h2>Time to read:</h2>
        <p>{words * 0.008} minutes</p>
        <h2>Preview</h2>
        <p>{showText}</p>
      </div>
    </>
  );
}
