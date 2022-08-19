import React from "react";
import "./Fifthsec.css";
// import logo1 from "./hey.jpg";
// import logo2 from "./interior1.jpg";
// import logo3 from "./hhh.jpg";
import { Container, Row, Col, Carousel } from "react-bootstrap";


function Fifthsec() {
  return (
    <>
      <Container>
        <Row className="thirdsection1">
          <Col className="col6">
            <Row>
              <p className="para"></p>
              <br />
              <h4>Jaleel Holdings</h4>
              <br />
              <p className="p1">
                Jaleel Holdings LLC, headquartered in Dubai, is a UAE based
                Investment Company with businesses in diverse sectors like
                Consumer Products distribution, retail, wholesale, food
                processing, and education. Synonymous with trust, quality and
                sustainability, this service-oriented company is one of the
                largest wholesale distributors of food in the Middle East.
              </p>
              <p>
                The company streamlined its operations bringing all businesses
                under the umbrella of Jaleel Holdings in 2008. As followed
                within each company, the name now stands for quality,
                consistency and sustainability, which are hallmarks cascaded
                across the organization.
              </p>
            </Row>
          </Col>

          <Col className="col5">
            <Row>
              
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
                    <p className="par1">
                      Navigating Towards Sustainable Growth
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo2}
                    alt="Second slide"
                  />

                  <Carousel.Caption>
                    <h3 className="par1">JALEEL HOLDINGS</h3>
                    <p className="par1">Trusted Name In The Business Network</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={logo3}
                    alt="Third slide"
                  />

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
      {/* <Container>
        <Row className="foooter">
hh
        </Row>
      </Container> */}
    </>
  );
}

export default Fifthsec;
