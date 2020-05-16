import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CheckboxLabels from '../../atoms/checkbox';
import { CardContent, CardActions, Card } from '@material-ui/core';

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
  const {item} =  props;
    const classes = useStyles();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
          <h3>{item.label}</h3>
      </CardContent>
      <CardActions className={classes.checkWrapper}>
        {
          item.categories.map((filterCat, index) => (
            <CheckboxLabels label = {filterCat} key={index}/>
          ))
        }
      </CardActions>
    </Card>
  );
};

export default FilterCards;
