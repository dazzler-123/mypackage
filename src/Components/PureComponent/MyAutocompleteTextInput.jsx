/* eslint-disable react/prop-types */
import React from "react";
import { FormControl, TextField, Autocomplete } from "@mui/material";

const MyAutocomplete = ({
  multilanguage,
  allprops,
  label,
  placeholder,
  error,
  helperText,
  onChange,
  name = "",
  sx = {},
  data = [],
  inputValue,
  setInputValue,
  value
}) => {
  return (
    <FormControl sx={{ width: "100%" }}>
      <Autocomplete
        options={data}
        getOptionLabel={(option) => option.label || ""}
        isOptionEqualToValue={(option, value) => {
          return option?.value === value?.value
        }}
        value={value}
        inputValue={inputValue}
        // inputValue={typeof inputValue === Object ? value.label : inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        onChange={onChange}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              label={multilanguage(label)}
              placeholder={multilanguage(placeholder)}
              error={error}
              helperText={helperText}
              {...allprops}
              name={name}
              sx={sx}
              fullWidth 
            />
          )
        }}
      />
    </FormControl>
  );
};

export default MyAutocomplete;
