import React from 'react';

import './account-overview.css';
import { Row, Col, Container, Card } from 'react-bootstrap';

import Contact from './components/contact/contact'
import SaleCard from './components/sale/sale-card'
import InformationCard from './components/sale/information-card'

export const AccountOverview = () => {

  var contactData = {
    name: "Support",
    email: "support@feefo.com",
    phone: "020 3362 4208"
  }

  var salesData = {
    upload: 0,
    lines: 0
  }

  var uploadData = {
    infoDescription: "UPLOAD SUCCESS",
    information: "0%"
  }

  var linesData = {
    infoDescription: "LINES SAVED",
    information: "0%"
  }

  return (
    <Container>
      <div className="margin-bottom-3">
        <Row>
          <Col xs={12} md={6}>
            <h3 className="center-title align-middle">Account Overview</h3>
          </Col>
          <Col xs={12} md={6} >
            <h5 className="darkgray">Your Feefo Support Contact</h5>
            <Contact data={contactData} />
          </Col>
        </Row>
      </div>
      <div>
        <Row className="justify-content-md-center">
          <Col className="g-0" xs={10} md={8}>
            <SaleCard data={salesData}/>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col className="g-0" xs={5} md={4}>
            <InformationCard data={uploadData}/>
          </Col>
          <Col className="g-0" xs={5} md={4}>
            <InformationCard data={linesData}/>
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default AccountOverview;