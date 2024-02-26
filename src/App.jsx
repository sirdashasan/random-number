import "./App.css";
import React, { useState } from "react";

function App() {
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [random, setRandom] = useState();

  const changeMax = (e) => {
    setMax(Number(e.target.value));
  };

  const changeMin = (e) => {
    setMin(Number(e.target.value));
  };

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  };

  const stil = {
    color: "green",
  };

  return (
    <div className="App">
      <h1>Random Number Generator</h1>
      <div className="container">
        <p>
          Random number from the range: <p style={stil}>{random}</p>
        </p>
        <input
          type="number"
          placeholder="Enter a min number"
          onChange={changeMin}
        />
        <input
          type="number"
          placeholder="Enter a max number"
          onChange={changeMax}
        />
        <button onClick={generateRandom}>Give a random number</button>
      </div>
    </div>
  );
}
export default App;
