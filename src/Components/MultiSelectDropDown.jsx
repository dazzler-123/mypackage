/* eslint-disable react/prop-types */
import React from "react";
import {

  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  OutlinedInput,

} from "@mui/material";
import "../Style.css";
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const MyMultiSelectDropDown = ({
  multiLanguage,
  formLable,
  props,
  selectedCourses,
  onChange,
  techKnowButtonText,
  label,
  optionList = { name: "", id: "" },
  
}) => {
  return (
    <>
      <InputLabel id="demo-multiple-checkbox-label">
        {multiLanguage(formLable)}
      </InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={selectedCourses}
        {...props}
        onChange={onChange}
        input={<OutlinedInput label={multiLanguage(label)} />}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{multiLanguage(techKnowButtonText)}</em>;
          }

          return selected.join(", ");
        }}
        MenuProps={MenuProps}
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem disabled value="">
          <em> {multiLanguage(techKnowButtonText)}</em>
        </MenuItem>
        {optionList.map((name) => (
          <MenuItem key={name.id} value={name.label}>
            <Checkbox checked={selectedCourses.indexOf(name.label) > -1} />
            <ListItemText primary={name.label} />
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MyMultiSelectDropDown;
