import React from 'react'
import { Form, Field } from 'react-final-form'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import { login } from '../../redux/reducer-auth'
import { required } from '../../validators/vaildators'
import { Input } from '../common/FormControl/FormControl'
import Circles from './CirclesAnimation'
import s from './Login.module.css'

const Login = ({ login, isAuth, captcha, error }) => {

    const onSubmit = (formData) => {
        login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }

    if (isAuth) {
        return <Redirect to="profile" />
    }

    return <div className={s.insideContainer}>
        <Circles />
        <div className={s.loginForm}>
            <h2>Sign in</h2>
            <p>Check page ABOUT or click
                <Link to="/about" className="btn btn-primary"><em> here </em></Link>
                 before login.</p>
            <Form onSubmit={onSubmit} render={({ handleSubmit, submitting }) => (
                <form onSubmit={handleSubmit}>
                    <label>Login</label>
                    <Field name="email" placeholder="Enter email" type="email" autoComplete="on" validate={required} render={Input} />
                    <label>Password</label>
                    <Field name="password" render={Input} placeholder="Password" validate={required} type="password" autoComplete="on" />
                    <label>Remember me</label>
                    <Field name="rememberMe" render={Input} type="checkbox" />

                    {captcha ? <img className={s.captcha} src={captcha} alt="captcha"></img> : null}
                    {captcha ? <Field name="captcha" render={Input} placeholder="Enter captcha" /> : null}

                    <button disabled={submitting} type="submit">Sign In</button>
                    {error && <span className={s.error}>{error}</span>}
                </form>
            )}
            />
        </div>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    captcha: state.auth.captcha
})

export default connect(mapStateToProps, { login })(Login)