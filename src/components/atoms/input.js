import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { ContextApiConsumer } from './../../config/contextApi';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: '8px',
      width: '350px',
    },
  },
}));

const InputAtom = props => {
  const classes = useStyles();
  const {label, variant, inputId} = props;

  const [typeValue, setTypeValue] = useState("");

  const handleTyping = (e) => {
      const txt = e.target.value;
    setTypeValue(txt);
    props.updateContextData({
      inputVal: txt,
    })
  }
  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField label={label} variant={variant} id={inputId} value={props.inputVal} onChange={handleTyping}/>
    </form>
  );
};

const ConnectedInputAtom = props => (
    <ContextApiConsumer>
      {({ updateContextData, inputVal}) => (
        <InputAtom
          {...props}
          updateContextData={updateContextData}
          inputVal={inputVal}
        />
      )}
    </ContextApiConsumer>
  );
  
  export default ConnectedInputAtom;
  export { InputAtom };
