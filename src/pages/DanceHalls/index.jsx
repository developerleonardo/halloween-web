import React, { useState } from 'react'
import { Card } from '../../components/Card'
import styles from './DanceHalls.module.css'

const DanceHalls = () => {
  const menuOptions = [
    {
      title: 'Ritmos del más allá',
      foods: ['Nachos del Más Allá', 'Croquetas de los condenados', 'Perritos Fantasmales', 'Fritos de la calavera'],
      drinks: ['Ron embrujado', 'Tequila de los espíritus', 'Cóctel de la Tumba', 'Sangría de los No Muertos']
    },
    {
      title: 'Fantasmas del perreo',
      foods: ['Dedos de zombi picantes', 'Hamburguesa de la Cripta', 'Alas de Murciélago crujientes', 'Tacos del Inframundo'],
      drinks: ['Sangre de Hombre Lobo', 'Elixir de las Sombras', 'Cerveza Espectral', 'Brujería en Botella']
    },
    {
      title: 'El aquelarre de la electrónica',
      foods: ['Pizza Hechizada', 'Fantasmitas de Queso Frito', 'Calabazas de Carne y Miedo', 'Palomitas Fantasmales'],
      drinks: ['Veneno Electrificado', 'Pócima de la Hechicera', 'Gin Tónico del Más Allá', 'Sangría de los No Muertos']
    },
  ]
  const [menu, setMenu] = useState(null);
  const cards = [
    {
      title: 'Fantasmas del perreo',
      img: 'reggaeton.png',
      description: 'Aquí, los espíritus del perreo no descansan hasta que el bajo haga temblar las tumbas. ¡Prepárate para una noche de reggaetón sobrenatural, donde el ritmo es tan fuerte que hasta los espectros bajan a perrear contigo!'
    },
    {
      title: 'El aquelarre de la electrónica',
      img: 'electro.png',
      description: 'En esta sala, las brujas de la música electrónica han conjurado los beats más potentes y hechizantes. Los hechizos de sintetizadores y bajos profundos te llevarán a un trance del que no querrás escapar. Únete al aquelarre y deja que la magia electrónica te posea. ¡Prepárate para una rave embrujada como nunca antes!'
    },
    {
      title: 'Ritmos del más allá',
      img: 'bailable.png',
      description: 'Si lo tuyo es el sabor latino con un toque fantasmal, esta es tu sala. En “Ritmos del Más Allá”, los espíritus caribeños se levantan de sus tumbas para bailar bachata y salsa. Deja que los tambores resuenen desde el inframundo mientras te pierdes en un torbellino de movimientos sensuales y sabrosos. ¡Aquí, hasta los muertos mueven la cintura!'
    }
  ];
  
  const openMenu = (title) => {
    const currentMenu = menuOptions.find(option => option.title === title);
    setMenu(currentMenu);
  }

  return (
    <section className={styles.slider}>
      <h2>SALAS TEMÁTICAS</h2>
      <div className={styles.halls}>
        <div className={styles.cards}>
          {
            cards.map((card, index) =>
              <Card key={index} title={card.title} img={card.img} text={card.description} menu={menu} openMenu={openMenu} setMenu={setMenu} />)
          }
        </div>
      </div>
    </section>
  )
}

export { DanceHalls }