import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Header from "./common/Header";
import Homepage from './Homepage';
import Tutorial from './Tutorial';
import Imprensa from './Imprensa';
import Contactos from './Contactos';
import PageNotFound from "./common/PageNotFound";
import Footer from "./common/Footer";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path ="/" component={Homepage} />
            <Route path ="/Tutorial" component={Tutorial} />
            <Route path ="/Imprensa" component={Imprensa} />
            <Route path ="/Contactos" component={Contactos} />
            <Route component={PageNotFound} />
        </Switch>
        <Footer/>
      </div>
  );
}

export default App;
