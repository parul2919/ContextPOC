import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";
import CheckboxLabels from "../../atoms/checkbox";
import { CardContent, CardActions, Card } from "@material-ui/core";
import { ContextApiConsumer } from "./../../../config/contextApi";
import styles from './filterCards.style';
 
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    border: "1px solid #000",
    marginBottom: "10px",
  },
  checkWrapper: {
    display: "block",
  },
});
 
const FilterCards = (props) => {
  const { item, updateContextData, cardData, className } = props;
  const classes = useStyles();
  const [displayData, setDisplayData] = useState(cardData);
  useEffect(() => {
    setDisplayData(cardData);
  }, [cardData]);
  const handleChangeConfig = (evt) => {
  
    const speciesFilter = [
      ...document.querySelectorAll('input[value="Species"]:checked'),
    ];
    const genderFilter = [
      ...document.querySelectorAll('input[value="Gender"]:checked'),
    ];
    const originFilter = [
      ...document.querySelectorAll('input[value="Origin"]:checked'),
    ];
 
    let speciesFilterArray = [];
    speciesFilter.forEach((item) => {
      speciesFilterArray.push(item.name);
      return speciesFilterArray;
    });
 
    let genderFilterArray = [];
    genderFilter.forEach((item) => {
      genderFilterArray.push(item.name);
      return genderFilterArray;
    });
 
    let originFilterArray = [];
    originFilter.forEach((item) => {
      originFilterArray.push(item.name);
      return originFilterArray;
    });
 
    const filterSelectionObj = {
      species: speciesFilterArray,
      gender: genderFilterArray,
      origin: originFilterArray,
    };
    let filteredCodes = getFilteredCodes(displayData, filterSelectionObj);

    updateContextData({
      cardDisplayData:filteredCodes,
      filterSelectionObj:filterSelectionObj,
    });
  };
  const getFilteredCodes = (cardData, filterSelectionObj) => {
    let filterData = [];
    filterData = cardData.filter((data) => {
      let matched = true;
      for (let [key, value] of Object.entries(filterSelectionObj)) {
        let dataValueToBeMatched = data[key];
        if (key == "origin" && data[key])
          dataValueToBeMatched = data[key]["name"];
        if (value.length > 0 && value.indexOf(dataValueToBeMatched) == -1)
          matched = false;
      }
      if (matched) return data;
    });
    return filterData;
  };
 
  // console.log(activeFilter);
  return (
    <div id="filterWrapper" className={className}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <h4>{item.label}</h4>
        </CardContent>
        <CardActions className={classes.checkWrapper}>
          {item.categories.map((filterCat, index) => (
            <CheckboxLabels
              label={filterCat}
              key={index}
              onCheckBoxChnage={handleChangeConfig}
              type={item.label}
            />
          ))}
        </CardActions>
      </Card>
    </div>
  );
};
 
const ConnectedFilterCards = (props) => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter, cardData, cardDisplayData,filterSelectionObj }) => (
      <FilterCards
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
        cardData={cardData}
        cardDisplayData={cardDisplayData}
        filterSelectionObj={filterSelectionObj}
      />
    )}
  </ContextApiConsumer>
);
 
export default styled(ConnectedFilterCards)`${styles}`;
export { FilterCards };
 
