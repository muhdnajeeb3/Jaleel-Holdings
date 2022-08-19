import React from "react";
import Carousel from "react-bootstrap/Carousel";
import logo1 from "./hey.jpg";
import logo2 from "./interior1.jpg";
import logo3 from "./hhh.jpg";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Herosection.css";

function Herosection() {
  return (
    <>
      <div className="Navbar">
        <Navbar id="header" variant="" sticky="top" expand="lg">
          <Navbar.Brand>
            <Link to="/">
              <h2 id="navbrand">JALEEL HOLDINGS</h2>
            </Link>
            {""}
          </Navbar.Brand>
          <Navbar.Toggle className="ml-auto" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link id="link" href="/">
                Home
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Who We Are
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Our Businesses
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Career Opportunities
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Media Center
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Corporate Responsibility
              </Nav.Link>
              <Nav.Link id="link" href="/">
                Contact Us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo1}
            alt="First slide"
            id="profile-image"
          />
          <Carousel.Caption id="caption">
            <h3 className="par1">WELCOME JALEEL HOLDINGS</h3>
            <p className="par1">
              Navigating Towards Sustainable Growth
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo2} alt="Second slide" />

          <Carousel.Caption id="caption">
            <h3 className="par1">JALEEL HOLDINGS</h3>
            <p className="par1">
              Trusted Name In The Business Network
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={logo3} alt="Third slide" />

          <Carousel.Caption id="caption">
            <h3 className="par1">JALEEL HOLDINGS</h3>
            <p className="par1">
              50 Years of Commitment <br></br>Towards Excellence
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Herosection;
