import './navbar.css'
import { Link } from 'react-router-dom'
function Navbar(){
    return(
     <div className="container">
        <div className="left_navbar">
         <h1>SANJAY</h1>
        </div>
        <div className="right_navbar">
        <Link to='/home'>
          <h3>HOME</h3>
          </Link>
          <Link to='/contact'>
          <h3>CONTACT</h3>
          </Link>
          <Link to='/about'>
          <h3>ABOUT</h3>
          </Link>
          <Link to='/serverdata'>
          PRODUCTS
          </Link>
        </div>
     </div>
    )
}
export default Navbar