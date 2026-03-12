import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './components/NotFound'
import SiteLayout from './layout/SiteLayout'
import Home from './layout/Home'
import Notice from './layout/Notice'
import Gallery from './layout/Gallery'
function LayoutApp() {
 
  return (
    <div className='App'> 
      <BrowserRouter>
        <Routes>
          <Route path='/site' element={<SiteLayout />} >
            <Route index element={<Home />} /> {/*index route : 기본 자식 페이지 */}
            <Route path="gallery.go" element={ <Gallery />} />
            <Route path="notice/:no" element={<Notice />} />
          </Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default LayoutApp
