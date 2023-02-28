
import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {

const [maxSum, setMaxSum] = useState(50);

const [input1, setInput1] = useState(0);

const [input2, setInput2] = useState(50);

const changeHandler1 = e => {

setInput1(e.target.value);

};

const changeHandler2 = e => {

setInput2(e.target.value);

};

return (

<>

<div id="max-sum-holder">

Input max sum:-

<input

onChange={e => setMaxSum(e.target.value)}

value={maxSum}

type={'number'}

/>

</div>

<div id="range-a-holder">

<input

value={input1}

onChange={changeHandler1}

type={'range'}

max={maxSum - input2}

/>

<div id="range-a-value">{input1}</div>

</div>

<div id="range-b-holder">

<input

value={input2}

onChange={changeHandler2}

type={'range'}

max={maxSum - input1}

/>

<div id="range-b-value">{input2}</div>

</div>

<div id="sum">{parseInt(input1) + parseInt(input2)}</div>

</>

);

};

export default App;
