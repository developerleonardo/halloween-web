import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
    
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <NavLink 
                    to='/'>
                        <img src="ghost.png" alt="" />
                        Noche de espectros y ritmos
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink 
                    to='/'
                    className={({isActive}) => isActive ? styles.active : ''}
                    >
                        Inicio
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/nosotros'
                    className={({isActive}) => isActive ? styles.active : ''}>
                        Acerca de nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/salas'
                    className={({isActive}) => isActive ? styles.active : ''}>
                        Salas
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/galeria'
                    className={({isActive}) => isActive ? styles.active : ''}>
                        Galería
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/contacto'
                    className={({isActive}) => isActive ? styles.active : ''}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/compra-ticket'>
                        Comprar
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export { Navbar } 