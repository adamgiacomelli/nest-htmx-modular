import { Injectable } from '@nestjs/common';

// To avoid setting up the database we set up some static user data for demonstration purposes
const users = [
  { name: 'User1', email: 'user1@nonexisting.com' },
  { name: 'User2', email: 'user2@nonexisting.com' },
  { name: 'User3', email: 'user3@nonexisting.com' },
  { name: 'User4', email: 'user4@nonexisting.com' },
  { name: 'User5', email: 'user5@nonexisting.com' },
];

@Injectable()
export class AppService {
  async getUsers() {
    return users;
  }

  async getUserCount() {
    return users.length
  }
}
