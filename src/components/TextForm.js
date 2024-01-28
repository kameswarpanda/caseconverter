import React, { useState } from "react";

export default function TestForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div className="mb-3" style={{color: props.mode==='light'?'black':'white'}} >
        <h4 >Enter Your Text </h4>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode==='light'?'white':'black', color: props.mode==='light'?'black':'white',}}
          id="myBox"
          rows={8}
        />
        <button className="btn btn-primary mx-2 my-3 btn-sm" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary my-3 btn-sm" onClick={handleLoClick}>
          Convert To LowerCase
        </button>       
        <button className="btn btn-primary mx-2 my-3 btn-sm" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary my-3 btn-sm" onClick={handleCopy}>
          Copy Text
        </button>
      </div>

      <div className="container " style={{color: props.mode==='light'?'black':'white'}}>
        <p>{text.split(" ").length} Words and {text.length} Characters</p>
        <p>{0.005 * text.split(" ").length } Minutes Takes to complete Read</p>
        <h3 style={{color: props.mode==='light'?'black':'yellow'}}>Preview</h3>
        <p>{text.length>0?text:"Enter something in above Text box to preview"}</p>
      </div>

    </>
  );
}
