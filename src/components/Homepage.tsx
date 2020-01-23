import React from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
import './WordPress.min.css';
import Loader from './common/Loader';
import {Col, Container, Row} from "reactstrap";
//import ScrollUpButton from "react-scroll-up-button";

const logo = require('../imgs/slideshowThumb.png');

export default class Homepage extends React.Component {

    state = {
        loading: true,
        response: ""
    }

    componentDidMount() {
        axios.get(`http://www.sporttablebox.com/wp-json/wp/v2/pages/14160`) // Original: 7177
            .then(res => {

                const response = res.data.content.rendered;

                this.setState({
                    loading: false,
                    response
                });

                console.log(response);

            })
    }

    render() {

        const { loading, response } = this.state;

        return(

            <Container fluid="true">

                <Row>
                    <Col xs="12">
                        <div className="slideshow">
                            <div className="white-stripe">
                                <Col xs="2"></Col>
                                <Col xs="4" className="slideshow-description">
                                    <h4 className="pre-title">Um jogo</h4>
                                    <h1 className="title">sportacular</h1>
                                    <span className="description">
                                    Sporttable Box é mais do que um jogo, é uma missão. <br/>
                                    Acreditamos na promoção do DESPORTO e ATIVIDADE FÍSICA através de Jogos de Tabuleiro.  <br/>
                                    Vais ter de te mexer. Mesmo!
                                    </span>
                                </Col>
                                <Col xs="4">
                                    <img className="slideshow-img" alt="Sporttable box" src={logo} />
                                </Col>
                                <Col xs="2"></Col>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="containerError">

                    <Col xs="2"></Col>

                    <Col xs="8">

                        <div>
                            {loading ? <Loader/> : <div>{ ReactHtmlParser (response) }</div>}
                        </div>

                    </Col>

                    <Col xs="2"></Col>

                </Row>

            </Container>

                        );

    }
}
