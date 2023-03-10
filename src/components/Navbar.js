import * as BSIcons from 'react-icons/bs'
import * as MDIcons from 'react-icons/md'
import title from '../title.webp'
import search from '../search.svg'
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
            <li><BSIcons.BsCart4/>cart</li>
            <li> <MDIcons.MdOutlineAddLocationAlt/>GI</li>
            <li><MDIcons.MdOutlineCollectionsBookmark/>Collection</li>
            <li><BSIcons.BsPersonVideo/>social</li>
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