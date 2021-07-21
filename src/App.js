import Header from "./components/Header/Header";
import { ItemListContainer } from "./components/ProductList/ItemListContainer";
//import {ItemList} from './components/ProductList/ItemList'
import { Rutas } from "./components/Rutas/Rutas";
import app from './styles/app.module.css'


const  App = () => {

  return (
    <div className={app.wrapper}>
      <Header/>
      <Rutas/>
     <ItemListContainer/>
    </div>
  );
}

export default App;
