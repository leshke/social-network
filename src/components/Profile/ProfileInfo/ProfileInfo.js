import React, { useState } from 'react'
import s from './ProfileInfo.module.css'
import Preloader from '../../common/Preloader'
import ProfileStatus from './Status'
import ProfilePhoto from './ProfilePhoto';
import ProfileContactInfo from './ProfileContactInfo';
import ProfileContactForm from './ProfileContactForm';
import banner from '../../../assets/img/banner.jpg'
import SettingsIcon from '@material-ui/icons/Settings';

const ProfileInfo = ({ userProfile, isOwner, status,
    updateStatus, saveProfilePhoto, saveProfileInfo, inputError }) => {
        
    let [editMode, toggleEditMode] = useState(false)

    const onToggleEditMode = () => {
        if (!editMode) {
            toggleEditMode(true)
        }
        else {
            toggleEditMode(false)
        }
    }

    if (!userProfile) return <Preloader />

    return <div className={s.profileWrapper}>
        <div className={s.bannerWrapper}>
            <img className={s.banner} src={banner} alt='banner' />
            <div className={s.photoStatusWrapper}>
                <ProfilePhoto saveProfilePhoto={saveProfilePhoto}
                    photoLarge={userProfile.photos.large}
                    isOwner={isOwner} />
                <ProfileStatus isOwner={isOwner} status={status} updateStatus={updateStatus} />
            </div>
        </div>
        <div className={s.ProfileInfoWrapper}>
            
            {!isOwner ?
                <button className={s.editBtn} onClick={onToggleEditMode}>
                    <span data-tooltip="Edit"><SettingsIcon htmlColor="#66bfff" fontSize="small" /></span>
                </button> : null}
            {!editMode ?
                <ProfileContactInfo userProfile={userProfile} /> :
                <ProfileContactForm inputError={inputError}
                    saveProfileInfo={saveProfileInfo}
                    toggleEditMode={toggleEditMode}
                    userProfile={userProfile} />}
        </div>
    </div>
}

export default ProfileInfo