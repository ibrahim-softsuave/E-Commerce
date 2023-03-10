import React, { useState } from 'react'
import './Signin.css'
import * as BSIcons from 'react-icons/bs'
import * as FCIcons from 'react-icons/fc'

const Signin = (props) => {
    const[isSiginUp,SetSiginUp]=useState(false);
    const handleSignIn=()=>{
        return(
            SetSiginUp(!isSiginUp)
        )
    }
    if (!props.open) {
        return null
    }
    return (
        <>
            <div className='overlay'></div>
            <div className='signin'>
                <div className='signin-container'>
                    <div className='signin-container-items item1'>
                        <p>Welcome to the amazing world of Unipick!</p>
                        <button className='close' onClick={props.onClose}>X</button>
                    </div>
                    <p>Your gateway to all things sustainable, creative, cultural and handcrafted with love!</p>
                    <div className='signin-container-items item2'>
                        <p>Sign-in-with</p>
                        <BSIcons.BsWhatsapp/>
                        <FCIcons.FcGoogle/>
                        <BSIcons.BsFacebook/>   
                    </div>
                    <form className='signin-container-items item3'>
                            <input type='text' placeholder='Email or Mobile Number'></input>
                            <input type='password' placeholder='password'></input>
                            <div className='form-child'>
                            <p onClick={handleSignIn}>sign up</p>
                            <p>Forgot your password</p>
                            </div>
                            <input type='submit' value='Submit'></input>
                    </form>
                    <div className='signin-container-items item4'>
                    By clicking Sign in or Sign in with Google or Facebook or WhatsApp, you agree to Unipick's Terms of Use and Privacy Policy. Unipick may send you communications. You may change your preferences in your account settings.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signin