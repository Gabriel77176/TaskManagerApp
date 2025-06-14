import { Request, Response } from "express";
import { taskTable } from "../database/taskTable";

export const deleteTask = (req: Request, res: Response) => {
    console.log("[TASK] Deleting task with ID:", req.params.id);
    const id = Number(req.params.id);
    const index = taskTable.findIndex(task => task.id === id);
    if (index === -1) {
        console.error("[TASK] Task not found for ID:", id);
        res.status(404).json({ error: "Task not found" });
    } else
    {
        taskTable.splice(index, 1);
        console.log("[TASK] Task deleted with ID:", id);
        res.status(204).send();
    }
};