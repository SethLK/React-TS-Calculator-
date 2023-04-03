import React, { useState } from 'react';



function Button() {
  const [count, setCount] = useState('');

  function handleButtonClick(value:string) {
    setCount(count => count + value);
  }

  function evaluateNum() {
    setCount(count => {
      let cleanedCount = count.replace(/\.0+$/g, ''); // Remove trailing zeros from decimals
      return eval(cleanedCount);
    });
  }

  function clear() {
    setCount('');
  }

  function backspace() {
    setCount(count.slice(0, -1));
  }

  return (
    <>
      
      <div className="grid_row">
        <input type="text" value={count} readOnly />
      <button onClick={clear}>AC</button>
      <button onClick={backspace}>C</button>
        {[ '/'].map(value => (
          <button key={value} onClick={() => handleButtonClick(`${value}`)}>
            {value}
          </button>
        ))}
      </div>
      <div className="grid_row">
        {[7, 8, 9, '*'].map(value => (
          <button key={value} onClick={() => handleButtonClick(`${value}`)}>
            {value}
          </button>
        ))}
      </div>
      <div className="grid_row">
        {[4, 5, 6, '-'].map(value => (
          <button key={value} onClick={() => handleButtonClick(`${value}`)}>
            {value}
          </button>
        ))}
      </div>
      <div className="grid_row">
        {[1, 2, 3, '+'].map(value => (
          <button key={value} onClick={() => handleButtonClick(`${value}`)}>
            {value}
          </button>
        ))}
      </div>
      <div className="grid_row">
        {[0, "."].map(value => (
          <button key={value} onClick={() => handleButtonClick(`${value}`)}>
            {value}
          </button>
        ))}
        <button onClick={evaluateNum}>=</button>
      </div>
    </>
  );
}

export default Button;
