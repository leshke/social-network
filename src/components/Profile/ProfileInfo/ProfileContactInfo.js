import React from 'react'
import s from './ProfileInfo.module.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const ProfileContactInfo = ({ userProfile }) => {

    const switchIcon = (iconLogo) => {
        switch (iconLogo) {
            case 'facebook':
                return <FacebookIcon htmlColor="#4867aa" />
            case 'instagram':
                return <InstagramIcon htmlColor="#e6004c" />
            case 'website':
                return <LanguageIcon htmlColor="#f3b604" />
            case 'twitter':
                return <TwitterIcon htmlColor="#1da1f2" />
            case 'youtube':
                return <YouTubeIcon htmlColor="#ff0000" />
            case 'vk':
                return <LinkedInIcon htmlColor="#0a66c2" />
            case 'github':
                return <GitHubIcon htmlColor="#3f2e00" />
            case 'mainLink':
                return <MailOutlineIcon htmlColor="#32a350" />
            default:
                return null;
        }
    }

    return (
        <div className={s.profileInfo}>
            <h3>Profile Info</h3>
            <ul className={s.profileInfoList}>
                <li className={s.item}>
                    <h4>Name:</h4>
                    <p>{userProfile.fullName}</p>
                </li>
                <li className={s.item}>
                    <h4>About me:</h4>
                    <p>{userProfile.aboutMe || "about me"}</p>
                </li>
                <li className={s.item}>
                    <h4>Looking for a job:</h4>
                    <p>{userProfile.lookingForAJob ? "YES" : "NO"}</p>
                </li>
                <li className={s.item}>
                    <h4>Job description:</h4>
                    <p>{userProfile.lookingForAJobDescription || "looking For A Job Description"}</p>
                </li>
            </ul>
            <div>
                <h4>Contacts</h4>
                {
                    Object.keys(userProfile.contacts)
                        .map(link => {
                            return userProfile.contacts[link] ?
                                <div className={s.contactItem} key={link}>
                                    {switchIcon(link)}
                                    <a href={userProfile.contacts[link]}>{userProfile.contacts[link]}</a>
                                </div> :
                                null
                        })
                }
            </div>
        </div>
    )
}

export default ProfileContactInfo
