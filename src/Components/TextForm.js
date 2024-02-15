import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("convert to uppercase was clicked" + Text);

    setText(Text.toUpperCase());
    props.showAlert("converted to Upper case", "success");
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
  const handleOnCopy = () => {
    var text = document.getElementById("exampleFormControlTextarea1");
    console.log(" text copied");
    text.select();
    //  text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("text Copied", "success");
  };

  const [Text, setText] = useState("");

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
        <button
          className="btn btn-primary mx-5 my-2"
          disabled={Text.length === 0}
          onClick={handleUpClick}
        >
          convertToUpperCase
        </button>
        <button
          className="btn btn-secondary mx-5 "
          disabled={Text.length === 0}
          onClick={handleLCclick}
        >
          convertToLowerCase
        </button>
        <button
          className="btn btn-secondary mx-5 "
          disabled={Text.length === 0}
          onClick={handleOnCopy}
        >
          CopyText
        </button>
      </div>

      <div className="container">
        <h1>your word summary</h1>
        <p>
          number of words=
          {
            Text.split(" ").filter((x) => {
              return x.length != 0;
            }).length
          }
        </p>
        <p>number of characters={Text.length}</p>
        {/* setReadTime(0.08 * Text.split(" ").length - 1); */}
        <p>
          Time to read=
          {0.008 *
            Text.split(" ").filter((x) => {
              return x.length != 0;
            }).length}
        </p>
        <h1>your entered text for preview</h1>
        <p>
          {" "}
          <textarea
            className="form-control"
            style={{
              color: props.mode === "light" ? "black" : "white",
              backgroundColor: props.mode === "dark" ? "black" : "white",
            }}
            value={Text}
            // onChange={handleoNChnage}
            id="exampleFormControlTextarea1"
            rows="9"
          ></textarea>
        </p>
      </div>
    </>
  );
}
