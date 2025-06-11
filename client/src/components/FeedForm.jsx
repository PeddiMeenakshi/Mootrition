import React, { useState } from 'react';
import { Button, TextField, MenuItem, Grid, InputAdornment } from '@mui/material';
import { Agriculture, LineWeight, CalendarToday, WbSunny } from '@mui/icons-material';
import axios from '../api';

const FeedForm = ({ setResult }) => {
  const [form, setForm] = useState({
    breed: '',
    weight: '',
    age: '',
    purpose: '',
    weather: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('/recommend', form);
      setResult(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="🐄 Breed"
          name="breed"
          select
          value={form.breed}
          onChange={handleChange}
        >
          {['Gir', 'Sahiwal', 'Jersey', 'Holstein', 'Red Sindhi'].map(b => (
            <MenuItem key={b} value={b}>{b}</MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="⚖️ Weight (kg)"
          name="weight"
          type="number"
          value={form.weight}
          onChange={handleChange}
          InputProps={{ startAdornment: <InputAdornment position="start"><LineWeight /></InputAdornment> }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="🎂 Age (months)"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          InputProps={{ startAdornment: <InputAdornment position="start"><CalendarToday /></InputAdornment> }}
        />
      </Grid>

      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label="🥛 Purpose"
          name="purpose"
          select
          value={form.purpose}
          onChange={handleChange}
        >
          {['Milk', 'Meat'].map(p => (
            <MenuItem key={p} value={p}>{p}</MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <TextField
          fullWidth
          label="☁️ Weather"
          name="weather"
          select
          value={form.weather}
          onChange={handleChange}
          InputProps={{ startAdornment: <InputAdornment position="start"><WbSunny /></InputAdornment> }}
        >
          {['Hot', 'Cold', 'Moderate'].map(w => (
            <MenuItem key={w} value={w}>{w}</MenuItem>
          ))}
        </TextField>
      </Grid>

      <Grid item xs={12}>
        <Button fullWidth variant="contained" color="success" onClick={handleSubmit}>
          🧠 Get Feed Recommendation
        </Button>
      </Grid>
    </Grid>
  );
};

export default FeedForm;
