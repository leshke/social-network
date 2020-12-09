import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return <>
        <ProfileInfo userProfile={props.userProfile}
            status={props.userProfileStatus}
            updateStatus={props.updateStatus}
            saveProfilePhoto={props.saveProfilePhoto}
            isOwner={props.match.params.userId}
            saveProfileInfo={props.saveProfileInfo}
            inputError={props.inputError} />
        <MyPosts
            avatarImg={props.avatarImg}
            addPost={props.addPost}
            profileState={props.profileState.posts}
            updatePost={props.updatePost}
            loginName={props.loginName}
            toggleLike={props.toggleLike} 
            isOwner={props.match.params.userId}/>
    </>
}

export default Profile;