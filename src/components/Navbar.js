// import * as BSIcons from 'react-icons/bs'
// import * as MDIcons from 'react-icons/md'
import title from '../title.webp'
import search from '../search.svg'
import cart from '../cart.svg'
import collection from '../collection.svg'
import gi from '../GI.svg'
import social from '../social.svg'
import { useState } from 'react'
import SignIn from './Signin'

import './Navbar.css'
const Navbar =()=>
{
    const [isOpen,SetIsOpen]=useState(false)
    const handleSidebar =()=>{
        return(
            SetIsOpen(!isOpen)
        )
    }
    return (
        <header>
        <nav className='flex-container'>
          <div className='item1'>
            <span className='nav-span'> <img className='nav-img'  src={title} alt='unipick'/>
            </span> 
            <div className='nav-search'>
            <select>
              <option>All Catagory</option>
              <option>Wellness</option>
              <option>Food</option>
              <option>Home</option>
              <option>Art & Craft</option>
              <option>Hobies & Experiments</option>
              <option>Fashion</option>
              <option>Accessories & Jewellary</option>
              <option>Electronics</option>
              <option>Tools $ Supplies</option>
              </select>
              <div className='search-icon-bar'> 
              <img className='search-img' src={search} alt='search'></img>
            <input type='search' placeholder='Search items...'></input>
            </div>
            </div>
            </div>
            <div className='item2'>
            <ul>
            <li className='nav-left'><img className='nav-img' src={cart} alt='cart'></img>cart</li>
            <li className='nav-left'><img className='nav-img' src={gi} alt='location'></img>GI</li>
            <li className='nav-left'><img className='nav-img' src={collection} alt='collection'></img>Collection</li>
            <li className='nav-left'><img className='nav-img' src={social} alt='Social'></img>social</li>
            <li><button onClick={handleSidebar}>Sign Up</button></li>
            </ul>
            </div>
        </nav>
        <SignIn open={isOpen} onClose={handleSidebar}/>
        <hr></hr>
      </header>
    )
}
export default Navbar