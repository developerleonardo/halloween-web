import React from 'react'
import styles from './WinnerCard.module.css'

const WinnerCard = ({ name, year, category, image, filterByCategory }) => {
  
  return (
    <div className={styles.winnerCard}>
        <img src={image} alt="winner img" />
        <p>{name}</p>
        <p>Ganador {year}</p>
    </div>
  )
}

export { WinnerCard }