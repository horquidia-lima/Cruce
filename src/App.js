import Header from "./components/Header/Header";
import { ItemListContainer } from "./components/ProductList/ItemListContainer";
import { Rutas } from "./components/Rutas/Rutas";
import { Form } from "./components/Form/Form";
import { ListProvider } from "./Context/ContextList";
import { ListContainer } from "./components/List/ListContainer";
import app from './styles/app.module.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const  App = () => {
  return (
    <Router>
      <div className={app.wrapper}>
        <Switch>
          <ListProvider>
            <Route exact path="/">
              <Header/>
              <Rutas/>
              <ItemListContainer/>
            </Route>
            <Route path="/list">
              <ListContainer />
            </Route>
            <Route path="/form/:id">
              <Form/>
            </Route>
          </ListProvider>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
