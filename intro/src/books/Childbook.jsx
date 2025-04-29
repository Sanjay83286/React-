// import { Children } from "react"

function Childbook(abc){
    console.log(abc)
    console.log("adfg")
    return(
        <div>
      <h6>{abc.children.name}</h6>
      <h1>{abc.children.skill}</h1>
      </div>
    )
}
export default Childbook