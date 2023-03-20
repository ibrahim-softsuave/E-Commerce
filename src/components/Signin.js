import React, { useEffect, useState } from 'react'
import './Signin.css'
import * as BSIcons from 'react-icons/bs'
import * as FCIcons from 'react-icons/fc'
import SignUp from './SignUp'
import Visibility from '../visibility.svg'
import VisibilityOff from '../visibility-off.svg'
import { IconContext } from "react-icons/lib";
import axios from './axios'
const SIGNIN = '/login'



const Signin = (props) => {
    const isSiginUp = props.signUp;
    const handleSignIn = props.signUpFun;
    const visibileError = props.visibileError;
    const SetVisibileError = props.SetVisibleError;
    const SetSignInSuccess=props.signInSuccess;
    const [visible, SetVisible] = useState(false);
    const [formDatas, SetFormDatas] = useState({ signInEmail: '', signInPassword: '' });
    const [errors, SetErrors] = useState({ email: '', password: '' });
    const [signinError, SetSignInError] = useState({});
    const [isSuccess, SetIsSuccess] = useState(false);
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSuccess) {
            async function signinAPI() {
                await axios.post(SIGNIN, { username: formDatas.signInEmail, password: formDatas.signInPassword })
                .then(response => {
                    SetSignInSuccess(true)
                    localStorage.setItem('signin',JSON.stringify(response.data.id))
                    console.log(response)
                  
                })
                .catch(error => {
                    if (error.code === 'ERR_NETWORK') {
                        SetSignInError({ networkError: 'sorry for inconvineant we face some network issues,please try after some time!!!' })
                    }
                    else if (error.response.data.status === "Error") {
                        SetSignInError({ incorrect: 'The password is incorrect' })
                    }
                    else if (error.response.data.status === false) {
                        SetSignInError({ username: 'The user does not exist! check the username or register' })
                    }

                })

            }
            signinAPI();
        }
    }, [errors]);
    if (!props.open) {
        return null
    };

    const handleChange = (e) => {
        SetFormDatas({ ...formDatas, [e.target.name]: e.target.value })
        if (e.target.name === 'signInPassword') {
            SetSignInError(values => ({ ...values, incorrect: '', networkError: '' }))
        }
        else if (e.target.name === 'signInEmail') {
            SetSignInError(values => ({ ...values, username: '', networkError: '' }))
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        SetVisibileError(true);
        SetErrors(validate());
        SetIsSuccess(true);

    };
    const validate = () => {
        const error = {};
        if (!formDatas.signInEmail) {
            error.email = 'please enter a email or phone number'
        }
        if (!formDatas.signInPassword) {
            error.password = 'please enter a password'
        }
        return error
    };

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
                        <div className='user_type'>
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
                        <p><strong>Sign-in-with</strong></p>
                        <IconContext.Provider value={{ color: '#fff' }}>
                            <span className='signin-icons whatsapp'> <BSIcons.BsWhatsapp /> </span>
                        </IconContext.Provider>
                        <span className='signin-icons'>  <FCIcons.FcGoogle /> </span>
                        <IconContext.Provider value={{ color: '#3b5998' }}>
                            <span className='signin-icons'>  <BSIcons.BsFacebook /> </span>
                        </IconContext.Provider>

                    </div>
                    {isSiginUp ?
                        <>
                            <SignUp fun={handleSignIn} values={[visible, SetVisible]} />
                        </>
                        :
                        <>
                            <form className='signin-container-items item3' onSubmit={handleSubmit} >
                                <div className='form-input'><input type='text' placeholder='username' name='signInEmail' value={formDatas.signInEmail} onChange={handleChange}></input>
                                    {visibileError ? <p className='form-errors'>{errors.email}</p> : ''}
                                </div>
                                <div className='form-password'>
                                    <div className='password-items1'>
                                        <input type={visible ? 'Text' : 'password'} placeholder='password' name='signInPassword' value={formDatas.signInPassword} onChange={handleChange}></input>
                                        {visible ? <span className='pass-span'> <img className='nav-img' src={Visibility} alt='' onClick={() => SetVisible(false)}></img> </span>
                                            : <span className='pass-span'> <img className='nav-img' src={VisibilityOff} alt='' onClick={() => SetVisible(true)}></img> </span>}
                                    </div>
                                    {visibileError ? <p className='form-pass-errors'>{errors.password}</p> : ''}
                                </div>

                                <div className='form-child'>
                                    <p onClick={handleSignIn}>sign up</p>
                                    <p>Forgot your password</p>
                                </div>
                                {signinError.networkError ? <p className='form-errors'>{signinError.networkError}</p> : ''}
                                {signinError.username ? <p className='form-errors'>{signinError.username}</p> : ''}
                                {signinError.incorrect ? <p className='form-errors'>{signinError.incorrect}</p> : ''}

                                <div className='form-submit'> <button>Sign In</button> </div>
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