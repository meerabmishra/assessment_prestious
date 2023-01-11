import React, { useState } from "react";

const HElement = ({value}) => {
  return <div>{value}</div>
}

const TElement = ({value}) => {
  return <div>{value}</div>
}

const Column = ({ elements }) => {
  return (
    <div>
      {elements.map((element, index) => {
        return element.value === 'H' ? <HElement key={index} value={element.value} /> : <TElement key={index} value={element.value} />
      })}
    </div>
  );
};


const Grid = ({ columns }) => {
  return (
    <div style={{ display: "flex" }}>
      {columns.map((column, index) => {
        return <Column key={index} elements={column} />;
      })}
    </div>
  );
};

const HeadTail = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [grid, setGrid] = useState([[]]);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    
    if (!selectedOption) {
      setErrorMessage("Please select a value from the dropdown.");
      return;
  }
  setErrorMessage("");

    let newElement = { id: Date.now(), value: selectedOption };
    let newGrid = [...grid];
    if (newGrid[newGrid.length - 1].length && newGrid[newGrid.length - 1][0].value !== selectedOption) {
      newGrid.push([newElement])
    } else {
      newGrid[newGrid.length - 1].push(newElement)
    }
    setGrid(newGrid);
    setSelectedOption("");
  };

  return (
    <div>
      <form>
        <label>
          Select value:
          <select
            value={selectedOption}
            onChange={e => setSelectedOption(e.target.value)}
          >
            <option value="" disabled>
              Select value
            </option>
            <option value="H">H</option>
            <option value="T">T</option>
          </select>
        </label>
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && <div>{errorMessage}</div>}
      <Grid columns={grid} />
    </div>
  );
};

export default HeadTail;