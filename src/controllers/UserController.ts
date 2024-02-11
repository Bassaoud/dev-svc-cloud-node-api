// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

export const getAllUsers = async (req: Request, res: Response) => {
  const userRepository = getRepository(User);
  const users = await userRepository.find();
  res.json(users);
};
