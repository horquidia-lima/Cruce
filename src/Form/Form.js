import React, {useState, useEffect} from 'react'

export const Form = () => {
    const baseUrl = 'http://localhost:3001/api/products'

    const [data, setData] = useState([])
    return (
        <div>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">

            <a className="navbar-brand" href="#">
            <img src="http://www.e-cruce.com/wp-content/uploads/2019/10/cruce.svg" alt="logo" />
            </a>

            <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">Catalogo</a>
            </li>
            </ul>
            </nav>

            <div className="container-fluid mt-4">
            <div className="card">
            <div className="card-body">
                <form>
                <div className="row">
                    <div className="col mb-4">
                    <img src="http://via.placeholder.com/150x150" class="rounded"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    <div className="form-group">
                        <label>URL de la imagen</label>
                        <input className="form-control" type="url" name="image" value="http://via.placeholder.com/150x150">
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    <div className="form-group">
                        <label>Nombre del producto</label>
                        <input className="form-control" type="text" name="name">
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-3">
                    <div className="form-group">
                        <label>Precio</label>
                        <input className="form-control" type="number" name="price">
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
