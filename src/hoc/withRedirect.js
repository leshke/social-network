import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
//fix delete connect
let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export let withAuthRedirect = (Component) => {
    let redirectComponent = (props) => {
        if (!props.isAuth) return <Redirect to='/login' />

        return <Component { ...props}/>
    }
    return connect(mapStateToProps)(redirectComponent)
}