import React from 'react'
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";

const Header = () => {

    const activeStyle = { color : "#c5151d"}

    return (
        <Container fluid="true">

            <Row className="header">

                <Col xs="12" md="8" xl="5" >

                    <nav className="navigation">

                        <NavLink to="/categorias" activeStyle={activeStyle} >Categorias</NavLink>

                        <NavLink to="/salas" activeStyle={activeStyle}>Sala</NavLink>

                        <NavLink to="/agenda" activeStyle={activeStyle}>Agenda</NavLink>

                        <NavLink to="/tlmagazine" activeStyle={activeStyle}>TL Magazine</NavLink>

                    </nav>

                </Col>

            </Row>

        </Container>

    )

}

export default Header;