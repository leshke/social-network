import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withRedirect';
import { addPost,toggleLike, getProfile, getStatus, updateStatus, saveProfilePhoto, saveProfileInfo } from '../../redux/reducer-profile';
import Profile from './Profile';

const ProfileAPI = ({ getProfile, getStatus, authorizedUserId, ...props }) => {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = authorizedUserId;
        }
        getProfile(userId);
        getStatus(userId);
    }, [getProfile, getStatus, authorizedUserId, props.match.params.userId])

    return <Profile {...props} />
}

const MapStateToProps = (state) => {
    return {
        profileState: state.profilePage,
        userProfile: state.profilePage.userProfile,
        userProfileStatus: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.id,
        inputError: state.profilePage.error,
        avatarImg: state.profilePage.avatar,
        loginName: state.auth.login,
    }
}

//compose
export default compose(
    connect(MapStateToProps, { addPost,toggleLike, getProfile, getStatus, updateStatus, saveProfilePhoto, saveProfileInfo }),
    withAuthRedirect,//hoc for authorisation redirect to login
    withRouter
)(ProfileAPI)
