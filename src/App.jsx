import Create from './Create'
import Home from './Home'
import Navbar from './Navbar'
import './styles/index.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import BlogDetails from './BlogDetails'
import NotFound from './NotFound'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
          <Route path='/' element={< Home/>}/>
          <Route path='/new' element={< Create/>}/>
          <Route path='/blogs/:id' element={< BlogDetails/>}/>
          <Route path='*' element={< NotFound/>}/>
      </Routes>
    </Router>
    </>
    
  )
}

export default App
