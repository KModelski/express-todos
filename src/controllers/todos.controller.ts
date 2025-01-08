import { Request, Response } from 'express';

export const getAllTodos = (_req: Request, res: Response): void => {
  res.json({ message: 'GET /todos' });
};

export const createTodo = (_req: Request, res: Response): void => {
  res.json({ message: 'POST /todos' });
};

export const getTodo = (_req: Request, res: Response): void => {
  res.json({ message: 'GET /todos/:id' });
};

export const updateTodo = (_req: Request, res: Response): void => {
  res.json({ message: 'PUT /todos/:id' });
};

export const deleteTodo = (_req: Request, res: Response): void => {
  res.json({ message: 'DELETE /todos/:id' });
};
