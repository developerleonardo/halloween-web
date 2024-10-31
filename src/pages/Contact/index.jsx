import React from 'react'
import styles from './Contact.module.css'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <h1>CONTÁCTAME</h1>
        <p>¡Hola! Soy Leonardo Salazar. Si te ha interesado lo que has visto en esta página, o si tienes alguna pregunta, sugerencia o simplemente quieres compartir tus impresiones sobre el proyecto, no dudes en ponerte en contacto conmigo. Estoy siempre abierto a aprender, recibir feedback y colaborar en nuevas ideas. A continuación te dejo algunos medios a través de los cuales puedes comunicarte conmigo:</p>
        <div className={styles.contactWrapper}>
          <div className={styles.contact}>
            <p>Chatea conmigo</p>
            <a href='https://www.linkedin.com/in/leonardo-salazar-serna/'>Escríbeme</a>
          </div>
          <div className={styles.contact}>
            <p>¿Te gustaría revisar el repositorio del proyecto?</p>
            <a href='https://github.com/developerleonardo/halloween-web'>Repo</a>
          </div>
        </div>
      </div>
      <figure className={styles.img}>
        <img src="https://cdn.pixabay.com/photo/2024/10/06/03/42/ai-generated-9098951_640.jpg" alt="mi foto" />
      </figure>
    </div>
  )
}

export { Contact }