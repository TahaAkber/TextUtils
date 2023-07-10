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
  return (
    <div>
      <div class="mb-3">
        <label htmlFor="exampleFormControlTextarea1" class="form-label">
          <h1>{props.heading}</h1>
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={handleonchange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>
        Convert up to upper case
      </button>
    </div>
  );
}
