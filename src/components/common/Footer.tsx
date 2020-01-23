import React from 'react'
import {Col, Container, Row} from "reactstrap";

const Footer = () => {

    return (

        <Container fluid="true">

            <Row className="footer">

                <Col xs="12" md={{ size: 8, offset: 2 }} >

                    <p>Página criada e desenvolvida por <a href="mailto:joaodsaraiva@gmail.com">João Dessain Saraiva</a></p>

                </Col>

            </Row>

        </Container>

    )

}

export default Footer;
