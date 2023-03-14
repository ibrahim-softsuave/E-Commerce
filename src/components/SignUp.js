import React from 'react'
import Visibility from '../visibility.svg'
import VisibilityOff from '../visibility-off.svg'

const SignUp = (props) => {
    return (
        <>
            <form className='signin-container-items item3'>
                <div className='form-input'><input type='text' placeholder='Name'></input></div>
                <div className='form-input'><input type='text' placeholder='Mobile Number'></input></div>
                <div className='form-input'><input type='text' placeholder='Email'></input></div>
                <div className='password-items1'>
                    <input type={props.values[0] ? 'Text' : 'password'} placeholder='password'></input>
                    {props.values[0] ? <span className='pass-span'> <img className='nav-img' src={Visibility} alt='' onClick={() => props.values[1](false)}></img> </span>
                        : <span className='pass-span'> <img className='nav-img' src={VisibilityOff} alt='' onClick={() => props.values[1](true)}></img> </span>}
                </div>
                <div className='form-child'>
                    <p onClick={props.fun}>sign in</p>
                </div>
                <div className='form-terms'>
                    <input id='terms' type='checkbox'></input>
                    <label htmlFor='terms'>I accept the <span>Terms of use</span> and <span>Privacy policy</span></label>
                </div>
                <div className='form-submit'> <button>Sign Up</button> </div>
            </form>
        </>
    )
}

export default SignUp