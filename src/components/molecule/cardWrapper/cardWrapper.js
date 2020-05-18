
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
    cardDisplayData,
    filterSelectionObj
  } = props;
  const [displayData, setDisplayData] = useState([]);
  const [error, setError] = useState(false);
  const [isFilter, setIsFilter] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    setDisplayData(cardDisplayData.length ?  cardDisplayData : cardData);
  }, [cardData, cardDisplayData]);

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
    const characters = cardData.filter(item => (item.name).toLowerCase().includes(input.toLowerCase()));
    if(input.length){
      if (characters.length){
        setDisplayData(characters);
        setIsFilter(true);
        setError(false);
      }else {
        setError(true);
        setDisplayData(cardData);
        setIsFilter(false);
      }
    } else{
      setDisplayData(cardData);
      setIsFilter(false);
    }
  }

  const updateSearch = (text) => {
    setSearchText(text);
  }

  const searchHandler = (e) => {
    filterCharacter(searchText);
  }

  return (
    <div className={`cardWrapper ${className}`}>
        <Row className="tag-wrapper">
          <ul>
          {
            Object.keys(filterSelectionObj).map((oneKey,i)=>{
              return (
                  filterSelectionObj[oneKey].length && <li key={i}>{filterSelectionObj[oneKey]}</li>
                )
            })
          }
          </ul>
        </Row>
        <Row>
          <Col xs={12} md={8} lg={9} className="d-flex"> <InputAtom variant="outlined" label="search by name" inputId="searchName" updateSearch={updateSearch} buttonClickHandler={searchHandler}/><ButtonAtom label="search" buttonClickHandler={searchHandler}/></Col>
          <Col xs={12} md={4} lg={3} className="text-right"> <Selectbox options={['ascending','decending']} label="sort By" id="sortBySelect" onSelectChange={sort}/> </Col>
        </Row>
        {error && <div className="error">Sorry ! we could not find any result based on your search</div>}
        <Row>
          {
            displayData && displayData.map((item, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <CaracterCards itemData={item} />
              </Col>
            ))
          }
        </Row>
    </div>
  );
};

const ConnectedCardWrapper = props => (
  <ContextApiConsumer>
    {({ updateContextData, cardData, sortType, inputVal, cardDisplayData, filterSelectionObj}) => (
      <CardWrapper
        {...props}
        updateContextData={updateContextData}
        cardData={cardData}
        sortType={sortType}
        inputVal={inputVal}
        cardDisplayData={cardDisplayData}
        filterSelectionObj={filterSelectionObj}
      />
    )}
  </ContextApiConsumer>
);

export default styled(ConnectedCardWrapper)`${styles}`;
export { CardWrapper };



