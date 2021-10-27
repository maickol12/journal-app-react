import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {Field,reduxForm} from 'redux-form';
import { googleLogin, login, loginEmailPassword } from '../../actions/auth';

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => 
{
    return(
        <div>
            <input
                {...input} 
                type={type}
                placeholder={label}
                className='auth__input' 
                autoComplete='off'/>
        </div>
    )
}

const LoginScreen = (props) => {
    const { authReducer,form,authLogin,loginEmailPassword,googleLogin,handleSubmit } = props;
    const handleLogin = () => {
        const { login: { values } } = form;
        console.log(values);
        //authLogin(values);
        loginEmailPassword(values);
    }

    return (
        <div>
            <h3 className='auth__tittle'>Login</h3>
            <form onSubmit={ handleSubmit(handleLogin) }>
                <Field 
                    type='text'
                    label='email'
                    name='email' 
                    className='auth__input' 
                    autoComplete='off'
                    component={renderField}/>
                <Field 
                    type='password'
                    label='password'
                    name='password' 
                    className='auth__input'
                    component={renderField} />
                <button type='submit' className='btn btn-primary btn-block'>
                    Login
                </button>

                <div className='auth__social-networks'>
                    <p>Iniciar sesión con redes sociales</p>
                    <div className="google-btn" onClick={() => googleLogin()}>
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                    <Link 
                        to='/auth/register'
                        className='link'
                        
                    >
                        Crear una cuenta
                    </Link>
                </div>

            </form>
        </div>
    )
}



const mapStateToProps = state => {
    const { form,authReducer } = state;
    return {
        authReducer,
        form    
    }
}
const mapDispatchToPros = dispatch => ({
    authLogin: (user,password) => dispatch(login(user,password)),
    loginEmailPassword: payload => dispatch(loginEmailPassword(payload)),
    googleLogin: payload => dispatch(googleLogin(payload))
});

const decorate = connect(mapStateToProps,mapDispatchToPros)(LoginScreen);

export default reduxForm({
    form:'login'
})(decorate);