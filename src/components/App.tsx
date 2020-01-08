import React from 'react';
import './App.css';

import {Route, Switch} from 'react-router-dom';
import Header from "./common/Header";
import Homepage from './Homepage';
import Tutorial from './Tutorial';
import Imprensa from './Imprensa';
import Contactos from './Contactos';
import PageNotFound from "./common/PageNotFound";

const App: React.FC = () => {
  return (
      <div className="App">
        <Header/>
        <Switch>
            <Route exact path ="/" component={Homepage} />
            <Route exact path ="/Tutorial" component={Tutorial} />
            <Route exact path ="/Imprensa" component={Imprensa} />
            <Route exact path ="/Contactos" component={Contactos} />
            <Route component={PageNotFound} />
        </Switch>
      </div>
  );
}

export default App;
