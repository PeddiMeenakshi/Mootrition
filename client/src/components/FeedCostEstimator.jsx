import React, { useState } from 'react';
import {
  Box, Typography, MenuItem, FormControl, Select,
  InputLabel, Table, TableBody, TableCell, TableHead, TableRow, Paper
} from '@mui/material';

const feedPrices = {
  Telangana: {
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
  Karnataka: {
    "Maize": 19,
    "Cottonseed Cake": 26,
    "Rice Bran": 14,
    "Silage": 4
  }
};

const FeedCostEstimator = ({ dietPrediction }) => {
  const [state, setState] = useState('');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const currentPrices = feedPrices[state] || {};

  let totalCost = null;
  if (
    dietPrediction &&
    dietPrediction.length === 3 &&
    state &&
    Object.keys(currentPrices).length > 0
  ) {
    const [dry, conc, green] = dietPrediction.map(val => parseFloat(val));
    if (!isNaN(dry) && !isNaN(conc) && !isNaN(green)) {
      const dryCost = (currentPrices["Maize"] || 0) * dry;
      const concCost = (currentPrices["Cottonseed Cake"] || 0) * conc;
      const greenCost = (currentPrices["Silage"] || 0) * green;
      totalCost = (dryCost + concCost + greenCost).toFixed(2);
    }
  }

  return (
    <Box mt={4}>
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
        <>
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

          {totalCost && (
            <Typography variant="h6" sx={{ mt: 3 }} color="success.main" fontFamily="Quicksand">
              💰 Estimated Daily Feed Cost: ₹{totalCost}
            </Typography>
          )}
        </>
      )}
    </Box>
  );
};

export default FeedCostEstimator;
