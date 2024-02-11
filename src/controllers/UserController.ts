// src/controllers/UserController.ts
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export const getAllUsers = async (req: Request, res: Response) => {
  const userRepository = getCustomRepository(UserRepository);
  const users = await userRepository.find();
  res.json(users);
};
