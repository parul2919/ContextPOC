import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { ContextApiConsumer } from './../../config/contextApi';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  checkBlock: {
    margin: '0 8px  8px',
  }
}); 
const CheckboxLabels = props => {
  const classes = useStyles();
  const {label, onCheckBoxChnage, checkedFilter} = props;
  const [state, setState] = useState("");

  //checkedFilter
  
  const handleChange = (evt) => {
    onCheckBoxChnage(evt.currentTarget);
    let checkBoxObj = document.querySelectorAll('.checkbox-group');
    checkBoxObj.forEach((element) => {
      let checkboxInput = element.querySelectorAll("input[type = 'checkbox']")[0];
      if (evt.currentTarget.name === checkboxInput.name &&  evt.currentTarget.checked !== true) {
        checkboxInput.checked = true;
        console.log('in if ');
      }else if (evt.currentTarget.name === checkboxInput.name &&  evt.currentTarget.checked === true){
        checkboxInput.checked = false;
      }
    });
    if (evt.currentTarget.checked) {
      setState(evt.currentTarget.name);
      console.log('in else ');
    }
    
  }
  return (
    <div className="checkbox-group">
    <FormGroup className={classes.checkBlock}>
      <FormControlLabel
        control={
          <Checkbox
            defaultChecked={props.widgetCount === 1}
            checked = {false}
            onChange={handleChange}
            name={label}
            color="primary"
            id= {`checkbox-${label}`}
          />
        }
        label={label}
      />
    </FormGroup>
    </div>
  );
};


const ConnectedCheckbox = props => (
  <ContextApiConsumer>
    {({ updateContextData, checkedFilter}) => (
      <CheckboxLabels
        {...props}
        updateContextData={updateContextData}
        checkedFilter={checkedFilter}
      />
    )}
  </ContextApiConsumer>
);

export default ConnectedCheckbox;
export { CheckboxLabels };