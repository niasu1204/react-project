import Register from "./components/Register"
import FocusInput from "./components/FocusInput"
import CrudExample from "./components/CrudExample"
import GuessNumberGame from "./components/GuessNumber"
import Timer from "./components/Timer"
import HookCanvas from "./components/HookCanvas"
import DrawingCanvas from "./components/DrawingCanvas"
import BatchTest from "./components/BatchTest"
import { useState } from "react"

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
    <BatchTest />
    {/* <DrawingCanvas /> */}
    {/* <HookCanvas />
    <hr />
     <button onClick={() => setShow(false)}>타이머 제거</button>
     {show && <Timer/>}
    <hr />
      <GuessNumberGame />
      <hr />
      <CrudExample />
      <hr />
      <Register />
      <hr />
      <FocusInput /> */}

    </>
  )
}

export default App
