import express, { Application } from 'express';
import Server from './server';

const port = process.env.port || 3000;
const app: Application = express();
const server: Server = new Server(app);

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
