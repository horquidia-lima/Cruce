import 'bootstrap/dist/css/bootstrap.min.css'


export const List = ({list}) => {
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
                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Precio</th>
                        <th>&nbsp;</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><a href="/">{list.name}</a></td>
                            <td>{list.price}</td>
                            <td className="text-right">
                            <a href="form.html" className="btn"><i className="fa fa-eye"></i></a>
                            <a href="form.html" className="btn"><i className="fa fa-pencil"></i></a>
                            <a href="/" className="btn"><i className="fa fa-trash"></i></a>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    )
}
