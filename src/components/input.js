import React from 'react'

const Input = () => {

  const handleClick = (event) => {
    let value = "abc"
    if(value === ""){
        alert("Please Enter the Value")
    } else {
        alert("Form submitted")
    } 
  }

  const RecordValue = (event) => {
    console.log(event.target.value)
  }
  return (
    <div style={{
    display:"flex", 
    flexDirection:"column", 
    justifyContent:"center",
    rowGap:"10px"
    }}>
    <div>
    <input 
        type='text' 
        style={{
            height:"40px", 
            width:"300px", 
            borderRadius:"50px", 
            fontSize:"20px",
            padding:"10px",
            border:"1px solid #282A35",
            }}
        placeholder='Enter Your Name'
        onChange={RecordValue}
        ></input>
        </div>
        <div style={{display:"flex", justifyContent:"center"}}>
        <button style={{
            height:"40px", 
            width:"200px",
            padding:"10px", 
            backgroundColor:"#04AA6D",
            color:"white",
            fontSize:"20px",
            border:"1px solid #04AA6D",
            borderRadius:"50px",
            cursor:"pointer"
            }} onClick={handleClick}>SUBMIT</button>
            </div>
    </div>
    )
}

export default Input