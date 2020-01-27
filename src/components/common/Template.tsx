import React from 'react'
import {Col, Container, Row} from "reactstrap";
import ReactHtmlParser from "react-html-parser";

// Generic template that loads the page date
const Template = (response) => {

    return (

        <Container fluid="true">

            <Row>

                <Col xs="2"/>

                <Col xs="8">

                    <div>{ ReactHtmlParser (response.response) }</div>

                </Col>

                <Col xs="2"/>

            </Row>

        </Container> );

}

export default Template;
