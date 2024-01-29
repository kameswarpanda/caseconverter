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

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

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
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2  btn-sm" onClick={handleUpClick}>
          Convert To UpperCase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2 btn-sm" onClick={handleLoClick}>
          Convert To LowerCase
        </button>       
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-2  btn-sm" onClick={handleClearClick}>
          Clear Text
        </button> 
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-2  btn-sm" onClick={handleCopy}>
          Copy Text
        </button>
        <button disabled={text.length===0}  className="btn btn-primary mx-1 my-2  btn-sm" onClick={handleExtraSpaces}>
          Remove Extra spaces
        </button>
      </div>

      <div className="container " style={{color: props.mode==='light'?'black':'white'}}>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
        <p>{0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length } Minutes Takes to complete Read</p>
        <h3 style={{color: props.mode==='light'?'black':'yellow'}}>Preview</h3>
        <p>{text.length>0?text:"Nothing in Preview"}</p>
      </div>

    </>
  );
}
