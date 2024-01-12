import React, { useContext } from 'react'
import { WishlistContext } from '../../context/WishlistContext'
import { Helmet } from 'react-helmet-async'

const WishlistPage = () => {
    const {wish,deleteWish}=useContext(WishlistContext)

  return (
    <>
     <Helmet>
    <title>Wishlist</title>
   </Helmet>
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
    </>
  
  )
}

export default WishlistPage