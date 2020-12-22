import React from 'react'
import s from './ProfileInfo.module.css'
import avatar from '../../../assets/img/avatar.png';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';

const ProfilePhoto = (props) => {
    const handleSubmit = (e) => {
        if (e.target.files.length) {
            props.saveProfilePhoto(e.target.files[0])
        }
    }

    return <div className={s.avatarWrapper}>
        <div className={s.avatar}>
            <img src={props.photoLarge || avatar} alt="ava" />
            <div className={s.changePhoto}>
                {!props.isOwner ?
                    <label className={s.customFileUpload}>
                        <span data-tooltip="Upload new photo">
                            <SystemUpdateAltIcon htmlColor="#66bfff" fontSize="small" />
                        </span>
                        <input name="profilePhoto" type="file" onChange={handleSubmit} ></input>
                    </label> : ""}
            </div>
        </div>
    </div >
}

export default ProfilePhoto


