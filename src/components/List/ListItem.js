import React from 'react'
import {List} from './List'

export const ListItem = ({products}) => {
    return (
        <div>
           {products.map(list => (
               <List list={list} key={list.id}/>
           ))}
        </div>
    )
}
