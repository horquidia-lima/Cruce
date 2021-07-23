import React,{useState, useContext} from 'react'
import { ContextList } from '../../Context/ContextList'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
//import { useParams } from 'react-router-dom'


export const Form = () => {
    const [products, setProducts] = useContext(ContextList)

    const [newName, setNewName] = useState('')
    const [newImg, setImg] = useState('')
    const [newPrice, setPrice] = useState('')
    const [newStock, setStock] = useState('')

    //const {id} = useParams()

    const addProduct =   (e) => {
        e.preventDefault()
        const productObject = {
            name: newName,
            price: newPrice,
            stock: newStock,
            image: newImg,
            id: products.length + 1,
        }

        axios
        .post('http://localhost:3001/api/products', productObject)
        .then(response => {
            setProducts(products.concat(response.data))
            setImg('')
            setNewName('')
            setPrice('')
            setStock('')
        })

    }

    const handleNameChange = (e) => {
        setNewName(e.target.value)
        //console.log(e.target.value)
    }

    const handleImgChange = (e) => {
        setImg(e.target.value)
        //console.log(e.target.value)
    }

    const handlePriceChange = (e) => {
        setPrice(e.target.value)
        //console.log(e.target.value)
    }

    const handleStockChange = (e) => {
        setStock(e.target.value)
        //console.log(e.target.value)
    } 

    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <a className="navbar-brand" href="/">
                    <img src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo"/>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Catalogo</a>
                    </li>
                </ul>
            </nav>

            <div className="container-fluid mt-4">
            <div className="card">
                <div className="card-body">
                <form onSubmit={addProduct}> 
                    <div className="row">
                    <div className="col mb-4">
                        <img src="http://via.placeholder.com/150x150" className="rounded" alt="img"/>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                        <label>URL de la imagen</label>
                        <input className="form-control" type="url" name="image" 
                            value={newImg}
                            placeholder="http://via.placeholder.com/150x150"
                            onChange={handleImgChange}
                        />
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                        <label>Nombre del producto</label>
                        <input className="form-control" type="text" name="name"
                        value={newName}
                        onChange={handleNameChange}/>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                        <label>Precio</label>
                        <input className="form-control" type="number" name="price"
                          value={newPrice}
                          onChange={handlePriceChange}/>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-3">
                        <div className="form-group">
                        <label>Stock</label>
                        <input className="form-control" type="number" name="price"
                          value={newStock}
                          onChange={handleStockChange}/>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-sm-12">
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary">Guardar</button>
                        <button type="submit" className="btn btn-light">Volver</button>
                        </div>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
    )
}
