import React from 'react';
import { Typography } from '@mui/material';

const FeedResult = ({ result }) => {
  if (!result) return null;

  return (
    <div style={{ marginTop: '2rem' }}>
      <Typography variant="h6">Recommended Feed (per day):</Typography>
      <Typography>🌾 Dry Fodder: {result.dry_fodder} kg</Typography>
      <Typography>🍵 Concentrate: {result.concentrate} kg</Typography>
      <Typography>🌿 Green Fodder: {result.green_fodder} kg</Typography>
    </div>
  );
};

export default FeedResult;
