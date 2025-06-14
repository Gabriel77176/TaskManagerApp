import { api } from "../apiUtils.ts";

export const deleteTask = async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
};