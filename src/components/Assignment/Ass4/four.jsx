import './../Ass4/four.css'
import { useState } from "react"


export const FourComponent = ()=>{
  
  const [name,setName] = useState('')
  const [submittedName, setSubmittedName] = useState('')

  const handleChange =(event)=>{
    setName(event.target.value);
  };
  const handlesubmit =(event)=>{
    alert(`Submitted name : ${name}`)
    event.preventDefault();
    setSubmittedName(name);
  }

  return(
    <div className="mainDiv">
      <h1 className="inputHeading">Enter Your Name:{ submittedName && <span> { submittedName}</span>}</h1>
      <input type="text" value={name} onChange={handleChange} className="inputBox"></input>
      <button onClick={handlesubmit} className="buttonClick">Submit</button>
    </div>
  )
}