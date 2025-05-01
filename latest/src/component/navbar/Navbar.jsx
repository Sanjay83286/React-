import './navbar.css'
function Navbar(){
    return(
      <div className="container">
        <div className="left_side">
            <h1>10k</h1>
        </div>
        <div className="right_side">
             <button>Home</button>
             <button>about</button>
             <button>contact</button>
        </div>
      </div>
    )
}
export default Navbar