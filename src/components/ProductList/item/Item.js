import React from 'react'
import styles from './styles.module.css'

export const Item = ({list}) => {

    const parcel = (list.price / 6).toFixed(2)

    return ( 
        <section className={styles.item}>
             <img src={list.image} alt={list.name}/>
            <div className={styles.description}>
                <h3>Funko</h3>
                <p>{list.name}</p>
                {list.stock > 0 ? (
                    <div className={styles.price}>
                        <h4>6 Cuotas s/interés de</h4>
                        <h5>${parcel}</h5>
                        <p>Final: <strong>${list.price}</strong></p>
                        <button></button>
                    </div>
                ) : (
                    <div className={styles.stock}>
                        <p>Final: <strong>Artículo sin stock</strong></p>
                        <button>Ver artículo</button>
                    </div>
                )}
            </div>  
        </section>
    )
}
