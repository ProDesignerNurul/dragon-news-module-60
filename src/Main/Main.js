import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="2">
                        <h2>site bar</h2>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                    <h2>right site</h2>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;