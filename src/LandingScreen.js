import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import './LoginButton.css';
import DashboardScreen from './DashboardScreen';
import Webcam from 'react-webcam';
export default class LandingScreen extends Component {
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
        "You say you don't want the responsibility? Guess what? People like us...we don't get a choice.",
        "Check the rulebook, buddy! You're not allowed to bring automatic weapons into a super-people fight! Unless you're the Punisher 'cause, you know, who's gonna tell him it's against the rules?",
        "Go figure: I leave Betty's fake psychic... to go after a real creep... because he didn't set off my psychic powers. The irony here is not lost on me.",
        "I said, \"You're welcome.\" Sorry, I have laryngitis.",
        "Life sucks sometimes... but it's always worth living.",
        "Seriously, what is it with New York? Would it kill you to invade Denver once? But no. You've always got to destroy Central Park or eat the Statue of Liberty... Bad guys are such tourists.",
        "I drank the potion-- even though it was untried-- it was untested-- because I wanted it to change me but-- not like this! NOT LIKE THIS!",
        "You're the creep who's going to pay! I'm going to get you, Goblin! I'm going to destroy you slowly, and when you start begging for me to end it - I'm going to remind you of one thing - You KILLED the woman I love! And for that you're going to DIE!",
        "You're talking about my lady, creep! Someone I love--I mean loved--! Do you know what that means? Have you any idea what that means?? I loved her, Goblin! And you--! You--took--her--away! Filthy--worm-eating--scum!",
        "Sorry MJ... Guess my mind was on other things. Just had a talk with someone... and it made me suddenly realize... hey, I'm not really alone, after all.",
        "I can't get over that feeling of menace... as though something pretty bad was about to happen -- to none other than your friendly neighborhood Spider-Man!",
        "Save it for the papers, Jonah. Save it for tomorrow.",
        "It's too late to go back to work with the Torch...and it's too early to go home. Guess all that's left is some web-slinging. Maybe that will cheer me up. Seems like everytime I finish a fight, I'm all alone again--which makes me think of Gwendy--and brother...that makes me want to die!",
        "He -- he dropped me! I never realized -- never thought --! I'm too high up to snag a building with my web -- there's no way for me to catch myself! Looks like this time -- I've had it!",
        "He-he dropped me! I never realized--never thought--! I'm too high to snag a building with my web--there's no way for me to catch myself! Looks like this time--I've had it!",
        "I just dropped by to congratulate you on a perfect record! So far you've been 100 % wrong about me! I've got to hand it to you -- I'll bet it's not easy to make a fool out of yourself all the time!",
        "Oh no! No! It can't be happening! It can't be--! Doc Ock is marrying Aunt May!",
        "RAXTON, NO! The water's too cold -- your body will --",
        "Holy Cow! It's really him -- The Green Goblin lives again!",
        "Whatever I can give, he's got. You see, officer... he's my friend.",
        "It's the Jackal! And from the way he's talking -- MY PROBLEMS HAVE JUST BEGUN!",
        "Make that \"chump\", not champ, Max. You were Jameson's chump ten years ago -- now you've been the Jackal's. But don't worry -- someday, I'll get the Jackal too. And that, my fat friend -- is a promise from Spider-Man!",
        "Then -- it's finally happened! I'm cracking up -- Peter Parker is -- insane!",
        "No! It can't be! Gwen is dead! That can't be her!",
        "Gwen? You're -- ALIVE -- ?",
        "Okay, hero-man... Let's see you get out of this!",
        "PROFESSOR WARREN! THE JACKAL IS -- PROFESSOR WARREN!",
        "Right now, I'd trade the whole Spider-Man bit for a rocking chair and a subscription to Reader's Digest.",
        "I need a place to change! A phone booth--? Nah! Even I'm not that corny!",
        "I might as well face it... being Spider-Man is just plain habit-forming! It's like going out with girls!.. I can't give it up!",
        "He...He used to be the Herald of Galactus! Galactus for Pete's sake! He could have killed me!",
        "Someday, you'll make a mistake. And I'll be waiting!",
        "Blast it Mary Jane, this can't wait! All I need is a yes or no: will you marry me?",
        "Anyone can win a fight--when the odds--are easy! It's when the going's tough--when there seems to be no chance--that's when--it counts!"],
        result: [],
        ready: false,
        initialCond: true,
        initText: "",
        loadedPhoto: false,
      }

      setInterval(() => {
        if(this.state.ready && this.state.loadedPhoto)
          this.renderResult();
      }, 2000);
      setInterval(() => {
        this.setState({
          loadedPhoto: true
        })
      }, 5000);

      this.triggerReady = this.triggerReady.bind(this);
    }

    componentDidMount() {
      if(this.state.initialCond) {
        this.setState({
          initialCond: false,
        });
        let apikey = "59bae137365787d02c92409da8cc971e";
        let comicID = 16926;
        let hero = "Spider-Man";
        let url = `https://developer.marvel.com:443/v1/public/comics/${comicID}/characters?name=${hero}&apikey=${apikey}`;
        fetch(url, {
          method: 'get',
          headers: {
            'Authorization': "Bearer 3a93dd16bf5d57569d8e96ab298f35c1d36d1fae",
            'Access-Control-Allow-Origin': "*",
            'Access-Control-Allow-Methods': 'HEAD, GET, POST, PUT, PATCH, DELETE',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
          }
        })
        .then((res) => {
          this.setState({
            initText: "Jack Kirby and Steve Ditko collaborated on this cover to create what is quite possibly the most iconic image in Marvel Comics' history.  Before all the clones, symbiotes and civil wars we see Spider-Man in a simpler time doing what he does best, catching crooks and saving the day."
          })
        })
      }
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

    triggerReady(e) {
      e.preventDefault();
      this.setState({
        ready: true
      });
    }

    render() {
        return (
            <Container fluid style={{height: "100vh"}}>
                <Row style={{height: "100vh"}}>
                    <Col xs="8" style={{background: "linear-gradient(218.66deg, #F97090 22.12%, #AF0707 93.89%)", color: "white"}}>
                        <DashboardScreen status={this.state.ready}/>
                        <input type="submit" value="Swap to superhero!" style={styles.formButton} onClick={this.triggerReady} />
                    </Col>
                    <Col xs="2" style={{paddingLeft: 30, paddingRight: 10, paddingBottom: 50, display: "flex", height: "100%", background: "linear-gradient(218.66deg, #2A57B8 48.12%, #0096EB 93.89%)"}}>
                        <div style={{...styles.loginBox, ...styles.overflowCond}}>
                            <h1 style={{textAlign: "center", color: "white", fontFamily: "Signika Negative"}}>Story Generator</h1>
                            <br/>
                            {this.state.initialCond ? null : <p style={{fontSize: 12, textAlign: "left", color: "#FFFFFF"}}>Jack Kirby and Steve Ditko collaborated on this cover to create what is quite possibly the most iconic image in Marvel Comics history.  Before all the clones, symbiotes and civil wars we see Spider-Man in a simpler time doing what he does best, catching crooks and saving the day.</p>}
                            {this.state.result.map((x, i) => {
                              return (<p key={i} style={{fontSize: 12, textAlign: "left", color: "white", margin: 1}}>{x}</p>)}
                            )}
                            <Webcam audio={false}
                              height={1}
                              ref='webcam'
                              screenshotFormat="image/jpeg"
                              width={1}
                            />
                        </div>
                    </Col>
                    <Col xs="2" style={{backgroundColor: "#2A57B8"}}>
                        <iframe style={{width: "100%", height: "100%"}} src='https://webchat.botframework.com/embed/SpiderFan?s=NLzutvwktQQ.cwA.bAw.gXRMU7ILbc2bdSb268ZPzb5AGTV7NI57fGBIQDp_dI8'></iframe>
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
    formButton: {
      width: "40%",
      backgroundColor: "#FFFFFF",
      margin: 5,
      borderRadius: "25%",
      border: "none",
      fontFamily: "Signika Negative"
    },
};
