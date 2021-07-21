import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {ItemList} from './ItemList'

export const ItemListContainer = () => {
    const baseUrl = 'http://localhost:3001/api/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                setProducts(response.data)
            })
    }, [])
    
    return (
        <div>
           <ItemList products={products}/>
        </div>
    )
}
