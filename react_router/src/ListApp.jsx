//[ListApp.jsx]

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import BoardList from './list/BoardList'
import BoardDetail from './list/BoardDetail'
import Write from './list/Write'
import Home from './list/Home'

function ListApp() {
 
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/board' element={<BoardList/>} ></Route>
          <Route path='/board/:id' element={<BoardDetail/>} ></Route>
          <Route path='/write' element={<Write/>} ></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default ListApp
