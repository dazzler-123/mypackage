/* eslint-disable react/prop-types */
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { FormControlLabel } from "@mui/material";

const MyInputTypeRadioGroup = ({
  multilanguage,
  id = "",
  sx = {},
  row = false,
  name="",
  TextFieldLabel,
  allprops,
  defaultvalue = null,
  onChange,
  data = [{ option1: "", optionlabel: "" }],
}) => {
  return (
    <FormControl sx={{ width: "100%", alignItems: "flex-start" }}>
      <FormLabel id={id}>{multilanguage(TextFieldLabel)}</FormLabel>
      <RadioGroup
        row={row}
        aria-labelledby="demo-row-radio-buttons-group-label"
        name={name}
        defaultValue={defaultvalue}
        onChange={onChange}
        {...allprops}
        sx={sx}
      >
        {data.map((item, index) => (
          <FormControlLabel
            key={index}
            value={item.option1}
            control={<Radio />}
            label={multilanguage(item.optionlabel)}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default MyInputTypeRadioGroup;
