import React from 'react'
import { Link } from 'react-router-dom';

export const RegisterScreen = () => {
    return (
        <div>
            <h3 className='auth__tittle'>Login</h3>
            <form>
                <input 
                    type='text'
                    placeholder='Name'
                    name='name' 
                    className='auth__input' 
                    autoComplete='off'/>
                <input 
                    type='Email'
                    placeholder='Email'
                    name='email' 
                    className='auth__input' />
                <input 
                    type='password'
                    placeholder='Password'
                    name='password' 
                    className='auth__input' />
                <input 
                    type='password'
                    placeholder='Confirm Password'
                    name='confirm_password' 
                    className='auth__input' />
                <button type='submit' className='btn btn-primary btn-block mb-3'>
                    Login
                </button>

                <div className='auth__social-networks'>
                    <Link 
                        to='/auth/login'
                        className='link'
                        
                    >
                        Ya registrado
                    </Link>
                </div>

            </form>
        </div>
    )
}
