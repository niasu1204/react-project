import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Dashboard from './layout/Dashboard'
import Home from './layout/Home'
import Timer from './components/Timer'
import Canvas from './components/Canvas'
import BoardHome from './components/board/BoardHome'
import BoardList from './components/board/BoardList'
import BoardDetail from './components/board/BoardDetail'
import Write from './components/board/Write'
function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>}>
            <Route index element={<Home/>} />
            <Route path='timer' element={<Timer/>} />
            <Route path='canvas' element={<Canvas/>} />
            <Route path='board' element={<BoardHome />} >
              <Route index element={<BoardList />} />
              <Route path='write' element={<Write />} />
              <Route path='detail/:id' element={<BoardDetail />} />
              
            </Route>
          </Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
