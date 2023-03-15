import { Request, Response } from 'express';
import { UserRepository } from '../domain/user.repository';

export default class UserController {
  constructor(
    private userRepository: UserRepository,
  ) { }

  async create(req: Request, res: Response) {
    try {
      await this.userRepository.create(req.body);
      res.status(201).json({ message: 'Usuario registrado' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      await this.userRepository.delete(Number(req.params.id));
      res.status(204).json({ message: 'Usuario eliminado' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async update(req: Request, res: Response) {
    try {
      await this.userRepository.update(req.body);
      res.status(200).json({ message: 'Usuario actualizado' });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async find(req: Request, res: Response) {
    try {
      const user = await this.userRepository.find(Number(req.params.id));
      res.status(200).json(user);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  async findAll(req: Request, res: Response) {
    try {
      const users = await this.userRepository.findAll();
      res.status(200).json(users);
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }
}
