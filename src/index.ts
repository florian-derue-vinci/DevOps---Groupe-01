import express from 'express';
import dejanRouter from './dejan';

const app = express();
const port = 3000;

app.use(dejanRouter);

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`);
});

export default app;