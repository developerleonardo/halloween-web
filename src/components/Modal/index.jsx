import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ menu, setMenu }) => {
    const closeModal = () => {
        setMenu(null);
    }


    return (
        <>
            {menu &&
                <div className={styles.overlay}>
                    <dialog className={styles.dialog} open={!!menu}>
                        <form method="dialog">
                            <img className={styles.topImage} src="menu-img1.png" alt="imagen aterradora" />
                            <img className={styles.bottomImage} src="menu-img2.png" alt="imagen aterradora" />
                            <h3>MENÚ <br /> SALA {menu.title}</h3>
                            <h4>COMIDAS</h4>
                            <ol>
                                {menu.foods.map((food, index) => <li key={index}>{food}</li>)}
                            </ol>
                            <h4>BEBIDAS</h4>
                            <ol>
                                {menu.drinks.map((food, index) => <li key={index}>{food}</li>)}
                            </ol>
                            <button onClick={closeModal}>Cerrar</button>
                        </form>
                    </dialog>
                </div>
            }
        </>

    )
}

export { Modal }