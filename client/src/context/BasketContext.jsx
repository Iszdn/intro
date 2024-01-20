import { createContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage"

export const BasketContext=createContext()



const BasketProvider = ({children}) => {
    const [basket, setBasket] = useLocalStorage("basket")
function addBasket(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket===-1) {
        setBasket([...basket,{...product,count:1}])
    }
    basket[existBasket].count++
}

function deleteBasket(product) {
    const deletedBasket=basket.filter(x=>x._id!==product._id)
    setBasket(deletedBasket)
}
function increaseBas(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket===1) {
    basket[existBasket].count++
    }
}
function decreaseBas(product) {
    const existBasket=basket.findIndex(x=>x._id===product._id)
    if (existBasket===1) {
    basket[existBasket].count--
    }
}
const data={
    basket, setBasket,deleteBasket,decreaseBas,increaseBas,addBasket
}
  return (
    <BasketContext.Provider value={data}>
{children}
    </BasketContext.Provider>
  )
}

export default BasketProvider