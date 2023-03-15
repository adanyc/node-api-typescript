import cors from 'cors';
import express, { Application } from 'express';
import helmet from 'helmet';
import Routes from './routes';

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public config(app: Application): void {
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(cors({ origin: true, credentials: true }));
  }
}
