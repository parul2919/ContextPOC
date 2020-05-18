import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ContextApiConsumer } from './../../config/contextApi';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '100%',
    },
  },
}));

const InputAtom = props => {
  const classes = useStyles();
  const {label, variant, inputId, updateSearch, buttonClickHandler} = props;

  const [searchText, setSearchText] = useState("");

  const handleTyping = (e) => {
    const search_text = e.target.value;
    setSearchText(search_text);
    updateSearch(search_text);
    buttonClickHandler(e);
  }
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label={label} variant={variant} id={inputId} onChange={handleTyping}/>
    </form>
  );
};

  export default InputAtom;
