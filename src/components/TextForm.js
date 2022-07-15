import React,{useState} from 'react'

export default function TextForm(props) {
  const handleClearClick =() =>{
    let text="";
    setText(text);
    props.showAlert("Text has been cleared!","success");
  }
  const handleUpClick =() =>{
    let upperText=text.toUpperCase();
    setText(upperText);
    props.showAlert("Text has been converted to upper case!","success");
  }
  const handleLowerClick =() =>{
    let lowerText=text.toLowerCase();
    setText(lowerText);
    props.showAlert("Text has been converted to lower case!","success");
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied","success");
  }
  const handleOnChange =(event) =>{
    setText(event.target.value);
  }
  const [text,setText]=useState("");
  return (
    <>
    <div  className="container" style={{color: props.mode==='dark'? 'white':'black'}}>
            
            <h1 >{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'rgb(21 64 98)':'white',color: props.mode==='dark'? 'white':'black'}}></textarea>
            </div>
            <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to uppercase</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleLowerClick}>Convert to lowercase</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
            <button disabled={text.length ===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'? 'white':'black'}}>
      <h2 >Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length} words & {text.length} characters </p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} minutes to read. </p>
      <h2>Preview</h2>
      <p>{text===""?'Nothing to preview':text}</p>
    </div>
    </>
  )
}
