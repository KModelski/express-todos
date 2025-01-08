import { Router } from 'express';
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  getTodo,
  updateTodo,
} from '../controllers/todos.controller';

export const todosRouter = Router();

todosRouter.route('/').get(getAllTodos).post(createTodo);
todosRouter.route('/:id').get(getTodo).put(updateTodo).delete(deleteTodo);
