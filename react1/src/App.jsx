import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import Button from './components/Button'

export default function App() {
  return (
    <>
      <Header />
      <Button />
      <Button />
      <Button /> 
      <Main />
      <h1>안녕 리액트!!</h1>
      <Footer />
    </>
  )
}

//export {Header, Footer}; // export모아서 하기
//export default App; // 파일당 1개만 허용