import { Injectable } from '@nestjs/common';
import { User } from './interface';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'INTERN',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      role: 'ENGINEER',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob.johnson@example.com',
      role: 'ADMIN',
    },
    {
      id: 4,
      name: 'Alice Brown',
      email: 'alice.brown@example.com',
      role: 'INTERN',
    },
    {
      id: 5,
      name: 'Charlie Davis',
      email: 'charlie.davis@example.com',
      role: 'ENGINEER',
    },
    {
      id: 6,
      name: 'Eva Wilson',
      email: 'eva.wilson@example.com',
      role: 'ADMIN',
    },
    {
      id: 7,
      name: 'Frank Miller',
      email: 'frank.miller@example.com',
      role: 'INTERN',
    },
    {
      id: 8,
      name: 'Grace Thompson',
      email: 'grace.thompson@example.com',
      role: 'ENGINEER',
    },
    {
      id: 9,
      name: 'Henry Turner',
      email: 'henry.turner@example.com',
      role: 'ADMIN',
    },
    {
      id: 10,
      name: 'Ivy Clark',
      email: 'ivy.clark@example.com',
      role: 'INTERN',
    },
  ];

  findAll(role?: User['role']): User[] {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    return this.users.find((user) => user.id === id);
  }

  create(user: User) {
    const usersByHightesId = [...this.users].sort((a, b) => b.id - a.id);
    const highestId = usersByHightesId[0].id;
    const newUser = { id: highestId + 1, ...user };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: Partial<User>) {
    const index = this.users.findIndex((user) => user.id === id);
    this.users[index] = { ...this.users[index], ...updatedUser };
    return this.users[index];
  }

  delete(id: number) {
    const index = this.users.findIndex((user) => user.id === id);
    const removedUser = this.users[index];
    this.users.splice(index, 1);
    return removedUser;
  }
}
