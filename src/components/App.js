
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  
   const [maxSum, setMaxSum] = useState(50);
  const [rangeA, setRangeA] = useState(0);
  const [rangeB, setRangeB] = useState(50);

  const handleRangeAChange = (event) => {
    setRangeA(parseInt(event.target.value));
  };

  const handleRangeBChange = (event) => {
    setRangeB(parseInt(event.target.value));
  };

  // Limiting the maximum value of range A based on the current value of range B and the maximum sum
  const maxRangeA = Math.min(maxSum - rangeB, rangeB);

  return (
    <div className="App">
      <div id="max-sum-holder">
        <label htmlFor="max-sum">Max Sum:</label>
        <input type="number" id="max-sum" name="max-sum" value={maxSum} onChange={(event) => setMaxSum(parseInt(event.target.value))} />
      </div>

      <div id="range-a-holder">
        <input type="range" id="range-a" name="range-a" min="0" max={maxRangeA} value={rangeA} onChange={handleRangeAChange} />
        <div id="range-a-value">{rangeA}</div>
      </div>

      <div id="range-b-holder">
        <input type="range" id="range-b" name="range-b" min="0" max="50" value={rangeB} onChange={handleRangeBChange} />
        <div id="range-b-value">{rangeB}</div>
      </div>

      <div id="sum">{rangeA + rangeB}</div>
    </div>
  );
}


export default App;
