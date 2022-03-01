import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Row, Col, Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const BadgeInitial = styled(Badge)`
  padding: 0.8em 1em;
  font-size: 1.2em;

  ${props => props.primary && `
    background-color: #f9cf03 !important;
    color: black !important;
  `}
`;

export const Contact = ({data}) => {


  return (
      <Row>
        <Col md={2}>
          <BadgeInitial id="badgeInitial" $primary>{((data.name).charAt(0)).toUpperCase()}</BadgeInitial>
        </Col>
        <Col md={10}>
          <Row>
            <Col md={12}>
              <div id="badgeName">
                <b> {data.name}</b>
              </div>
            </Col>
            <Col md={12}>
              <Row>
                <Col >
                  <FontAwesomeIcon icon={faEnvelope} /> 
                  <span id="badgeEmail"> {data.email}</span>
                  <span id="badgePhone" className="px-2">{data.phone}</span>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
  )
}

Contact.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired
  })
};

export default Contact;