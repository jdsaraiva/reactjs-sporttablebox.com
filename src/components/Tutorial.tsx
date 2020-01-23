import React from 'react';
import axios from "axios";
import {Col, Container, Row} from "reactstrap";
import Loader from "./common/Loader";
import ReactHtmlParser from "react-html-parser";

export default class Tutorial extends React.Component {

    state = {
        loading: true,
        response: ""
    }

    componentDidMount() {
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14189`)
            .then(res => {

                const response = res.data.content.rendered;

                this.setState({
                    loading: false,
                    response
                });

            })
    }

    render() {

        const { loading, response } = this.state;

        return(

            <Container fluid="true">

                <Row className="containerError">

                    <Col xs="2"/>

                    <Col xs="8">

                        <div>
                            {loading ? <Loader/> : <div>{ ReactHtmlParser (response) }</div>}
                        </div>

                    </Col>

                    <Col xs="2"/>

                </Row>

            </Container> );

    }
}
