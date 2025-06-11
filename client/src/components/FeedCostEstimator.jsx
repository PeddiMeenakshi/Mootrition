import React, { useState } from 'react';
import { Box, Typography, MenuItem, FormControl, Select, InputLabel, Table, TableBody, TableCell, TableHead, TableRow, Paper } from '@mui/material';

const feedPrices = {
    
  "None":{
    "---":"----"
  },
  "Telangana": {
    "Maize": 18,
    "Cottonseed Cake": 28,
    "Rice Bran": 15,
    "Silage": 5
  },
  "Andhra Pradesh": {
    "Maize": 20,
    "Cottonseed Cake": 30,
    "Rice Bran": 16,
    "Silage": 6
  },
  "Karnataka": {
    "Maize": 19,
    "Cottonseed Cake": 26,
    "Rice Bran": 14,
    "Silage": 4
  }
};

const FeedCostEstimator = () => {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const currentPrices = feedPrices[state] || {};

  return (
    <Box mt={13}>
      <Typography variant="h5" gutterBottom fontFamily="Quicksand">
     choose a location
      </Typography>

      <FormControl fullWidth sx={{ my: 2 }}>
        <InputLabel>Select State</InputLabel>
        <Select value={state} label="Select State" onChange={handleChange}>
          {Object.keys(feedPrices).map((stateName) => (
            <MenuItem key={stateName} value={stateName}>
              {stateName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {state && (
        <Paper elevation={3} sx={{ mt: 2 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Feed Type</strong></TableCell>
                <TableCell><strong>Estimated Price (₹/kg)</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(currentPrices).map(([feed, price]) => (
                <TableRow key={feed}>
                  <TableCell>{feed}</TableCell>
                  <TableCell>{price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      )}
    </Box>
  );
};

export default FeedCostEstimator;
