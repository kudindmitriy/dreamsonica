import React, { useRef, useState } from 'react';

import { Container, Row, Col } from 'react-grid-system';

import {
    WrapperGlobalFuture,
    GlobalFutureTitle,
    GlobalFutureItem,
} from './style';
import { ThreeDealText } from '../deals/style';
import { animated, useSpring } from 'react-spring';
import Fade from 'react-reveal/Fade';

const Card = ({ children }) => {
    const ref = useRef();

    const [isHovered, setHovered] = useState(false);
    const [animatedProps, setAnimatedProps] = useSpring(() => {
        return {
            xys: [0, 0, 1],
            // Setup physics
            config: {
                mass: 10,
                tension: 400,
                friction: 40,
                precision: 0.00001,
            },
        };
    });

    return (
        <animated.div
            ref={ref}
            className="card"
            onMouseEnter={() => setHovered(true)}
            onMouseMove={({ clientX, clientY }) => {
                // Get mouse x position within card
                const x =
                    clientX -
                    (ref.current.offsetLeft -
                        (window.scrollX ||
                            window.pageXOffset ||
                            document.body.scrollLeft));

                // Get mouse y position within card
                const y =
                    clientY -
                    (ref.current.offsetTop -
                        (window.scrollY ||
                            window.pageYOffset ||
                            document.body.scrollTop));

                // Set animated values based on mouse position and card dimensions
                const dampen = 230; // Lower the number the less rotation
                const xys = [
                    -(y - ref.current.clientHeight / 2) / dampen, // rotateX
                    (x - ref.current.clientWidth / 2) / dampen, // rotateY
                    1.03, // Scale
                ];

                // Update values to animate to
                setAnimatedProps({ xys });
            }}
            onMouseLeave={() => {
                setHovered(false);
                // Set xys back to original
                setAnimatedProps({ xys: [0, 0, 1] });
            }}
            style={{
                // If hovered we want it to overlap other cards when it scales up
                zIndex: isHovered ? 2 : 1,
                // Interpolate function to handle css changes
                transform: animatedProps.xys.interpolate(
                    (x, y, s) =>
                        `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`,
                ),
            }}
        >
            {children}
        </animated.div>
    );
};

const Features = () => {
    return (
        <WrapperGlobalFuture>
            <Container>
                <Fade bottom>
                    <Row>
                        <Col lg={12}>
                            <GlobalFutureTitle>WHY CHOOSE US</GlobalFutureTitle>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            <ThreeDealText style={{ alignText: 'center' }}>
                                DreamSonica is a diverse team of talented,
                                creative and thoughtful individuals, working
                                together more 6 years. Whose expertise and
                                experience in Game Marketing is trusted by the
                                large and small game developers, already famous
                                and startups.
                            </ThreeDealText>
                        </Col>
                    </Row>
                </Fade>
                <Row justify={'center'}>
                    <Col sm={12} md={3}>
                        <Card>
                            <GlobalFutureItem>
                                <div className="future_item_header">
                                    <img
                                        src={require('../../static/images/sonica/common/build_from_scratch_ico.svg')}
                                        alt=""
                                    />
                                </div>
                                <div className="future_item_footer">
                                    <div>
                                        <p className="future_item_footer--text">
                                            77
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="future_item_footer--title">
                                            Lorem ipsum dolor sit amet.Lorem
                                            ipsum dolor sit.
                                        </h3>
                                    </div>
                                </div>
                            </GlobalFutureItem>
                        </Card>
                    </Col>
                    <Col sm={12} md={3}>
                        <Card>
                            <GlobalFutureItem>
                                <div className="future_item_header">
                                    <img
                                        src={require('../../static/images/sonica/common/build_from_scratch_ico.svg')}
                                        alt=""
                                    />
                                </div>
                                <div className="future_item_footer">
                                    <div>
                                        <p className="future_item_footer--text">
                                            77
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="future_item_footer--title">
                                            Lorem ipsum dolor sit amet.Lorem
                                            ipsum dolor sit.
                                        </h3>
                                    </div>
                                </div>
                            </GlobalFutureItem>
                        </Card>
                    </Col>
                    <Col sm={12} md={3}>
                        <Card>
                            <GlobalFutureItem>
                                <div className="future_item_header">
                                    <img
                                        src={require('../../static/images/sonica/common/done_ico.svg')}
                                        alt=""
                                    />
                                </div>
                                <div className="future_item_footer">
                                    <div>
                                        <p className="future_item_footer--text">
                                            77
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="future_item_footer--title">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing.
                                        </h3>
                                    </div>
                                </div>
                            </GlobalFutureItem>
                        </Card>
                    </Col>
                    <Col sm={12} md={3}>
                        <Card>
                            <GlobalFutureItem>
                                <div className="future_item_header">
                                    <img
                                        src={require('../../static/images/sonica/common/machine_point.svg')}
                                        alt=""
                                    />
                                </div>
                                <div className="future_item_footer">
                                    <div>
                                        <p className="future_item_footer--text">
                                            99%
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="future_item_footer--title">
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit.
                                        </h3>
                                    </div>
                                </div>
                            </GlobalFutureItem>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </WrapperGlobalFuture>
    );
};

export default Features;