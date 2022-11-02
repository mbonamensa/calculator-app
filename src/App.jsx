import "./css/styles.css"
import NumberBtn from "./components/NumberBtn"
import OperationBtn from "./components/OperationBtn"
import { useState } from "react"
import { textfit } from "react"


function App() {
  const [numbers, setNumbers] = useState("")

  const [result, setResult] = useState("0")

  const ops = ["/", "*", "-", "+", "."]

  function appendNumber(val) {
      if (
        ops.includes(val) && numbers === "" || ops.includes(val) && ops.includes(numbers.slice(-1))
      ) {
        return
      }
  
      setNumbers(numbers + val)
  
      if (!ops.includes(val)) {
        setResult(eval(numbers + val).toString())
      }
    }
    

  function calculate() {
    setNumbers(eval(numbers).toString())
  }

  function del() {
    if (numbers == "") {
      return
    }
    const value = numbers.slice(0, -1)
    setNumbers(value)
  }

  function clear() {
    setNumbers("")
  }


  return (
    <div className="calculator">
        <div className="calculator--output">
          <p className="big">{numbers || "0"}</p>
        </div>
        
        <div className="calculator--input">
          <button className="operation-btn clear-entry" onClick={clear}>CE</button> <button className="operation-btn" onClick={del}>C</button> <OperationBtn operation="/" appendNumber={appendNumber}/>
          <NumberBtn number="7" appendNumber={appendNumber}/> <NumberBtn number="8" appendNumber={appendNumber}/> <NumberBtn number="9" appendNumber={appendNumber}/> <OperationBtn operation = "*" appendNumber={appendNumber}/>
          <NumberBtn number="4" appendNumber={appendNumber}/> <NumberBtn number="5" appendNumber={appendNumber}/> <NumberBtn number="6" appendNumber={appendNumber}/> <OperationBtn operation = "-" appendNumber={appendNumber}/>
          <NumberBtn number="1" appendNumber={appendNumber}/> <NumberBtn number="2" appendNumber={appendNumber}/> <NumberBtn number="3" appendNumber={appendNumber}/> <OperationBtn operation = "+" appendNumber={appendNumber}/>
          <NumberBtn number="0" appendNumber={appendNumber} className="zero"/> <OperationBtn operation = "." appendNumber={appendNumber}/> <button className="operation-btn equals" onClick={calculate}>=</button>
        </div>
      
    </div>
  )
}

export default App
