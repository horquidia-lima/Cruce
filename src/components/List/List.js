import 'bootstrap/dist/css/bootstrap.min.css'
import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core'
import {Link} from 'react-router-dom'
import axios from 'axios'

export const List = ({products, setProducts}) => {

    const removeProduct = async (id, e) => {
        console.log(id)
        await axios.delete(`http://localhost:3001/api/products${id}`)
        const newProductList = products.filter((item) =>{
            return item.id !== id
        })

        setProducts(newProductList)
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

            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Precio</TableCell>
                            <TableCell>Acciones</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {products.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.price}</TableCell>
                                <TableCell>
                                    <Link to='/' className="fa fa-eye btn"/>   
                                   <Link to={'/form/' + item.id} className="fa fa-pencil btn">
                                    
                                   </Link>

                                    <i className="fa fa-trash btn" onClick={(e) => removeProduct(item.id, e)}></i>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
           
        </div>
    )
}
