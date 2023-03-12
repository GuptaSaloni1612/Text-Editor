import React, { useState } from 'react';

export default function TextForm(props) {
    const [text, settext] = useState("");
   const setuppercase = () => {
    console.log(text);
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert('Text Converted To Upper Case!','success');
    }

    const setlowercase = () => {
      console.log(text);
      let newtext = text.toLowerCase();
      settext(newtext);
      props.showalert('Text Converted To Lower Case!','success');
      }

      const removeExtraSpace = () => {
        console.log(text);
        let newtext = text.replace(/\s{2,}/g, ' ').trim();
        settext(newtext);
        props.showalert('Text Converted To Lower Case!','success');
        }
    
    const cleartextarea = () => {
        settext("");
        props.showalert('Text Area Is Cleared!','success');
    }
    const textchange = (event) => {
        settext(event.target.value);
        
    }
    
  return (
    <>
    <div>
  <div className="mb-3">
  <label htmlFor="textarea1" className="form-label">Text Editor</label>
  <textarea className="form-control" id="textarea1" rows="8" value={text} onChange={textchange} placeholder="Enter Text Here"></textarea>
</div>
<button id="uper" className={`btn btn-${props.mode === 'dark'?'dark' : 'primary'} m-2`} onClick={setuppercase}>Upper Case</button>
<button id="cleararea" className={`btn btn-${props.mode === 'dark'?'dark' : 'primary'} m-2`} onClick={setlowercase}>Lower Case</button>
<button id="cleararea" className={`btn btn-${props.mode === 'dark'?'dark' : 'primary'} m-2`} onClick={removeExtraSpace}>Remove Extra Space</button>

<button id="cleararea" className={`btn btn-${props.mode === 'dark'?'dark' : 'primary'} m-2`} onClick={cleartextarea}>Clear Text Area</button>
    </div>
    <div className = "container">
       <span>Words: {text ===""? 0: text.split(" ").length}</span> <span>Character: {text.length}</span><br/>
       <span>Time To Read: {0.008 * text.split(" ").length}</span>
       <h3 className= "text-center mt-4">Preview Of Text Editor Text</h3>
       <p className="m-1">{text === 'Enter Text Here'? "" : text}</p> 
    </div>
    </>
  )
}
