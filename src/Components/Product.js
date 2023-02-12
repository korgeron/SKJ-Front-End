import {useEffect,useState} from "react";

export const Product = () => {

    const [product, setProduct] = useState([])

    useEffect(()=>{

        fetch('http://localhost:8080/skj/products/all-products')
            .then(res => res.json())
            .then(data => setProduct(data))

    },[])

    console.log(product)

    return (
        <div className={'product-card'}>
            <img src={product[3].photo} alt=""/>
            <h1>{product[3].name}</h1>
            <p>{product[3].category}</p>
        </div>
    )

}