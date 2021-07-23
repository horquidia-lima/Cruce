import React, {useContext} from 'react'
//import axios from 'axios'
import {ItemList} from './ItemList'
import { ContextList } from '../../Context/ContextList'

export const ItemListContainer = (props) => {
    const [products] = useContext(ContextList)    
    return (
        <div>
           <ItemList products={products}/>
        </div>
    )
}
