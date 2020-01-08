import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';

export default class Homepage extends React.Component {

    state = {
        response: ""
    }

    // TODO Meter o slideshow em HTML estático -

    componentDidMount() {
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14160`) // Original: 7177
            .then(res => {

                const response = res.data.content.rendered;
                //const   response = '<h1>TESTE</h1>';

                this.setState({ response });

            })
    }

    render() {

        let html = this.state.response;

        return <div> { ReactHtmlParser (html) } </div>;

    }
}