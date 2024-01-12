
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './Layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Pages/HomePage';
import AddPage from './Pages/Add';
import WishlistPage from './Pages/Wishlist';
import DetailsPage from './Pages/Details';
import { Helmet, HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {};
  return (

    <HelmetProvider context={helmetContext}>
        <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/> 
      <Route path='/add' element={<AddPage/>}/> 
      <Route path='/:id' element={<DetailsPage/>}/> 
      <Route path='/wish' element={<WishlistPage/>}/> 
    </Route>
  </Routes>
  </BrowserRouter>
    </HelmetProvider>


  )
}

export default App
