/* eslint-disable react/prop-types */
import React from "react";
import { Box } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormHelperText from "@mui/material/FormHelperText";

const MyInputTypeDropDown = ({
  error,
  TextFieldLabel,
  multilanguage,
  id = "",
  label = "",
  labelId = "",
  onChange,
  allprops={},
  sx = {  },
  data=[{value: " ", label : ""}],
  className,
  isInvalid = false,
  inputError = "",
  name =" "

  
}) => {
  return (
    <Box>
      <FormControl sx={{ width: "100%" }} error={error}>
        <InputLabel id={id} sx={{ color: "inherit" }}>
          {multilanguage(TextFieldLabel)}
        </InputLabel>
        <Select
          labelId={labelId}
          id={id}
          label={label}
          onChange={onChange}
          defaultValue={""}
          {...allprops}
          sx={sx}
          name={name}
          className={className}
        >
          {data.map((option, index) => {
            return (
              <MenuItem value={option.value} key={index}>
                {option.label}
              </MenuItem>
            );
          })}
        </Select>
        {isInvalid && (
          <FormHelperText>{inputError}</FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};
export default MyInputTypeDropDown;
