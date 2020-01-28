import React from 'react';
import axios from "axios";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from "./common/Header";
import PageNotFound from "./common/PageNotFound";
import Footer from "./common/Footer";
import Loader from  "./common/Loader";

import './WordPress.min.css';
import './App.css';

import Homepage from "./Homepage";
import Template from "./common/Template";

// TODO - passar o atual para arquive.sporttablebox.com

export default class App extends React.Component {

    state = {
      loading: true,
      response: "",
      response_homepage: "",
      response_others: []
    };

    // Load the Json data here, send to the components via props
    componentDidMount() {

        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14160`)
             .then(res => {

                const response_homepage = res.data.content.rendered;

                this.setState({
                    loading: false,
                    response_homepage
                });

             });

        // Tutorial
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14189`)
             .then(res => {

                const response_others =  [...this.state.response_others] as  any;

                //adding new data
                response_others.push({
                    id: 0,
                    result: res.data.content.rendered,
                    completed: false
                });

                this.setState({response_others});

            });

        // Imprensa
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14204`)
             .then(res => {

                const response_others =  [...this.state.response_others] as  any;

                response_others.push({
                    id: 1,
                    result: res.data.content.rendered,
                    completed: false
                });

                this.setState({response_others});

            });

        // Contactos
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14210`)
             .then(res => {

                const response_others =  [...this.state.response_others] as  any;

                response_others.push({
                    id: 2,
                    result: res.data.content.rendered,
                    completed: false
                });

                this.setState({response_others});

            });

        console.log("quantas vezes corre ?")

    }

    render() {

        const { loading, response_homepage, response_others } = this.state;

        if(loading)
            return (
                <Loader/>
            );

        return (
            <div className="App">
                <Header/>
                <Switch>
                    <Route exact path="/" render={(props) => <Homepage {...props} response={response_homepage} />} />
                    <Route path="/Tutorial" render={(props) => <Template {...props} response={response_others[0]['result']} />} />
                    <Route path ="/Imprensa" render={(props) => <Template {...props} response={response_others[1]['result']} />}  />
                    <Route path ="/Contactos" render={(props) => <Template {...props} response={response_others[2]['result']} />} />
                    <Route component={PageNotFound} />
                </Switch>
                <Footer/>
            </div>
        );

    }

}
