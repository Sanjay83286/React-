import Book1 from './books/Book1'
import './App.css'
import Childbook from './books/Childbook'
import Map1 from './books/Map1'
import Obj11 from './books/Obj11'
function App(){
    const abc={
        name:"sanjay",
        age:22,
        skill:"python"
    }


    return(
        <div>
        <Book1 book={abc}/>
        <Childbook>
            {abc}
        </Childbook>
        <Map1>
        </Map1>
        <Obj11/>
        </div>
    )
}
export default App