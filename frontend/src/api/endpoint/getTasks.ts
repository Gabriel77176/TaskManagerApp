import { api } from "../apiUtils.ts";
import type Task from "../data/task.ts";

export const getTasks = async (): Promise<Task[]> => {
    const { data } = await api.get('/tasks');
    return data;
};