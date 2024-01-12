import React from 'react'
import { Link } from 'react-router-dom'
import "./index.scss"
const Navbar = () => {
  return (
    <nav id='navbar'>
<div className="nav">
    <div className="logo">
        <Link>Nitro</Link>
    </div>
    <div className="navigations">
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link>About Us</Link>
            </li>
            <li>
                <Link to="/add">Add</Link>
            </li>
            <li>
                <Link to="/wish">Wishlist</Link>
            </li>
            <li>
                <Link>Blog</Link>
            </li>
            <li>
                <Link>Contact</Link>
            </li>
            <li>
                <Link>Services</Link>
            </li>
        </ul>
    </div>
</div>
    </nav>
  )
}

export default Navbar