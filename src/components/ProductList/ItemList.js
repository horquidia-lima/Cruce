import React from 'react'
//import {products} from '../../data/products.json'
import { Item } from './item/Item'
import styles from './styles.module.css'

export const ItemList = ({products}) => {
    return (
        <div className={styles.itemList}>
            {products.map((list) => (
                <Item list={list} key={list.id}/>
            ))}
        </div>
    )
}
