import React from "react";

const Button = ({
  setLength,
  numAllowed,
  setNumAllowed,
  charAllowed,
  setCharAllowed,
  length,
}) => {
  return (
    <>
      <div className="box">
        <div className="range-box">
          <input
            type="range"
            min={6}
            max={25}
            value={length}
            onChange={(event) => setLength(event.target.value)}
          />
          <p>length ({length})</p>
        </div>
        <div className="num-box">
          <input
            type="checkbox"
            id="number"
            defaultChecked={numAllowed}
            onChange={() => setNumAllowed((prev) => !prev)}
          />
          <label htmlFor="number">Number</label>
        </div>
        <div className="char-box">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="char"
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          <label htmlFor="char">Characters</label>
        </div>
      </div>
    </>
  );
};

export default Button;
