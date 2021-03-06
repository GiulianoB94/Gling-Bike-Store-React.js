import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from '../src/components/itemListContainer/ItemListContainer';
import NavBar from './components/navBar/NavBar';
import React from "react";
import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import Layout from './components/Layout/Layout'
import Banner from '../src/components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout>
            <NavBar/>
            <Banner/>
            <Switch>
            <Route path="/" exact> 
              <ItemListContainer titulo = '' subtitulo= 'Gling Bike Store'/>
            </Route>
            <Route path="/:name/:">
              <ItemDetailContainer titulo = 'CATEGORIES' subtitulo= '75% OFF'/>
            </Route>
            <Route path="/:name/:id">
              <ItemDetailContainer titulo = 'PRUEBA' subtitulo= '75% OFF'/>
            </Route>
            </Switch>
            <Footer/>
        </Layout>
      </div>
    </BrowserRouter> 
  );
}

export default App;