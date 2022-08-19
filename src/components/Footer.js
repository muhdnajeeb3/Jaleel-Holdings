import React from 'react';
import {Container ,Nav,Row} from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <>
    <Container className='footer'>
        <Row className='footer1'>
        <Nav>
              <Nav.Link id="link1" href="/">
                Who We Are
              </Nav.Link>
              <Nav.Link id="link1" href="/">
                Our Businesses
              </Nav.Link>
              <Nav.Link id="link1" href="/">
                Career Opportunities
              </Nav.Link>
              <Nav.Link id="link1" href="/">
                Media Center
              </Nav.Link>
              <Nav.Link id="link1" href="/">
                Corporate Responsibility
              </Nav.Link>
              <Nav.Link id="link1" href="/">
                Contact Us
              </Nav.Link>
            </Nav>
        </Row>
        {/* <Row className='footer1'>
        <Nav>
              <Nav.Link id="link1" href="/">
                LOGO
              </Nav.Link>
              <h5 className='copy'>Copyright@ 2022 JALEEL HOLDINGS.All Right Reserved.</h5>
              
            </Nav>
        </Row> */}
    </Container>
    </>
  )
}

export default Footer