// import * as BSIcons from 'react-icons/bs'
// import * as MDIcons from 'react-icons/md'
import title from '../title.webp'
import search from '../search.svg'
import cart from '../cart.svg'
import collection from '../collection.svg'
import gi from '../GI.svg'
import social from '../social.svg'
import { useState, useEffect } from 'react'
import SignIn from './Signin'
import './Navbar.css'
import * as CGIcons from 'react-icons/cg'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, SetIsOpen] = useState(false);
  const [isSiginUp, SetSiginUp] = useState(false);
  const [visibileError, SetVisibleError] = useState(false);
  const [signinSuccess, SetSignInSuccess] = useState(false);
  const [alreadySigIN, SetAlreadySignIn] = useState(false);
  const [sigindropdown, SetSiginDropdown] = useState(false);
  useEffect(
    () => {
      if (localStorage.getItem('signin')) {
        SetAlreadySignIn(true)
      }
    }, []
  )
  const handleSidebar = () => {
    return (
      SetIsOpen(!isOpen),
      SetSiginUp(false),
      SetVisibleError(false)
    )
  }
  const handleSignIn = () => {
    return (
      SetSiginUp(!isSiginUp)
    )
  }
  const signinDropdown = () => {
    SetSiginDropdown(!sigindropdown);
  }
  const handleLogout = () =>{
    if (localStorage.getItem('signin')) {
      localStorage.removeItem('signin');
    }
    SetAlreadySignIn(false);
    SetSignInSuccess(false);
    SetSiginDropdown(!sigindropdown);
  }
  return (
    <header>
      <nav className='flex-container'>
        <div className='nav-item1'>
          <span className='nav-span'> <img className='nav-img' src={title} alt='unipick' />
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
        <div className='nav-item2'>
          <ul>
            <li className='nav-left'><img className='nav-img' src={cart} alt='cart'></img>cart</li>
            <li className='nav-left'><img className='nav-img' src={gi} alt='location'></img>GI</li>
            <li className='nav-left'><img className='nav-img' src={collection} alt='collection'></img>Collection</li>
            <li className='nav-left'><img className='nav-img' src={social} alt='Social'></img>social</li>
            {signinSuccess || alreadySigIN ?
              <li className='nav-left'>
                <p className='pro-icon' onClick={signinDropdown}>
                  <IconContext.Provider value={{ className: 'icon1' }}>
                    <CGIcons.CgProfile />
                  </IconContext.Provider>
                </p><span>Me</span>
                <div className={sigindropdown ? 'view show' : 'view'}>
                  <p><button className='btn' onClick={handleLogout}>Logout</button></p>
                  <div className='alert'>
                    <p>Are you sure wants to signout?</p>
                    <div><p>Yes</p><p>No</p></div>
                  </div>
                </div>
              </li>
              :
              <li>
                <button onClick={handleSidebar}>Sign Up</button>
              </li>
            }
          </ul>
          
        </div>
      </nav>
      {signinSuccess || alreadySigIN ? '' : <SignIn
        open={isOpen}
        onClose={handleSidebar}
        signUp={isSiginUp}
        signUpFun={handleSignIn}
        visibileError={visibileError}
        SetVisibleError={SetVisibleError}
        signInSuccess={SetSignInSuccess}
      />}
      <hr></hr>
      <div className='diff-pages'>
        <div className='diff-pages-items'>
          <p> <Link to='/explore-all' className='paths'>Explore All</Link></p>
          <p>Wellness</p>
          <p>Food</p>
          <p>Home</p>
          <p>Art & Craft</p>
          <p>Hobies & Experiments</p>
          <p>Fashion</p>
          <p>Accessories & Jewellary</p>
          <p>Electronics</p>
          <p>Tools $ Supplies</p>
        </div>
      </div>
    </header>
  )
}
export default Navbar