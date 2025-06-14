import { api } from "../apiUtils.ts";
import type Task from "../data/task.ts";
import type NewTask from "../data/newTask.ts";

export const createTask = async (task: NewTask): Promise<Task> => {
    const { data } = await api.post('/tasks', task);
    return data;
};