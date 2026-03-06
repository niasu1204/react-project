import { createRoot } from 'react-dom/client'
import './index.css'
// import {App,Header}  from './App.jsx'
import App from './App.jsx'
// import {Header, Footer} from './App.jsx'

//Hello컴포넌트 : <div>hello</div> 출력 
const Hello = () => {
  return <div>hello</div>
}

//rendering : 컴포넌트를 화면에 그리는 과정
createRoot(document.getElementById('root')).render(
  <>
    <Hello />
    <App />
  </>
)
