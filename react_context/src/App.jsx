import './App.css'
import { Parent } from './components/User'
import { ThemeProvider } from './components/ThemeContext'
import Home from './components/Home'
import Home2 from './components/Home2'
import { Sub1 } from './components/Sub1'
import Counter from './components/Counter'
// import './style.css'
function App() {


  return (
    <>
      <Counter />
      <hr />
      <ThemeProvider>
        <Home />
        <Home2 />
        <Parent />
      </ThemeProvider>
      <div>
        <Sub1 />
      </div>
    </>
  )
}

export default App
