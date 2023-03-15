import { User } from '../domain/user';
import { UserRepository } from '../domain/user.repository';

const users: User[] = [
  {
    id: 1,
    fullName: 'John Do',
    workEmail: 'john.doe@example.com',
  },
  {
    id: 2,
    fullName: 'Jane Smith',
    workEmail: 'jane.smith@example.com',
  }
];

export default class UserHttpRepository implements UserRepository {
  async create(user: User): Promise<void> {
    user.id = 1;

    if (users.length > 0) {
      const userWithMaxId = users.reduce((prev, current) => (prev.id > current.id) ? prev : current);
      user.id = userWithMaxId.id + 1;
    }

    users.push(user);
  }

  async delete(id: number): Promise<void> {
    const index = users.findIndex(user => user.id === id);
    if (index >= 0) {
      users.splice(index, 1);
    }
  }

  async update(user: User): Promise<void> {
    const userFound = users.find(user => user.id === user.id);

    if (userFound) {
      userFound.fullName = user.fullName;
      userFound.workEmail = user.workEmail
    }
  }

  async find(id: number): Promise<User | undefined> {
    const user = users.find(user => user.id === id);

    return user;
  }

  async findAll(): Promise<User[]> {
    return users;
  }
}
