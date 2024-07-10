/* eslint-disable react/prop-types */
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from '@mui/material/FormControl';
import FormLabel from "@mui/material/FormLabel";


const MyRadioGroups = ({
  onChange=()=>null,
  defaultValue,
  radioOptions = { option1: "", optionlabel: "" },
  multiLanguage=() => null,
  formLable,
  name,
  id,
}) => {
  return (
    <>
    <FormControl  sx={{ width: '100%',alignItems:'flex-start'}}>
        <FormLabel id={id}>
          {multiLanguage(formLable)}
        </FormLabel>
        <br />
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name={name}
          defaultValue={defaultValue}
          onChange={onChange}
        >
          {radioOptions.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item.option1}
              control={<Radio />}
              label={multiLanguage(item.optionlabel)}
              labelPlacement="start"
            />
          ))}
          
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default MyRadioGroups;
