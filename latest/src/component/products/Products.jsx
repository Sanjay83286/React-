import Product from '../product/Product'
function Products(){
    const Prod=[
        {id:1,name:"laptop",cost:5500},
        {id:2,name:"mobile",cost:15000}
    ]
    return(
        //children pros //see gendral prop
       <Product>
        {Prod}
       </Product>
    )
}

export default Products

// const Products=[
//     {id:1,name:"laptop",cost:5500},
//     {id:2,name:"mobile",cost:15000}
// ]

// export default Products