import {Routes,Route } from 'react-router-dom'
import Home from './home/Home'
import Navbar from './navbar/Navbar'
import Contact from './contact/Contact'
import About from './about/About'
import Cards from './serverdata/Cards'
import Reviews from './Reviews/Reviews'
function App(){
  return(
    <div>
        <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/serverdata' element={<Cards/>}></Route>
    <Route path='/products/reviews/:id' element={<Reviews/>}></Route>
    </Routes>

    </div>
  )
}

export default App
