import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { ContextApiConsumer } from './../../config/contextApi';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    minWidth: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const NativeSelects = props => {
  const classes = useStyles();
  const {label, options, id, onSelectChange} = props;

  const handleChange = (event) => {
    onSelectChange(event.target.value);
    props.updateContextData({
      selectVal: event.target.value,
    })
  };
  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
        <Select
          native
          value={props.selectVal}
          onChange={handleChange}
          label={label}
          inputProps={{
            name: label,
            id: id,
          }}
        >
          <option aria-label="None" value="" />
          {
            options  && options.map((item, index ) => (
              <option value={item} key={index}> {item} </option>
            ))
          }
        </Select>
      </FormControl>
    </div>
  );
}


const ConnectedSelect = props => (
  <ContextApiConsumer>
    {({ updateContextData, selectVal}) => (
      <NativeSelects
        {...props}
        updateContextData={updateContextData}
        selectVal={selectVal}
      />
    )}
  </ContextApiConsumer>
);

export default ConnectedSelect;
export { NativeSelects };