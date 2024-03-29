import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios"
import { Helmet } from 'react-helmet-async'
const DetailsPage = () => {
const [data, setData] = useState(null)
    const {id}=useParams()

   async function getId() {
    const res=await axios(`http://localhost:8000/${id}`)    
    setData(res.data)
    }
useEffect(() => {
getId()
}, [])

  return (
    <>
     <Helmet>
    <title>Details</title>
   </Helmet>
{
    data && 
    <ul>
        <li>{data.image}</li>
        <li>{data.title}</li>
        <li>{data.description}</li>
    </ul>
}
    </>
  )
}

export default DetailsPage