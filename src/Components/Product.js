import {useEffect, useState} from "react";

export const Product = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch('http://localhost:8080/skj/products/all-products')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data)
            })

    }, [])

    console.log(products)

    return (

        <div>
            {products.map((product) => {
                return (
                <div className={'product-card'} key={product.id}>
                    <img src={product.photo} alt={product.name}/>
                    <h1>{product.name}</h1>
                    <p>{product.category}</p>
                </div>
                )
            })}
        </div>

        // <div className={'product-card'} key={product}>
        //     <img src={product.photo} alt={product.name}/>
        //     <h1>{product.name}</h1>
        //     <p>{product.category}</p>
        // </div>
    )

}