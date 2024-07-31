import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./Components/Calculator";

function App() {
  const [value, setValue] = useState("");

  function clearOutput() {
    setValue("0");
  }
  function addElement(element) {
    // setValue((previousValue) => previousValue + element)
    setValue((previousValue) =>
      previousValue === "0" ? element : previousValue + element
    );
  }
  function calculateElements() {
    setValue((previousValue) => {
      try {
        const output = eval(previousValue.replace("÷", "/").replace("x", "*"));
        return output.toString();
      } catch {
        setValue("Error");
      }
    });
  }

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-6 border w-72 text-2xl">
        <input
          className="p-6 border bg-white text-black col-span-4 w-full"
          type="text"
          placeholder="0"
          value={value}
        />
        <div className="bg-gray-400 p-6 border row-start-2">
          {" "}
          <button onClick={clearOutput}>AC</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-2">
          {" "}
          <button onClick={(e) => setValue(value.slice(0, -1))}>DEL</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-2">
          {" "}
          <button onClick={() => addElement("%")}>%</button>
        </div>
        <div className="bg-orange-400 p-6 border row-start-2">
          {" "}
          <button onClick={() => addElement("÷")}>÷</button>
        </div>
        <div className="bg-orange-400 p-6 border">
          <button onClick={() => addElement("-")}>-</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-3">
          <button onClick={() => addElement("8")}>8</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-3">
          <button onClick={() => addElement("9")}>9</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-3">
          <button onClick={() => addElement("4")}>4</button>
        </div>
        <div className="bg-orange-400 p-6 border col-start-4 row-start-4">
          {" "}
          <button onClick={() => addElement("x")}>x</button>
        </div>
        <div className="bg-gray-400 p-6 border col-start-3 row-start-4">
          {" "}
          <button onClick={() => addElement("5")}>5</button>
        </div>
        <div className="bg-gray-400 p-6 border col-start-2 row-start-4">
          {" "}
          <button onClick={() => addElement("6")}>6</button>
        </div>
        <div className="bg-gray-400 p-6 border col-start-1 row-start-4">
          {" "}
          <button onClick={() => addElement("7")}>7</button>
        </div>
        <div className="bg-orange-400 p-6 border">
          <button onClick={() => addElement("+")}>+</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-5">
          <button onClick={() => addElement("2")}>2</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-5">
          <button onClick={() => addElement("3")}>3</button>
        </div>
        <div className="bg-gray-400 p-6 border row-start-5">
          <button onClick={() => addElement("1")}>1</button>
        </div>
        <div className="bg-gray-400 p-6 border col-span-2">
          <button onClick={() => addElement("0")}>0</button>
        </div>
        <div className="bg-gray-400 p-6 border col-start-3 row-start-6">
          <button onClick={() => addElement(".")}>.</button>
        </div>
        <div className="bg-orange-400 p-6 border col-start-4 row-start-6">
          <button onClick={calculateElements}>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
