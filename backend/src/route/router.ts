import { Router } from 'express';
import { getAllTasks } from "../presentation/getAllTasks";
import { createTask } from "../presentation/createTask";
import { updateTaskStatus } from "../presentation/updateTaskStatus";
import { deleteTask } from "../presentation/deleteTask";

const router = Router();

router.get('/tasks', getAllTasks);
router.post('/tasks', createTask);
router.patch('/tasks/:id', updateTaskStatus);
router.delete('/tasks/:id', deleteTask);

export default router;