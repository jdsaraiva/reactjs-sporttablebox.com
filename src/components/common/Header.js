import React from 'react'
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

const Header = () => {

    const activeStyle = { color : "#c5151d"}

    return (

        <Container fluid="true">

            <Row className="header">

                <Col xs="12" md={{ size: 8, offset: 2 }} >

                    <nav className="navigation">

                        <NavLink to="/" activeStyle={activeStyle} >SportTable BOX</NavLink>

                        <NavLink to="/tutorial" activeStyle={activeStyle}>Como jogar</NavLink>

                        <NavLink to="/imprensa" activeStyle={activeStyle}>Imprensa</NavLink>

                        <NavLink to="/contactos" activeStyle={activeStyle}>Contactos</NavLink>

                    </nav>

                </Col>

            </Row>

        </Container>

    )

}

export default Header;
