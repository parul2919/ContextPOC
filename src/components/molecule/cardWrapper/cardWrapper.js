
import React from 'react';
import {Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './cardWrapper.style';
import CaracterCards from '../caracterCards/caracterCards';


const CardWrapper = props => {
  const {
    className,
    item
  } = props;
  console.log('prop', item);
  var arr2 = [{name: 'parul'},{name: 'sonal'},{name: 'satchit'}]
  return (
    <div className={`cardWrapper ${className}`}>
        <Row>
        <Col xs={4}>
          {
            arr2.map((index ) => (<CaracterCards/>))
          }
        </Col>
        </Row>
    </div>
  );
};


export default styled(CardWrapper)`${styles}`;

