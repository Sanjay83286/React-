import data from './data'
import './cards.css'
import { Link } from 'react-router-dom'
function Cards() {
    return (
        <div className='container11'>
            {data.products.map((item, index) => {
             console.log()
                return (
                    <div className='item' key={ index}>
                        <p>{item.title}</p>
                        <Link to={`/products/reviews/${item.id}`}>
                        <button>Button</button>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default Cards