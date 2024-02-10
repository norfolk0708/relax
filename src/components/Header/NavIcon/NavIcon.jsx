import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../NavIcon/NavIcon.module.css'

const NavIcon = ({ props }) => {
    return (
        <Link to={props.path} key={props.path} className={styles.link}>
            <img src={props.icon} alt={props.path} className={styles.image} />
        </Link>
    )
}

export default NavIcon
