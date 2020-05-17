
import React from 'react';
import styled from 'styled-components';
import styles from './caracterCards.style';
import moment from 'moment';

const CaracterCards = props => {
  const {
    className,
    itemData,
  } = props;
  const {name, status, created, species, id, gender, origin, location, image, type} = itemData;

  const dateDiff = (givenDate) => {
    const createdDate = moment(givenDate).format('YYYY');
    return moment().diff(createdDate, 'years');
  }
  
  return (
    <div className={`caracterCards ${className} col-xs-12`}>
      <div className="imageWrapper">
        <img src={image} alt={name}/>
        <div className="opaqueOverlay">
          <div className="relation"> {name} {type && `- ${type}`}</div>
          <div className="created-history"> id: {id} : created {dateDiff(created)} yrs ago</div>
        </div>
      </div>
      <div className="desc-wrapper">
        <table className="info-table">
          <tbody>
            <tr className="info-table-row"> 
              <td align="left">STATUS</td>
              <td align="right">{status}</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">SPECIES</td>
              <td align="right">{species}</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">GENDER</td>
              <td align="right">{gender}</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">ORIGIN</td>
              <td align="right">{origin.name}</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">LAST LOCATION</td>
              <td align="right">{location.name}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default styled(CaracterCards)`${styles}`;


