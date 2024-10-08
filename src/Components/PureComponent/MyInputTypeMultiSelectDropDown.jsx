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
multilanguage,
allprops,
error,
name="",
value={},
onChange,
TextFieldLabel,
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
                <InputLabel id="demo-multiple-checkbox-label">{multilanguage(TextFieldLabel)}</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={value}
                    onChange={onChange}
                    {...allprops}
                    name={name}
                    input={<OutlinedInput label={multilanguage(TextFieldLabel)} />}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <em>{multilanguage("createdynamicpage.techKnowButtonText")}</em>;
                        }

                        return selected.join(", ");
                    }}
                    MenuProps={MenuProps}
                    inputProps={inputProps}
                >
                    <MenuItem disabled value="">
                        <em>    {multilanguage(menuItemLabel)}</em>
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
