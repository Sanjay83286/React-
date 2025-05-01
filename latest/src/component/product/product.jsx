
import './product.css'
function Product(abc){
    console.log(abc)
    return(
    <>
       {abc.children.map((item)=>{
          console.log(item)
            return(
                <div className="nav_bar">
                    <h1>{item.name}</h1>
                    <h1>{item.cost}</h1>
                </div>
            )
        })}
    </>
    )
  
}
export default Product