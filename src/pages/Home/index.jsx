import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <figure className={styles.main__image}>
        <img src="witch.png" alt="imagen de una bruja" />
      </figure>
      <div className={styles.main__content}>
        <p>Sábado 26 de octubre del 2024 en la calle principal</p>
        <h1>NOCHE DE ESPECTROS Y RITMOS</h1>
        <p>Únete a la fiesta de Halloween mäs espeluznante de la ciudad</p>
        <Link to={'/compra-ticket'}>
          <button>Comprar ticket</button>
        </Link>
      </div>
    </div>
  )
}

export { Home }