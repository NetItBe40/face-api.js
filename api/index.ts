import * as faceapi from '../src';
import express from 'express';

const app = express();

app.get('/api', (req, res) => {
  res.json({ message: 'Face API JS API is running' });
});

export default app;
