import React, { useState } from "react";

function Calculator() {
  const [result, setResult] = useState(0);
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [operator, setOperator] = useState("");

  function handleInput1(e) {
    setInput1(e.target.value);
  }

  function handleInput2(e) {
    setInput2(e.target.value);
  }

  function handleOperator(e) {
    setOperator(e.target.value);
  }

  function calculate() {
    let output = 0;
    switch (operator) {
      case "+":
        output = parseFloat(input1) + parseFloat(input2);
        break;
      case "-":
        output = parseFloat(input1) - parseFloat(input2);
        break;
      case "*":
        output = parseFloat(input1) * parseFloat(input2);
        break;
      case "/":
        output = parseFloat(input1) / parseFloat(input2);
        break;
    }
    // Randomly change the output by a small margin
    const random = Math.round(Math.random() * 5);
    const sign = Math.random() < 3 ? -1 : 1;
    output += random * sign + 1;
    setResult(output);
  }

  return (
    <div>
      <input type="number" onChange={handleInput1} value={input1} />
      <select onChange={handleOperator} value={operator}>
        <option value=""></option>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" onChange={handleInput2} value={input2} />
      <button onClick={calculate}>=</button>
      <div>{result}</div>
    </div>
  );
}

export default Calculator;
