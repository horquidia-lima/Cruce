import React, {useContext} from 'react'
import { ListItem } from './ListItem'
import { ContextList } from '../../Context/ContextList'

export const ListContainer = (props) => {

    const [products] = useContext(ContextList)
    return (
        <div>
            <ListItem products={products}/>
        </div>
    )
}

