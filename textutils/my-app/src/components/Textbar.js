import React from "react";
import { useState } from "react";
export default function Textform(props) {
  const [text, settext] = useState("");
  const handleupclick = () => {
    let newtext = text.toUpperCase();
    settext(newtext);
  };
  const handleonchange = (event) => {
    settext(event.target.value);
  };
  const handledownclick = () => {
    let newtext = text.toLowerCase();
    settext(newtext);
  };
  const handleclear = () => {
    let newtext = "";
    settext(newtext);
  };
  const removeextraspaces = () => {
    let newtext = text.split(/[ ]+/);
    settext(newtext.join(" "));
  };
  return (
    <div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1 " class="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>
        Convert up to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handledownclick}>
        Convert up to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleclear}>
        Clear Text
      </button>
      <button className="btn btn-primary mx-2" onClick={removeextraspaces}>
        Remove Extra Space
      </button>
      <div className="container my-3">
        <h2 className="fw-bold">Your Text Summary</h2>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
        <h2 className="fw-bold">Minutes Needed to read</h2>
        <p>{0.008 * text.split(" ").length}</p>
        <h2 className="fw-bold">Preview</h2>
        <p>{text}</p>
      </div>
    </div>
  );
}
