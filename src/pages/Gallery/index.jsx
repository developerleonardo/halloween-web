import React, { useState } from 'react'
import styles from './Gallery.module.css'
import { WinnerCard } from '../../components/WinnerCard'
import winners from './winners.json'

const Gallery = () => {

  const [winnerList, setWinnerList] = useState(winners);
  const [winnerYear, setWinnerYear] = useState('');

  const filterByCategory = (category) => {
    const filteredWinners = winners.filter((winner => winner.category === category));
    setWinnerList(filteredWinners);
  }

  const filteredWinnerList = winnerList.filter((winner) => winner.year.includes(winnerYear));

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <button onClick={() => setWinnerList(winners)}>Todos</button>
        <button onClick={() => filterByCategory("men")}>Hombre</button>
        <button onClick={() => filterByCategory("women")}>Mujer</button>
        <div className={styles.inputContainer}>
          <label htmlFor="year">Año</label>
          <input 
          type="text" 
          name='year' 
          id='year' 
          placeholder='Buscar año'
          value={winnerYear}
          onChange={(event) => setWinnerYear(event.target.value)}
          />
        </div>
      </aside>
      <div className={styles.cardsContainer}>
        {
          filteredWinnerList.map((winner) => 
          (
            <WinnerCard
              key={winner.id}
              name={winner.name}
              year={winner.year}
              category={winner.category}
              image={winner.image}
            />
          ))
          
        }
      </div>
    </div>
  )
}

export { Gallery }