import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../Layouts/Footer.css';
export default class Footer extends Component {
   render() {
        return (
           <div className="footer-bottom">
              <Row className="show-grid text-center">
                <Col sx={12} sm={4} className="container-wrapper2">
                    <h5>Questions</h5>
                    <h6>info@Spotlight.com</h6>
                </Col>
                <Col sx={12} sm={4} className="container-wrapper2">
                    <h5>Follow Us On Social Media</h5>
                    <h5>Review Phone Line: 770-555-000</h5>
                </Col>
                <Col sx={12} sm={4} className="container-wrapper2">
                    <h5>Join Our Newsletter</h5>
                    <h6>Spotlight reviews News</h6>
                   <div id="news">
                    <h5>Check our the Newsletter!</h5>
                   </div>
                </Col>
              </Row>
            </div>
         );
      }
 }
