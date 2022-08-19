import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "./hey.jpg";
import logo2 from "./interior1.jpg";
import logo3 from "./hhh.jpg";
import "./Forthsec.css";

function Forthsec() {
  return (
    <>
      <Container className="fourthsection">
        <Row>
          <Col className="fr1">
            <Row className="fr1">
              <h3 className="head"> Our Businesses</h3>
              <p className="prg">
                {" "}
                With interests predominantly in the trading and distribution of
                fresh fruits, vegetables and Fast Moving Consumer Goods (FMCG),
                Jaleel Holdings owns and operates multiple wholesale, retail and
                distribution companies. They cater to more than 10,000 retailers
                including grocers, supermarkets/hypermarkets, hotels,
                restaurants, and catering (HORECA) segment at competitive
                prices.
              </p>
            </Row>
          </Col>
          <Col >
            <Row className="coool">
            {/* <Carousel className="caro">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={logo1}
                  alt="First slide"
                  id="profile-image"
                />
                <Carousel.Caption>
                  <h3 className="par1">WELCOME JALEEL HOLDINGS</h3>
                  <p className="par1">Navigating Towards Sustainable Growth</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={logo2} alt="Second slide" />

                <Carousel.Caption>
                  <h3 className="par1">JALEEL HOLDINGS</h3>
                  <p className="par1">Trusted Name In The Business Network</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={logo3} alt="Third slide" />

                <Carousel.Caption>
                  <h3 className="par1">JALEEL HOLDINGS</h3>
                  <p className="par1">
                    50 Years of Commitment <br></br>Towards Excellence
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Forthsec;
