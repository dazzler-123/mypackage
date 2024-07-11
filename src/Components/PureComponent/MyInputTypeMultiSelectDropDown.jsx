/* eslint-disable react/prop-types */
import React from "react";
import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    ListItemText,
    OutlinedInput,
    FormHelperText
} from "@mui/material";

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

const MyInputTypeMultiSelectDropDown = ({
multiplelanguage,
allprops,
error,
name="",
value={},
onChange,
textLabel,
renderValue,
inputProps ={'aria-label': 'Without label' },
inputError,
isInvalid=false,
menuItemLabel='createdynamicpage.techKnowButtonText',
data=[{id:"",label:""}],
selectedCourses,


}) => {

    return (
        
        <FormControl  sx={{ width: '100%' }}
                error={error}

            >
                <InputLabel id="demo-multiple-checkbox-label">{multiplelanguage(textLabel)}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={value}
                    {...allprops}
                    onChange={onChange}
                    name={name}
                    input={<OutlinedInput label={multiplelanguage(textLabel)} />}
                    renderValue={renderValue}
                    MenuProps={MenuProps}
                    inputProps={inputProps}
                >
                    <MenuItem disabled value="">
                        <em>    {multiplelanguage(menuItemLabel)}</em>
                    </MenuItem>
                    {data.map((name) => (
                        <MenuItem key={name.id} value={name.label}>
                            <Checkbox checked={selectedCourses.indexOf(name.label) > -1} />
                            <ListItemText primary={name.label} />
                        </MenuItem>
                    ))}

                </Select>
                {isInvalid &&
                    (
                        <FormHelperText>
                            {inputError}
                        </FormHelperText>

                    )}
            </FormControl>
        
    );
};

export default MyInputTypeMultiSelectDropDown;
