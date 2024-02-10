import React from 'react'
import NavIcon from '../NavIcon/NavIcon'

import styles from '../NavBar/NavBar.module.css'
import admin from '../../../icons/admin.png'
import list from '../../../icons/list.png'
import logout from '../../../icons/logout.png'
import orders from '../../../icons/orders.png'


const linksInfo = [
    { path: '/orderList', icon: orders },
    { path: 'productsEditor', icon: list },
    { path: '/', icon: admin },
    { path: '/', icon: logout }
]
const NavBar = () => {
    return (
        <nav>
            <ol className={styles.nav}>
                {linksInfo.map((info, i) => <NavIcon props={info} key={i} />)}
            </ol>
        </nav>
    )
}

export default NavBar
