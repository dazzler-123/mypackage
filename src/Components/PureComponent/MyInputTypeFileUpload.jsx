/* eslint-disable react/prop-types */
// src/components/InputTypeFileUpload.js

import React from 'react';

import { Button, FormControl, Typography } from '@mui/material';


const MyInputTypeFileUpload = ({multilanguage,inputError,isInvalid=false,color,name,label,component,onChange,allprops,type="file"}) => {
 

  return (
    <FormControl sx={{ width: '100%' }}>
      <Button
       // variant="contained"
       name={name}
        component={component}
        color={color}
      >
        {multilanguage(label)}
        <input
          type={type}

         {...allprops}
         hidden
         onChange={onChange}

        />
      </Button>
      {isInvalid && <Typography color={color}>{inputError}</Typography>}
    </FormControl>
  );
};

export default MyInputTypeFileUpload;
