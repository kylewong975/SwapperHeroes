import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import Logo from './haoyu04042.png';

export default class LandingScreen extends Component {
    constructor(props) {
      super(props);
    }

    render() {
        return(
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "110vh"}}>
                    <Col xs="1"></Col>
                    <Col xs="10">
                        <Row>
                            <Col style={{marginBottom: 25}}>
                                <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>SwapBoard</h1>
                                <p style={{fontFamily: "Signika Negative",}}><i>This is your dashboard showing potential outfits you would like, as well as a story generator producing a story based on your actions captured. Simply press the button below to begin and stop recording. The Marvel smart assistant will generate a story for you as you perform cool moves from superheroes like Spiderman!</i></p>
                                <hr style={{borderColor: "#ffffff"}} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container fluid style={{fontFamily: "Signika Negative",}}>
                                    <Row>
                                        <Col>
                                            <h2>Current Photo</h2>
                                            <div style={{height: 600, width: 450}}>
                                              <img src={Logo} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />
                                            </div>
                                        </Col>
                                        <Col>
                                            <h2>Outfit Suggestions</h2>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs="1"></Col>
                </Row>
            </Container>
        );
    }
}
