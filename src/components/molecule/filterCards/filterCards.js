import React from 'react';
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
  const {item, checkedFilter, updateContextData} =  props;
  const classes = useStyles();

  const handleChangeConfig = (evt) => {
    const {name } = evt || {};
    const card = {
      value: name,
      name,
    };
    // eslint-disable-next-line no-unused-expressions
    checkedFilter.push(card);

    updateContextData(
      checkedFilter,
    );
  };
  console.log(checkedFilter);
  return (
    <div id="filterWrapper">
      <Card className={classes.root} variant="outlined">
        <CardContent>
            <h3>{item.label}</h3>
        </CardContent>
        <CardActions className={classes.checkWrapper}>
          {
            item.categories.map((filterCat, index) => (
              <CheckboxLabels label = {filterCat} key={index} onCheckBoxChnage={handleChangeConfig}/>
            ))
          }
        </CardActions>
      </Card>
    </div>
  );
};

const ConnectedFilterCards = props => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter}) => (
      <FilterCards
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
      />
    )}
  </ContextApiConsumer>
);

export default ConnectedFilterCards;
export { FilterCards };
