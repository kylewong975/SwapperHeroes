import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './LoginButton.css';
import LandingScreen from './LandingScreen';
export default class LoginScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        quotes: ["Jonah only goes after me because he loves this city. He genuinely believes Spider-Man is a menace to society. Always has. Look, I'm not saying you have to like everybody you meet. Or that you can't get mad at people when they screw up. Just that it might be worth a minute to try and see things from the other guy's side. Turns out most people--even the grumpy ones who yell--probably don't deserve blunt force trauma on the head.",
        "Happy Valentine's Day, Spider-Man. You get to resuscitate an old man you just pulled up from the sewer.",
        "Adoma. Congratulations. You just became the first winner of a Parker Industries college scholarship.",
        "Did I just get rescued by two girls? Awesome.",
        "We're not just our failures. As much as they hurt, we learn from them. Then we go out there and do our best to make up for them-- Even though we never will. We save people. We save as many as we can to make up for the ones we couldn't. That's all we do.",
        "Just be straight with me, Crystal. You wouldn't keep showing up by these things if you hadn't found anything. And hey -- I'm the guy who third-wheeled your dates with Johnny Storm while the Inhumans were still a secret society. Whatever it is you're keeping from the world at large -- you can trust me.",
        "I know you grew up as isolationists, Crystal... but you don't have to go it alone anymore.",
        "One scientific mishap, and hours later I'm sewing a costume. Déjà diddly vu. Okay world, better hang on to your hat... here comes Alpha!",
        "My fault -- all my fault! If only I had stopped him when I could have! But I didn't -- and now -- Uncle Ben -- is dead...",
        "Seriously, a clinic that super heroes frequent and you think, \"That's the place I want to rip off next\"?! Let me ask you, and be honest, are you stupid? Or really, really stupid?",
        "But it's not the same thing! All these years--I've done my best to make up for that! I've wore this suit--gone out there and put my life on the line again and again! But no matter how hard I try-- --people-- --die!",
        "You've shown that now you're willing to sacrifice anyone --anything-- to save yourself! And I don't owe you anything anymore!",
        "In nature, everything's connected. As scientists, we explore and expand on those connections. Maybe as people, we should do the same.",
        "You can live every day of your life trying to think of something more profound or more on the nose... but for us, for people like us, who suddenly find themselves looking out at a crazy world and not knowing what the hell we're supposed to be doing in it... I can tell you that just remembering that with great power comes great responsibility... can completely define you.",
        "Hope you were watching, Uncle Ben. 'Cause I did that for you. Kept everyone safe. Kept them from being scared. And I made it fun. It doesn't matter that most of 'em wouldn't have lifted a finger for Peter Parker. That's not why you do it. You do it 'cause it's the right thing to do. Because it's what youwould've done. You were more than a father to me, Ben Parker. More than a role model... You were my hero. Now it's my turn. Because from now on, I'm going to be yours! You'll see. I'm going to give it my all! We'll have fun! I'll never quit-- --and it's going to be Amazing!",
        "Hey, if you're going to go against the BIG BOYS, you're going to have to have a tad more staying power.",
        "Well, wobble my webs and call me shaky! It's Goldilocks -- the hippest hammer in the west!",
        "You say you don't want the responsibility? Guess what? People like us...we don't get a choice."],
        result: [],
        ready: false,
      }

      setInterval(() => {
        this.renderResult();
      }, 2000);
    }

    componentDidMount() {

    }

    randomLine() {
      return this.state.quotes[parseInt(Math.random() * this.state.quotes.length)];
    }

    renderResult() {
      let arr = this.state.result;
      arr.push(this.randomLine());
      this.setState({
        result: arr
      });
    }

    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col style={{background: "linear-gradient(218.66deg, #F97090 22.12%, #AF0707 93.89%)", color: "white"}}>
                        <LandingScreen/>
                        
                    </Col>
                    <Col xs="4" style={{paddingLeft: 30, paddingRight: 10, paddingBottom: 50, display: "flex", height: "100%", background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)"}}>
                        <div style={{...styles.loginBox, ...styles.overflowCond}}>
                            <h1 style={{textAlign: "center", color: "white", fontFamily: "Signika Negative"}}>Story Generator</h1>
                            <br/>
                            {this.state.result.map((x, i) => {
                              return (<p key={i} style={{fontSize: 12, textAlign: "left", color: "white", margin: 1}}>{x}</p>)}
                            )}
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
    overflowCond: {
      overflowY: "scroll",
    },
    buttonBox: {
        display: "flex",
        width: "100%",

        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
};
