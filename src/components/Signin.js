import React, { useState } from 'react'
import './Signin.css'
import * as BSIcons from 'react-icons/bs'
import * as FCIcons from 'react-icons/fc'
import SignUp from './SignUp'

const Signin = (props) => {
    const [isSiginUp, SetSiginUp] = useState(false);
    if (!props.open) {
        return null
    }
    const handleSignIn = () => {
        return (
            SetSiginUp(!isSiginUp)
        )
    }

    return (
        <>
            <div className='overlay'></div>
            <div className='signin'>
                <div className='signin-container'>
                    <div className='signin-container-items item1'>
                        <p><b>Welcome to the amazing world of Unipick!</b></p>
                        <button className='close' onClick={props.onClose}><b>X</b></button>
                    </div>
                    <p>Your gateway to all things sustainable, creative, cultural and handcrafted with love!</p>
                    {isSiginUp ? <>
                        <div>
                            <input id='consumer' type='radio' name='customerType' value='Consumer'></input>
                            <label htmlFor='consumer'>Consumer</label>
                            <input id='seller' type='radio' name='customerType' value='Seller'></input>
                            <label htmlFor='seller'>Seller</label>
                            <input id='curator' type='radio' name='customerType' value='Curator'></input>
                            <label htmlFor='curator'>Curator</label>
                        </div>
                    </> : ''
                    }
                    <div className='signin-container-items item2'>
                        <p>Sign-in-with</p>
                        <BSIcons.BsWhatsapp />
                        <FCIcons.FcGoogle />
                        <BSIcons.BsFacebook />
                    </div>
                    {isSiginUp ?
                        <>
                            <SignUp fun={handleSignIn} />
                        </>
                        :
                        <>
                            <form className='signin-container-items item3'>
                                <div className='form-input'><input type='text' placeholder='Email or Mobile Number'></input></div>
                                <div className='form-input'><input type='password' placeholder='password'></input>
                                </div>
                                <div className='form-child'>
                                    <p onClick={handleSignIn}>sign up</p>
                                    <p>Forgot your password</p>
                                </div>
                                <div className='form-input'><input type='submit' value='Submit'></input></div>
                            </form>
                            <div className='signin-container-items item4'>
                                By clicking Sign in or Sign in with Google or Facebook or WhatsApp, you agree to Unipick's Terms of Use and Privacy Policy. Unipick may send you communications. You may change your preferences in your account settings.
                            </div>
                        </>
                    }

                </div>
            </div>
        </>
    )
}

export default Signin