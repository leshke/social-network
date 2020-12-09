import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../redux/reducer-auth';
import { getProfileAvatar } from '../../redux/reducer-profile';
import Header from './Header';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

const HeaderContainer = ({ isAuth, isOwner, ...props }) => {

    if (isAuth) {
        props.getProfileAvatar(isOwner)
    }

    return <Header isAuth={isAuth} {...props} />
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        avatar: state.profilePage.avatar,
        isOwner: state.auth.id,
    }
}

export default compose(
    connect(mapStateToProps, { logout, getProfileAvatar }),
    withRouter
)(HeaderContainer)