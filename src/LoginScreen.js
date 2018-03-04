import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './LoginButton.css';
import LandingScreen from './LandingScreen';
export default class LoginScreen extends Component {
    constructor(props) {
      super(props)
    }

    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col style={{background: "linear-gradient(218.66deg, #F97090 22.12%, #AF0707 93.89%)", color: "white"}}>
                        <LandingScreen/>
                    </Col>
                    <Col xs="4" style={{display: "flex", height: "100%", background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)"}}>
                        <div style={styles.loginBox}>
                            <h1 style={{color: "white", fontFamily: "Signika Negative"}}>Story Generator</h1>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    }
}

let styles = {
    loginBoxWrapper: {
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        //background: `rgba(245, 245, 245, 1)`,
        border: "1px solid grey",
    },
    loginBox: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        alignItems: "center",
        width: "100%",
    },
    logoBox: {
        display: "flex",
        width: "100%",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 300,
        height: 75,
    },
    textLogo: {
        fontSize: 50,
        color: "rgb(43, 167, 234)",
        marginBottom: 0,
    },
    buttonBox: {
        display: "flex",
        width: "100%",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};
