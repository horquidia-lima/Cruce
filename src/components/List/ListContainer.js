import React, {useContext} from 'react'
import { List } from './List'
import { ContextList } from '../../Context/ContextList'

export const ListContainer = (props) => {

    const [products, setProducts] = useContext(ContextList)
    return (
        <div>
            <List products={products} setProducts={setProducts}/>
        </div>
    )
}

