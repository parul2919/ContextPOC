
import React from 'react';
import styled from 'styled-components';
import styles from './caracterCards.style';


const CaracterCards = props => {
  const {
    className,
  } = props;

  return (
    <div className={`caracterCards ${className} col-xs-12`}>
      <div className="imageWrapper">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS_4h0h_FqnZ4Zn_RgqCmVELgFS-T0OljP855G3kw0GGPlk1cf&s" />
        <div className="opaqueOverlay">
          <div className="relation"> Eli's Girlfriend</div>
          <div className="created-history"> id: 111 : created 2 yr's ago</div>
        </div>
      </div>
      <div className="desc-wrapper">
        <table className="info-table">
          <tbody>
            <tr className="info-table-row"> 
              <td align="left">John</td>
              <td align="right">Doe</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">Mary</td>
              <td align="right">Moe</td>
            </tr>
            <tr className="info-table-row"> 
              <td align="left">July</td>
              <td align="right">Dooley</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default styled(CaracterCards)`${styles}`;


