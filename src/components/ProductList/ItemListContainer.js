import React, {useContext} from 'react'
//import axios from 'axios'
import {ItemList} from './ItemList'
import { ContextList } from '../../Context/ContextList'

export const ItemListContainer = (props) => {
    const [products] = useContext(ContextList)
    /*const baseUrl = 'http://localhost:3001/api/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                setProducts(response.data)
            })
    }, [])*/
    
    return (
        <div>
           <ItemList products={products}/>
        </div>
    )
}
