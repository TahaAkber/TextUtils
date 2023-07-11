import React from "react";
import { useState } from "react";
export default function Textform(props) {
  const [text, settext] = useState("Enter Text You want to convert");
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
  return (
    <div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
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
      <button className="btn btn-primary" onClick={handleupclick}>
        Convert up to Uppercase
      </button>
      <button className="btn btn-primary" onClick={handledownclick}>
        Convert up to Lowercase
      </button>
      <div className="container my-3">
        <h1>Your Text Summary</h1>
        <p>
          {text.length} characters and {text.split(" ").length} words
        </p>
      </div>
    </div>
  );
}
