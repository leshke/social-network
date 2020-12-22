import React from 'react'
import s from './Login.module.css'
import classnames from 'classnames';

const Circles = () => {
    const makeClassName = (style) => {
      return classnames(s.circle, style)
    }

    return <div className={s.container}>
        <div className={makeClassName(s.small)}></div>
        <div className={makeClassName(s.medium)}></div>
        <div className={makeClassName(s.large)}></div>
        <div className={makeClassName(s.xLarge)}></div>
        <div className={makeClassName(s.xxLarge)}></div>
    </div>
}

export default Circles