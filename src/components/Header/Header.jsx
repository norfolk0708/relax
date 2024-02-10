import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo/Logo'
import NavBar from './NavBar/NavBar'

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <NavBar />
        </header>
    )
}

export default Header
