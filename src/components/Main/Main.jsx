import React from 'react'
import routes from '../../AppRouter/routes'
import { Route, Routes } from 'react-router-dom'
import styles from './Main.module.css'

const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                {routes.map(route => <Route path={route.path} element={route.element} key={route.path} />)}
            </Routes>
        </main>
    )
}

export default Main
