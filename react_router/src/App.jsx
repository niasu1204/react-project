import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Main from './components/Main'
import Product from './components/Product'
import Product2 from './components/Product2'
import NotFound from './components/NotFound'
import Menu from './components/Menu'
import Nav from './components/Nav'
function App() {
 
  return (
    <div className='App'>
      <BrowserRouter>
        <Header>
          <Menu />
        </Header>
        <Nav/>
          <hr/>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          {/*/product/:code/detail/:q  */}
          <Route path='/product/:code/detail/:q' element={<Product/>}></Route>
          <Route path='/product2' element={<Product2/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
