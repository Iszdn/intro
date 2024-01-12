import React, { useContext, useEffect, useState } from 'react'
import axios  from "axios"
import { Link } from 'react-router-dom'
import "./index.scss"
import { WishlistContext } from '../../../context/WishlistContext'
import Card from '../../Card'
const ServiceSection = () => {

    const {wish,addWish}=useContext(WishlistContext)
console.log(wish);
const [data, setData] = useState([])

async function getData() {
    const res=await axios("http://localhost:8000/")
    setData(res.data)
}

useEffect(() => {
 getData()
}, [])

  return (
    <section id='service-sec'>
       <div className="header">

<h3>Our Services</h3>
</div>
<div className="container">
<div className="row"> 


{
    data && data.map(x=>
   <div className='col-lg-4 col-md-6 col-12'>
<Card {...x}/>
</div>
    )
}
</div>   
</div>
    </section>
  )
}

export default ServiceSection