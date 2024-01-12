import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'

const WishlistPage = () => {
    const {wish,deleteWish}=useContext(WishlistContext)

  return (
    <div>
        <h3>wishlist</h3>
{
    wish && wish.map(x=>
    <ul>
        <li>{x.image}</li>
        <li>{x.title}</li>
        <li>{x.description}</li>
        <li><button onClick={()=>deleteWish(x)}>delete</button></li>
    </ul>
    )
}
    </div>
  )
}

export default WishlistPage