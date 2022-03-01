import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Card, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

import '../../style/sale/sale-card.css';

export const SaleCard = ({data}) => {

    return (
        <Card className="padding-10">
            <FontAwesomeIcon color="gray" className="position-absolute top-0 end-0 margin-10" icon={faQuestionCircle} />
            <Row>
                <h5 className="sale-card-title">
                    <FontAwesomeIcon color={"#3eb1eb"} icon={faUpload} /> <b>Sales</b>
                </h5>
            </Row>
            <Row>
                <span className="high-line" id={"saleDescription"}>
                    You have <b>{data.upload} uploads</b> and <b>{data.lines}</b> lines added
                </span>
            </Row>
        </Card>
    )
}

SaleCard.propTypes = {
    data: PropTypes.shape({
      upload: PropTypes.number.isRequired,
      lines: PropTypes.number.isRequired,
    })
};
  
export default SaleCard;