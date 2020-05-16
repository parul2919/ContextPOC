import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  checkBlock: {
    margin: '0 8px  8px',
  }
}); 
export default function CheckboxLabels(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    checkedB: true,
  });
  const {label} = props;
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup className={classes.checkBlock}>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label={label}
      />
    </FormGroup>
  );
}
