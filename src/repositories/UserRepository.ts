// src/repositories/UserRepository.ts
import {  Repository } from 'typeorm';
import { User } from '../entities/User';

export class UserRepository extends Repository<User> {
  // You can add custom methods or logic here if needed
}
