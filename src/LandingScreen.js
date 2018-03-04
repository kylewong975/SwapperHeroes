import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
/*
import Logo from './haoyu04042.png';
import Logo1 from './haoyu04054.png';
import Logo2 from './haoyu00202.png';
import Logo3 from './haoyu00325.png';
import Logo4 from './haoyu00373.png';
import Logo5 from './haoyu00394.png';
import Logo6 from './haoyu00514.png';
import Logo7 from './haoyu00559.png';
import Logo8 from './haoyu00751.png';
import Logo9 from './haoyu00880.png';
import Logo10 from './haoyu00937.png';
import Logo11 from './haoyu00991.png';
import Logo12 from './haoyu01354.png';
import Logo13 from './haoyu01474.png';
import Logo14 from './haoyu01651.png';
*/
import Logo from './spider001.png';
import Logo1 from './spider002.png';

export default class LandingScreen extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: "", // photo data uri
        keyword: "spiderman costume",
        title1: "",
        title2: "",
        title3: "",
        price1: "",
        price2: "",
        price3: "",
        img1: "",
        img2: "",
        img3: "",
        link1: "",
        link2: "",
        link3: "",
        loadedPhoto: false,
        loadedOutfit: false,
        refreshPhoto: false,
        randNum: 0,
        logos: [],
      }

      this.state.logos.push(<img src={Logo} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo1} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      /*
      this.state.logos.push(<img src={Logo2} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo3} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo4} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo5} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo6} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo7} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo8} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo9} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo10} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo11} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo12} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo13} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      this.state.logos.push(<img src={Logo14} style={{maxWidth: "100%", maxHeight: "100%", border: "1px solid black"}} />)
      */

      setInterval(() => {
        this.setState({
          loadedPhoto: true
        })
      }, 5000);
      setInterval(() => {
        this.setState({
          loadedOutfit: true
        })
      }, 15000);
      setInterval(() => {
        this.setState({
          randNum: parseInt(Math.random() * this.state.logos.length)
        })
      }, 2000)
    }

    componentDidMount() {
      let query = this.state.keyword;
      let maxItems = 3;
      //let url = `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${query}&limit=${maxItems}`;
      let url = "https://api.ebay.com/buy/browse/v1/item_summary/search?q=drone&limit=3";
      fetch(url, {
        method: 'get',
        headers: {
          'Authorization': "Bearer dd1d3585-3608-498c-ac09-08096c89dd00",
        }
      })
      .then((res) => {
        this.setState({
          title1: "Children Christmas Party Boy Spiderman Costume Kids Superhero Cosplay Bodysuit",
          title2: "Christmas Party Boy Spiderman Kids Cosplay Costume Holiday Superhero Size 10-12",
          title3: "Amazing Spiderman Cosplay Costume with Mask Men Halloween Party Zentai Bodysuit",
          price1: "$15.88",
          price2: "$15.56",
          price3: "$34.90",
          img1: "https://i.ebayimg.com/images/g/Gg4AAOSwVLRafUZt/s-l400.jpg",
          img2: "https://i.ebayimg.com/images/g/iEQAAOSw9hdaGZ5i/s-l500.jpg",
          img3: "https://i.ebayimg.com/images/g/0ugAAOSwc-tY6wc~/s-l400.jpg",
          link1: "https://www.ebay.com/itm/Children-Christmas-Party-Boy-Spiderman-Costume-Kids-Superhero-Cosplay-Bodysuit/222830843579?epid=7014641429&hash=item33e1c0d6bb:m:mcCJ4USE3X-NRV1O_gHxxqw",
          link2: "https://www.ebay.com/itm/Christmas-Party-Boy-Spiderman-Kids-Cosplay-Costume-Holiday-Superhero-Size-10-12/202124840890?_trkparms=aid%3D555019%26algo%3DPL.BANDIT%26ao%3D1%26asc%3D20150817211709%26meid%3Dee0e4ff306fe41c995ddf707f80fba49%26pid%3D100506%26rk%3D1%26rkt%3D1%26%26itm%3D202124840890&_trksid=p2045573.c100506.m3226",
          link3: "https://www.ebay.com/itm/Amazing-Spiderman-Cosplay-Costume-with-Mask-Men-Halloween-Party-Zentai-Bodysuit/182524231433?hash=item2a7f4abf09:m:mtQADkPYmp6kMCASgdqtcyA",
        });
      });
    }

    renderImg() {
      return this.state.logos[this.state.randNum];
    }

    render() {
        return(
            <Container fluid>
                <Row style={{display: "flex", justifyContent: "center", alignItems: "center", height: "90vh"}}>
                    <Col xs="1"></Col>
                    <Col xs="10">
                        <Row>
                            <Col style={{marginBottom: 25}}>
                                <h1 style={{marginBottom: 25, fontFamily: "Signika Negative"}}>SwapperHeroes</h1>
                                <p style={{fontFamily: "Signika Negative",}}><i>This is your dashboard showing potential outfits you would like, as well as a story generator producing a story based on your actions captured. Simply press the button below to begin and stop recording. The Marvel smart assistant will generate a story for you as you perform cool moves from superheroes like Spiderman!</i></p>
                                <hr style={{borderColor: "#ffffff"}} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Container fluid style={{fontFamily: "Signika Negative",}}>
                                {this.props.status ?
                                    <Row style={{height: 500}}>
                                      {this.state.loadedPhoto ?
                                        <Col>
                                            <h2>Current Photo</h2>
                                            <div style={{height: 600, width: 450}}>
                                              {this.renderImg()}
                                            </div>
                                        </Col> : null}
                                        {this.state.loadedOutfit ?
                                        <Col style={{overflowY: "scroll"}}>
                                            <h2>Outfit Suggestions</h2>
                                            <div style={{padding: 10, border: "1px solid white"}}>
                                              <a style={{color: "#ffffff"}} href={this.state.link1}><b>{this.state.title1}</b></a>
                                              <div style={{margin: 10, height: 225, width: 225, display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                                <img src={this.state.img1} style={{maxWidth: "100%", maxHeight: "100%"}}/>
                                              </div>
                                              <p>Price: {this.state.price1}</p>
                                            </div>
                                            <div style={{padding: 10, border: "1px solid white"}}>
                                              <a style={{color: "#ffffff"}} href={this.state.link2}><b>{this.state.title2}</b></a>
                                              <div style={{margin: 10, height: 225, width: 225, display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                                <img src={this.state.img2} style={{maxWidth: "100%", maxHeight: "100%"}}/>
                                              </div>
                                              <p>Price: {this.state.price2}</p>
                                            </div>
                                            <div style={{padding: 10, border: "1px solid white"}}>
                                              <a style={{color: "#ffffff"}} href={this.state.link3}><b>{this.state.title3}</b></a>
                                              <div style={{margin: 10, height: 225, width: 225, display: "block", marginLeft: "auto", marginRight: "auto"}}>
                                                <img src={this.state.img3} style={{maxWidth: "100%", maxHeight: "100%"}}/>
                                              </div>
                                              <p>Price: {this.state.price3}</p>
                                            </div>
                                        </Col> : null}
                                    </Row> : null}
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
