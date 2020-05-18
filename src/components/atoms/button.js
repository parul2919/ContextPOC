import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '0 0 0 10px',
      height:'55px'
    },
  },
}));

const ButtonAtom = props => {
    const classes = useStyles();
    const {label, buttonClickHandler} = props;
    const onButtonClick = (event) => {
        buttonClickHandler(event);
      };
    return (
        <div className={classes.root}>
            <Button variant="contained" onClick={onButtonClick}>{label}</Button>
        </div>
    );
}

export default ButtonAtom;