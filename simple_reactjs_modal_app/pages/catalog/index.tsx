import { useState } from 'react'

import ProductDetails from '../../components/product-details'
import Cart from '../../components/cart'
import styles from './Catalog.module.css'
import products from './products.json'

function Catalog() {
    const [cart, setCart] = useState ({ products: [] })
    const [products, setProducts] = useState([])

    function fetchProducts() {
        fetch('api/products')
        .then(res=>res.json())
        .then(data => setProducts(data))

    }
    useEffect(()=> fetchProducts(),[])


    function addToCart(product: string){
        const newCart = { _id: cart._id }
        newCart.products = [...cart.products, {...product}]
        setCart(newCart)
    }

    function rewmoveItemFromCart(product: string) {
        const newCart = { _id: cart._id }
        newCart.products = cart.products.filter(item => item !== product)
        setCart(newCart)
    }

    return (
        <>
            <div className={styles.container}>
                <div className={styles.mainleft}>
                    <h1 className={styles.header}>Catalog</h1>
                    <ul className={styles.products}>
                        {products.map((product, index) =>(
                            <li key={index}>
                                {/*<ProductDetais product = {product} addToCart = {addTpCart} */ }
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.rightSidebar}>
                    <h2>Cart</h2>
                    
                </div>

            </div>
        </>
    )


}