import React from "react";
import ServiceContent from "./ServiceContent";
import ServiceDescription from "./ServiceDescription";
import {Element} from 'react-scroll'
import {
    Container,
    Row,
    Col
} from 'react-grid-system'

import {
    WrapperService
} from './style'


const Service = () => {

    return (
        <WrapperService>
            <Element id='how_do_we_work'/>
                <Container>
                <Row>
                    <Col md={12} lg={6} style={{alignSelf: "center"}}>
                        <ServiceContent/>
                    </Col>
                    <Col lg={6} style={{alignSelf: "center"}}>
                        <ServiceDescription/>
                    </Col>
                </Row>
            </Container>
        </WrapperService>
    )
}

export default Service;