import React from 'react'
import styles from './styles.module.css'

export const Rutas = () => {
    return (
        <div className={styles.rutas}>
            <div>
                <ul>
                    <li>Inicio / </li>
                    <li>Juguetes / </li>
                    <li>Funko Pop</li>
                </ul>
            </div>
            <div>
                <label for="filter">Filtrar</label>
                <select id="filter">
                    <option value=""></option>
                </select>
            </div>
            <div>
                <select id="ordenar">
                    <option>Ordenar por</option>
                </select>
            </div>
        </div>
    )
}
