import { api } from "../apiUtils.ts";
import type Task from "../data/task.ts";

export const updateTaskStatus = async (id: number, status: 'pending' | 'done'): Promise<Task> => {
    const { data } = await api.patch(`/tasks/${id}`, { status });
    return data;
};