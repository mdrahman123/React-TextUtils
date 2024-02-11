import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("convert to uppercase was clicked" + Text);

    setText(Text.toUpperCase());
  };
  const handleLCclick = () => {
    console.log("convert to uppercase was clicked" + Text);

    setText(Text.toLowerCase());
    props.showAlert("converted to lower case", "success");
  };

  const handleoNChnage = (event) => {
    console.log("value changed");
    setText(event.target.value);
  };

  const [Text, setText] = useState("enter the text here");

  return (
    <>
      <div className="container" mx-5>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          style={{
            color: props.mode === "light" ? "black" : "white",
            backgroundColor: props.mode === "dark" ? "black" : "white",
          }}
          value={Text}
          onChange={handleoNChnage}
          id="exampleFormControlTextarea1"
          rows="9"
        ></textarea>
        <button className="btn btn-primary mx-5" onClick={handleUpClick}>
          convertToUpperCase
        </button>
        <button className="btn btn-secondary mx-5" onClick={handleLCclick}>
          convertToLowerCase
        </button>
      </div>
      <div className="container">
        <h1>your word summary</h1>
        <p>number of words={Text.split(" ").length - 1}</p>
        <p>number of characters={Text.length}</p>
        {/* setReadTime(0.08 * Text.split(" ").length - 1); */}
        <p>Time to read={0.008 * Text.split(" ").length - 1}</p>
        <h1>your entered text for preview</h1>
        <p>{Text}</p>
      </div>
    </>
  );
}
