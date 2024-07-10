/* eslint-disable react/prop-types */
import React from "react";
import "../Style.css";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";


const MyDropDown = ({label,multiLanguage,props,isInvalid,datalist={option:'',label:''}}) => {
  

  return (
    <>
      <InputLabel id="demo-simple-select-label" sx={{ color: "inherit" }}>
        {multiLanguage(label)}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="Select language"
        onChange={onchange}
        defaultValue={""}
        {...props}
        className={isInvalid === true ? "Mui-error" : ""}
      >
        {datalist.map((option, index) => {
          return (
            <MenuItem value={option.value} key={index}>
              {option.label}
            </MenuItem>
          );
        })}
      </Select>
    </>
  );
};
export default MyDropDown;
