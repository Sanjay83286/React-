import { useParams } from "react-router-dom"
import data from '../serverdata/data'
function Reviews(){
    console.log(useParams())
    const {id}=useParams()
    const matchfound=data.products.find((item)=>{
      const res= item.id===Number(id) // or one.id in place of {id}
      return res })
    console.log(matchfound)
    return(
      <div>
        {matchfound.reviews.map((i)=>{
            console.log("sanjay",i)
            return(
                <p>{i.comment}</p>
            )
        })}

      </div>
    )}

export default Reviews