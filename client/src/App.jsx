import React, { useState } from 'react';
import FeedForm from './components/FeedForm';
import FeedResult from './components/FeedResult';
import FeedCostEstimator from './components/FeedCostEstimator';
import { Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import BackgroundGrid from './components/backgroundGrid/BackgroundGrid';
import './App.css';

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="app-wrapper">
      <BackgroundGrid />

      <div className="content-container">
        <div className="main-layout">
          {/* Left side: Feed Form & Result */}
          {/* <motion.div
            className="left-panel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          > */}
            <Paper elevation={6} className="card feed-card">
              <Box textAlign="center" mb={6}>
                <Typography variant="h3" fontFamily="Quicksand" gutterBottom color="primary">
                  🐮 Cattle Feed Optimizer
                </Typography>
                <Typography variant="subtitle1" fontFamily="Poppins" color="text.secondary">
                  Personalized daily feed recommendations based on your cattle's profile.
                </Typography>
              </Box>
              <FeedForm setResult={setResult} />
              <FeedResult result={result} />
            </Paper>
          {/* </motion.div> */}

          {/* Right side: Cost Estimator & Graph */}
          <div className="right-panel">
            <Paper elevation={6} className="card feed-card">
              <Typography variant="h6" fontFamily="Poppins" gutterBottom color="secondary">
                📍 Local Feed Cost Estimator
              </Typography>
              <FeedCostEstimator />
            </Paper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
