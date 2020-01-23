import React from 'react'
import {NavLink} from "react-router-dom";
import {Col, Container, Row} from "reactstrap";
import './WordPress.min.css';

const Header = () => {

    return (
        <Container fluid="true" className="header-container">

            <Row className="header">

                <Col >

                    <nav className="navigation" >

                        <NavLink to="/categorias">Categorias</NavLink>

                        <NavLink to="/salas">Sala</NavLink>

                        <NavLink to="/agenda">Agenda</NavLink>

                        <NavLink to="/tlmagazine">TL Magazine</NavLink>

                    </nav>

                </Col>

            </Row>

        </Container>

    )

}

export default Header;
