import { useState } from "react";
import React from "react";
import "./index.css"


export default function App() {


  const [name, setName] = useState("")
  const [nameEntry, setNameEntry] = useState([])
  

  function clickSubmit(event) {
    event.preventDefault()
    setNameEntry(prevState => [...prevState, name])
  }

  function handleChange(event) {
    const {value} = event.target
    setName(value)

  }

  const nameAddition = nameEntry.map(name => (<li>{name}</li>))


  return (
    <form> c
      <input 
      name="firstName"
      type="text"
      placeholder="Enter Name"
      value={name}
      onChange ={handleChange}  
      />

<button onClick={clickSubmit}> Submit </button>

    <ul>
      <h1>{nameAddition}</h1>
    </ul>

    </form>
  );
}

// Build a simple react app with an input box, an `<h1>`, a button, and an ordered list. 
// The user will type names into the input box.

// When the user types in the input box, the `<h1>` should update to show the same text as the input box.

// When the user clicks the button, the value of the input box should be added to a running list of names 
// that have been previous entered. (Hint: you'll need to set state and map over an array to do this).