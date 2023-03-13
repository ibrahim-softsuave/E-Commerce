import React from 'react'

const SignUp = (props) => {
    return (
        <>
            <form className='signin-container-items item3'>
                <input type='text' placeholder='Name'></input>
                <input type='text'></input>
                <input type='email' placeholder='Email'></input>
                <input type='password'></input>
                <div className='form-child'>
                    <p onClick={props.fun}>sign in</p>
                </div>
                <div>
                    <input id='terms' type='checkbox'></input>
                    <label htmlFor='terms'>I accept the Terms of use and Privacy policy</label>
                </div>
                <input type='submit' value='Submit'></input>
            </form>
        </>
    )
}

export default SignUp