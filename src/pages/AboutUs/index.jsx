import React from 'react'
import styles from './AboutUs.module.css'

const AboutUs = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>ACERCA DE NOSOTROS</h2>
        <p>Por más de 15 años, nuestra fiesta de Halloween ha sido el evento más esperado en la ciudad, atrayendo a quienes buscan vivir una noche llena de misterio, música y sorpresas escalofriantes. Lo que comenzó como un pequeño encuentro entre amigos, se ha transformado en una celebración legendaria, conocida por sus espectaculares disfraces, ambiente envolvente y las más intensas pistas de baile. Aquí, cada año, las almas más valientes se reúnen para disfrutar de una noche inolvidable.

          Al caer la noche, todos los asistentes deben llegar disfrazados... pero no cualquier disfraz. Aquí, la imaginación y la oscuridad se fusionan, creando criaturas que parecen haber salido de las pesadillas más profundas. El código de vestimenta es claro: si no te disfrazas, no entras. Este no es solo un evento, es una inmersión en el terror.

          Y cuando el reloj marque la media noche, un evento especial sacudirá la fiesta: los mejores disfraces serán seleccionados, tanto entre hombres como mujeres, y aquellos que consigan impresionar a los jueces del inframundo recibirán premios espectaculares. Solo los más creativos y osados se llevarán estos honores, así que ven preparado para deslumbrar... o asustar.</p>
      </div>
      <figure className={styles.us_img}>
        <img src="about-us.png" alt="" />
      </figure>
    </section>
  )
}

export { AboutUs }