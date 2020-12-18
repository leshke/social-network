import React from 'react'
import s from './About.module.css'

const About = () => {
    return <div className={s.wrapper}>
        <h3>About this application</h3>
        <h4>Released features</h4>
        <ul className={s.list}>
            <li className={s.item}>
                <h5>Login: </h5>
                <ul>
                    <li>For authorization you need to enter test account data:
                     <mark>Email: free@samuraijs.com</mark> and
                     <mark>Password: free</mark>.</li>
                     <li><b>Note: </b>If you can't sign in please be sure that cookies is allowed. On Safari deactivate Prevent cross-tracking.</li>
                    <li>Implemented Fields validation and Captcha(if you pass 5 wrong data).</li>
                </ul>
            </li>
            <li className={s.item}>
                <h5>Profile: </h5>
                <ul>
                    <li>Edit profile info, status, avatar. All data will be saved on server side.</li>
                    <li>Post feature save data only in Redux state, so after refresh browser your data will be killed.</li>
                </ul>
            </li>
            <li className={s.item}>
                <h5>Users: </h5>
                <ul>
                    <li>Displays a list all users of a social network. Pagination works for 12 persons on one page,
                     so you can check their profile and follow/unfollow them. If you follow user it will be added to your friend list.</li>
                </ul>
            </li>
            <li className={s.item}>
                <h5>Friends: </h5>
                <ul>
                    <li>Check what users you followed.</li>
                </ul>
            </li>
            <li className={s.item}>
                <h5>Messages: </h5>
                <ul>
                    <li>This section works with fake messaging. </li>
                </ul>
            </li>
        </ul>
        <h4>In process</h4>
        <ul className={s.list}>
            <li className={s.item}>
                <p>Function search user by name, messaging, ui for modal Post.</p>
            </li>
        </ul>
    </div>
}

export default About

