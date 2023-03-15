import { Router } from 'express';
import UserController from '../controllers/user.controller';
import UserHttpRepository from '../repositories/user-http.repository';

export default class UserRoutes {
  private router = Router();

  constructor() {
    this.intializeRoutes();
  }

  intializeRoutes() {
    const userController = new UserController(new UserHttpRepository());

    this.router.route('/').post(userController.create.bind(userController));
    this.router.route('/:id').delete(userController.delete.bind(userController));
    this.router.route('/').put(userController.update.bind(userController));
    this.router.route('/:id').get(userController.find.bind(userController));
    this.router.route('/').get(userController.findAll.bind(userController));
  }

  getRouter() {
    return this.router;
  }
}
