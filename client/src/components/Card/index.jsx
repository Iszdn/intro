import React, { useContext } from 'react'
import "./index.scss"
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../context/WishlistContext'
import { BasketContext } from '../../context/BasketContext'
const Card = (product) => {
    const {addWish}=useContext(WishlistContext)
    const {addBasket}=useContext(BasketContext)
    
    return (
        <div className='card-ser'>
            <i className={product.image}></i>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <Link to={product._id}>Learn More</Link>
            <div onClick={()=>addWish(product)}>
                <i class="fa-regular fa-heart"></i>
            </div>
            <div onClick={()=>addBasket(product)}>
            <i class="fa-solid fa-basket-shopping"></i>
            </div>

        </div>
    )
}

export default Card