import express from 'express';

const app = express();

app.get('/', (req, res) => {
  throw new Error('YEAH BOOOOOI');
});

app.listen(8000, () => console.log("UP N' UP: 8000"));
