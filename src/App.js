import './App.css';
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
            <Route path="/home" exact> 
              <ItemListContainer titulo = 'Proyecto React' subtitulo= 'Gling Bike Store'/>
            </Route>
            <Route path="/:Shop" exact>
              <ItemDetailContainer titulo = 'Shop' subtitulo= '75% OFF'/>
            </Route>
            </Switch>
            <Footer/>
        </Layout>
      </div>
    </BrowserRouter> 
  );
}

export default App;
