import React from 'react'
import styles from './Card.module.css'
import { Modal } from '../Modal'

const Card = ({title, img, text, menu, openMenu, setMenu}) => {
  return (
    <div className={styles.card}>
        <h3>{title}</h3>
        <img src={img} alt="" />
        <p>{text}</p>
        <button onClick={() => openMenu(title)}>Ver más</button>
        <Modal menu={menu} setMenu={setMenu} />
    </div>
  )
}

export { Card }