import React, { useState } from 'react';
import FeedForm from './components/FeedForm';
import FeedResult from './components/FeedResult';
import FeedCostEstimator from './components/FeedCostEstimator';
import { Typography, Box, Paper } from '@mui/material';
import BackgroundGrid from './components/backgroundGrid/BackgroundGrid';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);
  const [dietPrediction, setDietPrediction] = useState(null); // [dry, conc, green]
  console.log('Prediction for cost calc:', dietPrediction);

  return (
    <div className="app-wrapper">
      <BackgroundGrid />

      <div className="content-container">
        <div className="main-layout">
          <Paper elevation={6} className="card feed-card">
            <Box textAlign="center" mb={6}>
              <Typography variant="h3" fontFamily="Quicksand" gutterBottom color="primary">
                🐮 Cattle Feed Optimizer
              </Typography>
              <Typography variant="subtitle1" fontFamily="Poppins" color="text.secondary">
                Personalized daily feed recommendations based on your cattle's profile.
              </Typography>
            </Box>

            {/* SINGLE FeedForm CALL */}
            <FeedForm setResult={setResult} onPrediction={(predicted) => setDietPrediction(predicted)} />
            
            {/* Show result */}
            <FeedResult result={result} />

            {/* Pass prediction to cost estimator */}
            <FeedCostEstimator dietPrediction={dietPrediction} />
          </Paper>
        </div>
      </div>
    </div>
  );
  
};

export default App;
