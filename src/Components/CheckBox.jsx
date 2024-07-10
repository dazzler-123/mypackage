/* eslint-disable react/prop-types */
import React from "react";
import "../Style.css";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Box } from "@mui/material";
const MyCheckBox = ({
  onchange,
  multiLanguage,
  label,
  props,
  checkeddefaultval,
}) => {
  return (
    <Box
      sx={{
        m: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked={checkeddefaultval} />}
          label={multiLanguage(label)}
          onChange={onchange}
          {...props}
        />
      </FormGroup>
    </Box>
  );
};
export default MyCheckBox;
