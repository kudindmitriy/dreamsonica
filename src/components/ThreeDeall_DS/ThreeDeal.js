import React, {createRef, Component} from "react";
import {Container, Row, Col} from "react-grid-system";
import {
    WrapperThreeDeal,
    ThreeDealTitle,
    ThreeDealText, HeroWrap, HeroBody
} from './style';
import ReactParticles from "react-particles-js";
import Fade from "react-reveal/Fade";

const params = {
    particles: {
        number: {
            value: 200
        },
        size: {
            value: 5
        },
        color: {
            value: '#00148d'
        },
        line_linked: {
            enable: true,
            distance: 100,
            color: '#00148d',
            opacity: 0.9,
            width: 2
        }
    }
};

const Particles = ({ children }) => {
    return (
        <div style={{ position: 'relative' }}>
            <ReactParticles
                params={params}
                style={{
                    position: 'absolute',
                    zIndex: -1,
                    left: '50%',
                    right: 0,
                    bottom: 0,
                    top: 0,
                }}
                height={'100%'}
            />
            {children && <div style={{ position: 'relative' }}>{children}</div>}
        </div>
    );
}

const Hero = ({ children }) => {
    return (
        <HeroWrap className="hero">
            <HeroBody className="hero-body">{children}</HeroBody>
        </HeroWrap>
    );
}

export default class ThreeDeal extends Component {
    dealCard = createRef()

    render() {
        return (
            <WrapperThreeDeal>
                <Particles>
                    <Hero>
                        <Container>
                            <Fade bottom>
                                <Row>
                                    <Col lg={12}>
                                        <ThreeDealTitle>WHO WE ARE</ThreeDealTitle>
                                    </Col>
                                </Row>
                                <Row justify={"center"}>
                                    <Col md={12}>
                                        <ThreeDealText style={{fontWeight: 'bold'}}>
                                            YOUR FULLY ASSEMBLED UA TEAM
                                        </ThreeDealText>
                                    </Col>
                                    <Col  md={12}>
                                        <ThreeDealText>
                                            We provide a fully-managed user acquisition service for game\app developers.
                                            Since our founding, we have focused on two of the most important
                                            pieces of the user acquisition puzzle - ROI and Value.
                                        </ThreeDealText>
                                    </Col>
                                </Row>
                            </Fade>
                        </Container>
                    </Hero>
                </Particles>
            </WrapperThreeDeal>
        );
    }
}