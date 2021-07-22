import Header from "./components/Header/Header";
import { ItemListContainer } from "./components/ProductList/ItemListContainer";
import { Rutas } from "./components/Rutas/Rutas";
import { Form } from "./components/Form/Form";
import app from './styles/app.module.css'
import { ListProvider } from "./Context/ContextList";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { ListContainer } from "./components/List/ListContainer";

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
            <Route path="/form">
              <Form/>
            </Route>
          </ListProvider>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
