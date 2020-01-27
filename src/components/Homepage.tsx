import React from 'react';
import './WordPress.min.css';
import {Col, Container, Row} from "reactstrap";
import ReactHtmlParser from "react-html-parser";

const logo = require('../imgs/slideshowThumb.png');

const Homepage = (external_data) => {

    return (

        <Container fluid="true">

            <Row>
                <Col xs="12">
                    <div className="slideshow">
                        <div className="white-stripe">
                            <Col xs="2"/>
                            <Col xs="4" className="slideshow-description">
                                <h4 className="pre-title">Um jogo</h4>
                                <h1 className="title">sportacular</h1>
                                <span className="description">
                                    Sporttable Box é mais do que um jogo, é uma missão. <br/>
                                    Acreditamos na promoção do DESPORTO e ATIVIDADE FÍSICA através de Jogos de Tabuleiro.  <br/>
                                    Vais ter de te mexer. Mesmo!
                                    </span>

                                <a href="http://www.majora.pt/sporttable" className="btn" target="_blank" rel="noopener noreferrer">Comprar</a>

                            </Col>
                            <Col xs="4">
                                <img className="slideshow-img" alt="Sporttable box" src={logo} />
                            </Col>
                            <Col xs="2"/>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>

                <Col xs="2"/>

                <Col xs="8">

                    <div>{ ReactHtmlParser (external_data.response) }</div>

                </Col>

                <Col xs="2"/>

            </Row>

        </Container> );

}

export default Homepage;
