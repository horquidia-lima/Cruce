import {useState, createContext, useEffect} from 'react'
import axios from 'axios'


export const ContextList = createContext()

export const ListProvider = (props) => {

    const baseUrl = 'http://localhost:3001/api/products'

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get(baseUrl)
            .then(response => {
                setProducts(response.data)
            })
    }, [products])

    
    return(
        <ContextList.Provider value={[products, setProducts]}>
            {props.children}
        </ContextList.Provider>
    )
}


