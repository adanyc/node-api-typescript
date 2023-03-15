import { Application } from 'express';
import UserRoutes from './user.routes';

export default class Routes {
  constructor(app: Application) {
    app.get('/', (req, res) => {
      res.status(200).json({ message: 'Connected!' });
    });
    app.use('/api/users', new UserRoutes().getRouter());
  }
}
