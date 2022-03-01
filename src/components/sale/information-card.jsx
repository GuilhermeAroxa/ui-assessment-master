import React from 'react';
import styled from 'styled-components';
import { Card, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../style/sale/sale-card.css';

const Information = styled.h3`
font-size: 2.5em;

${props => props.success && `
  color: #26ad58 !important;
`}
`;

const InfoDescription = styled.h4`
font-size: 1.3em;
color: gray;
`;

export const InformationCard = ({data}) => {


    return (
        <Card className="padding-10">
            <Row>
                <Information id="information" success>{data.information}</Information>
            </Row>
            <Row>
                <InfoDescription id="infoDescription">
                    {data.infoDescription}
                </InfoDescription>
            </Row>
        </Card>
    )
}

InformationCard.propTypes = {
    data: PropTypes.shape({
      information: PropTypes.string.isRequired,
      infoDescription: PropTypes.string.isRequired,
    })
};

  
export default InformationCard;