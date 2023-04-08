import express, { Application } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { Database } from '@/database/database';
import routes from './routes';

class App {
  public app: Application;

  constructor() {
    this.app = express();

    this.database();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(helmet());
    this.app.use(cors());

    this.app.use(morgan('dev'));
    this.app.use(express.json());
  }

  private routes() {
    this.app.use('/api/v1', routes);
  }

  private async database() {
    await Database.init();
  }
}

export default new App().app;
