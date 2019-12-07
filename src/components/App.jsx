import React, { useState } from "react";

// FIRST WAT
// function App() {
//   const [name, setName] = useState("");
//   const [headingText, setHeading] = useState("");

//   // will be triggered everytime the user input has changed
//   // onChange passes over an object when triggered - which
//   // corresponds to an event
//   function handleChange(event) {
//     // event is triggered by the OnChange attribute
//     // target is the element of that triggered event
//     // value corresponds to the value of the attribute
//     console.log(event.target.value);
//     // console.log(event.target.placeholder);
//     // console.log(event.target.type);
//     setName(event.target.value);
//   }

//   function handleSubmit() {
//     setHeading(name);
//   }

//   return (
//     <div className="container">
//       {/* <h1>Hello {name}</h1> */}
//       <h1>Hello {headingText}</h1>
//       {/* Controlled Component */}
//       <input
//         onChange={handleChange}
//         type="text"
//         placeholder="What's your name?"
//         // single source of truth -- controlled
//         value={name}
//       />
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default App;

// SECOND WAY
function App() {
  const [name, setName] = useState("");
  const [headingText, setHeading] = useState("");

  function handleChange(event) {
    console.log(event.target.value);
    setName(event.target.value);
  }

  function handleSubmit(event) {
    setHeading(name);
    // prevents the next default event thats happening
    // (which is refreshing the page in this case)
    event.preventDefault();
  }

  // forms - triggers onSubmit and calls function thats designated: handleSubmit
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
          value={name}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
