import React from "react"
import "./style.css"
import { Col, Container, Row } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
        <Container>
          <Row className="footer-row">
            <Col md={3} sm={5} className='box'>
              <div className="logo">
                  <ion-icon name="bag"></ion-icon>
                  <h1>Hooks</h1>
              </div>
              <p>Welcome to Hooks, your premier destination for all things fashion, lifestyle, and beyond. Explore our curated collection of top brands and latest trends, shop with confidence, and enjoy fast, reliable shipping. Stay connected with us for exclusive offers, style tips, and more. Your satisfaction is our priority - shop now and elevate your shopping experience!</p>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>About Us</h2>
              <ul>
                <li>Careers</li>
                <li>Our Stores</li>
                <li>Our Cares</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Customer Care</h2>
              <ul>
                <li>Help Center </li>
                <li>How to Buy </li>
                <li>Track Your Order </li>
                <li>Corporate & Bulk Purchasing </li>
                <li>Returns & Refunds </li>
              </ul>
            </Col>
            <Col md={3} sm={5} className='box'>
              <h2>Contact Us</h2>
              <ul>
                <li>123 Sector 17, Chandigarh, India</li>
                <li>Email: Hargun3574@gmail.com</li>
                <li>Phone: +91 8728000257</li>
              </ul>
            </Col>
          </Row>
        </Container>
    </footer>
    
  )
}

export default Footer
