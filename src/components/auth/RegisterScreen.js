import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';
import { emailValidation, emptyField, required } from '../../validations/formValidations';

const render = ({input,label,type,meta:{ touched,error,warning}}) => {
    return(
        <div>
            <input 
                {...input}
                type={type}
                placeholder={label}
                className='auth__input'
                autoComplete='off'
            />
            {
                touched && ((error && <span style={{margin:0}} className='badge badge-info'>{error}</span>) || (warning && <span>{warning}</span>))
            }
        </div>
    )
}
const RegisterScreen = ({ register,handleSubmit,startRegisterWithEmailAndPassword }) => {

    const handleSubmitRegister = () =>{
        const { values:{ email,password} } = register;
        startRegisterWithEmailAndPassword(email,password);
    }
    return (
        <div>
            <h3 className='auth__tittle'>Login</h3>
            <form onSubmit={ handleSubmit( handleSubmitRegister ) }>
                <Field 
                    type='text'
                    placeholder='Name'
                    name='name' 
                    label='Name'
                    component={render}
                    validate={[emptyField,required]}
                />
                <Field 
                    type='Email'
                    placeholder='Email'
                    name='email'
                    label='Email' 
                    component={render}
                    validate={[emailValidation]} />
                <Field 
                    type='password'
                    placeholder='Password'
                    name='password' 
                    label='password'
                    component={render}
                    validate={[emptyField,required]} />
                <Field 
                    type='password'
                    placeholder='Confirm Password'
                    name='confirm_password' 
                    label='confirm password'
                    component={render}
                    validate={[emptyField,required]} />
                <button 
                    type='submit'
                    className='btn btn-primary btn-block mb-3'
                    >
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

const mapStateToProps = state => {
    
    const { form: { register } } = state;
    return {
        register
    }
};
const mapDispatchToProps = dispatch => ({
    startRegisterWithEmailAndPassword: (user,password) => dispatch(startRegisterWithEmailAndPassword(user,password))
});

const decorate = connect(mapStateToProps,mapDispatchToProps)(RegisterScreen);

export default reduxForm({
    form:'register'
})(decorate);