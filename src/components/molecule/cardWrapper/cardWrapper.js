
import React, {useState, useEffect} from 'react';
import {Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import styles from './cardWrapper.style';
import CaracterCards from '../caracterCards/caracterCards';
import Selectbox from '../../atoms/selectbox';
import { ContextApiConsumer } from './../../../config/contextApi';
import InputAtom from '../../atoms/input';
import ButtonAtom from '../../atoms/button';

const CardWrapper = props => {
  const {
    className,
    updateContextData,
    cardData,
    inputVal,
  } = props;
  const [displayData, setDisplayData] = useState(cardData);
  const [isFilter, setIsFilter] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    setDisplayData(cardData);
  }, [cardData]);

  const sort = (e) => {
    let sortdata
    //const selectVal = e.target.value;
    if (e === "ascending") {
      sortdata = cardData.sort(function(a,b) {
        return a.id - b.id
      })
      updateContextData({
        sortType: "asc",
      });
    } else if (e === "decending") {
      sortdata = cardData.sort(function(a,b) {
        return b.id - a.id
      })
      updateContextData({
        sortType: "dsc",
      });
    }
    setDisplayData(sortdata);
  }

  const filterCharacter = (input) => {
    let character = [];
    displayData.map((item, index) => {
      return (item.name).toLowerCase().includes(input.toLowerCase()) && character.push(item);
    });
    if (character.length){
    setDisplayData(character);
    setIsFilter(true);
    setError(false);
    }else {
      setError(true);
      setDisplayData(cardData);
      setIsFilter(false);
    }
  }
  


  const searchHandler = (e) => {
    let searchKeyword = inputVal;
    filterCharacter(searchKeyword);
  }
  return (
    <div className={`cardWrapper ${className}`}>
        
        <Row>
          <Col xs={6} className="d-flex"> <InputAtom variant="outlined" label="search by name" inputId="searchName" /><ButtonAtom label="search" buttonClickHandler={searchHandler}/></Col>
          <Col xs={6} className="text-right"> <Selectbox options={['ascending','decending']} label="sort By" id="sortBySelect" onSelectChange={sort}/> </Col>
        </Row>
        {error && <div className="error">Sorry ! we could not find any result based on your search</div>}
        <Row>
          {
            displayData && displayData.map((item, index) => (
              <Col xs={4}>
                <CaracterCards itemData={item} key={index}/>
              </Col>
            ))
          }
        </Row>
    </div>
  );
};

const ConnectedCardWrapper = props => (
  <ContextApiConsumer>
    {({ updateContextData, cardData, sortType, inputVal, checkedFilter}) => (
      <CardWrapper
        {...props}
        updateContextData={updateContextData}
        cardData={cardData}
        sortType={sortType}
        inputVal={inputVal}
        checkedFilter={checkedFilter}
      />
    )}
  </ContextApiConsumer>
);

export default styled(ConnectedCardWrapper)`${styles}`;
export { CardWrapper };



