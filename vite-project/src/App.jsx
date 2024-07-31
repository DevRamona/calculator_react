import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Calculator from "./Components/Calculator";

function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [displayValue, setDisplayValue] = useState("0")
  const [prevValue, setPrevValue] = useState(null)
  const [operator, setOperator] = useState(null)
  const [calculationComplete, setCalculationComplete] = useState(false)

  function Reset() {
    setDisplayValue("0")
    setCurrentValue("")
    setPrevValue(null)
    setOperator(null)
    setCalculationComplete(false)


  }
  function addElement(element) {
    // setValue((previousValue) => previousValue + element)
    if (calculationComplete) {
      setDisplayValue(element)
      setOperator(null)
      setCurrentValue(element)
      setPrevValue(null)
      setCalculationComplete(false)
    } else if (["+", "-", "x", "÷"].includes(element)) {
      if (currentValue !== "") {
        if (prevValue !== null) {
          calculateElements()
        } else {
          setPrevValue(parseFloat(currentValue))
        }
        setCurrentValue("")
        setOperator(element)
      } else if(element === "%") {
        const value = parseFloat(currentValue) /100;
        setCurrentValue(value.toString())
        setDisplayValue(value.toString())
      } else {
        const newValue = currentValue === "0" ? element : element + currentValue
        setCurrentValue(newValue)
        setDisplayValue(newValue)
      }

        function calculateElements() {
          if(operator !== null && prevValue !== null && currentValue !== "") {
            const current = parseFloat(currentValue)
            let result;
            switch(operator) {
              case "+":
              result = prevValue + current
              break;
              case "-":
              result = prevValue - current
              break;
              case "÷":
              result = prevValue / current
              break;
              case "x":
              result = prevValue * current
              break;
              default :
              return;

            }
            setCurrentValue(result.toString())
            setDisplayValue(result.toString())
            setCalculationComplete(true)
            setPrevValue(result)
            setOperator(null)
          }
        }

        return (
          <>
            <div className="grid grid-cols-4 grid-rows-6 border w-72 text-2xl">
              <input
                className="p-6 border bg-white text-black col-span-4 w-full"
                type="text"
                placeholder="0"
                value={displayValue}
              />
              <div className="bg-gray-400 p-6 border row-start-2">
                {" "}
                <button onClick={Reset}>AC</button>
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
      }}}}

      export default App;
