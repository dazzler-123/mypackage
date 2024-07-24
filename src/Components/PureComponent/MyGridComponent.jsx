import React from'react';
import { Box, Grid, Typography } from '@mui/material';

const MyGridComponent = ({ columns = 4, itemStyle = {}, titleStyle = {}, valueStyle = {}, multilanguage = (e) => e,userData = [{ title: '', value: '' }] }) => {
    return (
      <Box sx={{ flexGrow: 1, padding: 2 }}>
        <Grid container spacing={2}>
          {userData?.map((item, index) => (
            <Grid item xs={12} sm={6} md={12 / columns} key={index}>
              <Box sx={{ padding: 2, ...itemStyle }}>
                <Typography variant="h6" gutterBottom sx={{ ...titleStyle }}>
                  {multilanguage(item.title)}
                </Typography>
                <Typography variant="body1" sx={{ ...valueStyle }}>
                  {item.value}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  export default MyGridComponent;