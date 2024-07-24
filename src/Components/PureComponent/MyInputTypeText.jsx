/* eslint-disable react/prop-types */
import React from "react";
import { FormControl } from "@mui/material";
import TextField from "@mui/material/TextField";
const MyInputTypeText = ({
  multilanguage,
  allprops,
  TextFieldLabel,
  placeholder,
  error,
  helperText,
  autoComplete = "off",
  type = "text",
  onChange,
  name="",
  sx={}
}) => {
   
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField
        label={multilanguage(TextFieldLabel)}
        type={type}
        name={name}
        autoComplete={autoComplete}
        placeholder={multilanguage(placeholder)}
        error={error}
        helperText={helperText}
        {...allprops}
        onChange={onChange}
        sx={sx}
        fullWidth
      />
    </FormControl>
  );
};

export default MyInputTypeText;
