import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckboxLabels from '../../atoms/checkbox';
import { CardContent, CardActions, Card } from '@material-ui/core';
import { ContextApiConsumer } from './../../../config/contextApi';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      border:'1px solid #000',
      marginBottom: '10px',
    },
    checkWrapper: {
      display: 'block',
    }
  }); 

const FilterCards = props => {
  const {item, updateContextData} =  props;
  const classes = useStyles();
  const [filter, setFilter] = useState({'Human': false , 'Mytholog': false, 'Male': false, 'Female': false, 'Post-Apocalyptic Earth': false, 'Nuptia 4': false})
  const [activeFilter, setActiveFilter] = useState([]);
  useEffect(() => {
    updateContextData({
      checkedFilter: activeFilter,
    });
  }, []);
  const handleChangeConfig = (evt) => {
    const {name, checked} = evt || {};
    setFilter( prevState  => ({ ...prevState,  [name]: checked }));

    //const activeFilterNames = [...document.querySelectorAll('input:checked')];

    const speciesFilter = [...document.querySelectorAll('input[value="Species"]:checked')];
    const genderFilter = [...document.querySelectorAll('input[value="Gender"]:checked')];
    const originFilter = [...document.querySelectorAll('input[value="Origin"]:checked')];

    let speciesFilterArray = [];
    speciesFilter.forEach((item) => {
      speciesFilterArray.push(item.name);
      return  speciesFilterArray;
    });

    let genderFilterArray = [];
    genderFilter.forEach((item) => {
      genderFilterArray.push(item.name);
      return  genderFilterArray;
    });

    let originFilterArray = [];
    originFilter.forEach((item) => {
      originFilterArray.push(item.name);
      return  originFilterArray;
    });
    
    
    let filteredCodes = getFilteredCodes(props.cardData, "species", speciesFilterArray);
    console.log('hello',filteredCodes);
    /*updateContextData({
      cardData: props.cardData.filter(item => item.species == 'Human' && item.gender == "Female")
    });*/
  };

  const getFilteredCodes = (array, key, value) => {
    return array.filter(function (o) {
      let arr;
      if (value.length){
        value.forEach((item) => {
          o = o[key] === item;
        });
      } else{
        o = o[key] === value;
      }
      return o;
    });
  }

  console.log(activeFilter);
  return (
    <div id="filterWrapper">
      <Card className={classes.root} variant="outlined">
        <CardContent>
            <h3>{item.label}</h3>
        </CardContent>
        <CardActions className={classes.checkWrapper}>
          {
            item.categories.map((filterCat, index) => (
              <CheckboxLabels label = {filterCat} key={index} onCheckBoxChnage={handleChangeConfig} type={item.label}/>
            ))
          }
        </CardActions>
      </Card>
    </div>
  );
};

const ConnectedFilterCards = props => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter, cardData}) => (
      <FilterCards
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
        cardData={cardData}
      />
    )}
  </ContextApiConsumer>
);

export default ConnectedFilterCards;
export { FilterCards };
