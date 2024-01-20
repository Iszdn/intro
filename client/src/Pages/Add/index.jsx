import React, { useEffect, useState } from 'react'
import FormAdd from '../../components/Form'
import axios from "axios"
import "./index.scss"
import { Helmet } from 'react-helmet-async'
const AddPage = () => {
    const [data, setData] = useState([])
    const [property, setProperty] = useState(null)
    const [search, setsearch] = useState("")
    async function getData() {
        const res = await axios("http://localhost:8000/")
        setData(res.data)
    }

    async function deleteIntro(id) {
        const res = await axios.delete(`http://localhost:8000/${id}`)
        getData()
    }



    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Helmet>
                <title>Add</title>
            </Helmet>
            <div className='table'>

                <FormAdd getData={getData} />
                <div className="filter">
                    <button onClick={()=>setProperty({name:"title",asc:true})}>a-z</button>
                    <button onClick={()=>setProperty({name:"title",asc:false})}>z-a</button>
                    <button onClick={()=>setProperty({name:"title",asc:null})}>default</button>
                    <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} />
                </div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>image</th>
                                <th>title</th>
                                <th>desc</th>
                                <th>del</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data && data
                                    .filter(x => x.title.toLowerCase().includes(search.toLowerCase()))
                                  .sort((a,b)=>{
                                    if (property && property.asc === true) {
                                      return  (a[property.name].toLowerCase() > b[property.name].toLowerCase()) ? 1 : ((b[property.name].toLowerCase() > a[property.name].toLowerCase()) ? -1 : 0);
                                    }
                                    else if (property && property.asc === false) {
                                        return  (a[property.name].toLowerCase() < b[property.name].toLowerCase()) ? 1 : ((b[property.name].toLowerCase() < a[property.name].toLowerCase()) ? -1 : 0)
                                      }
                                      else{
                                        return 0;
                                      }
                                  })
                                    .map(x =>
                                        <tr>
                                            <td><i className={x.image}></i></td>
                                            <td>{x.title}</td>
                                            <td>{x.description}</td>
                                            <td><button onClick={() => deleteIntro(x._id)}>x</button></td>
                                        </tr>
                                    )

                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default AddPage