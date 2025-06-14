import { Request, Response } from "express";
import { Task } from "../models/task";
import { taskTable } from "../database/taskTable";

export const updateTaskStatus = (req: Request, res: Response) => {
    console.log("[TASK] Updating task status with body:", req.body);
    const id = Number(req.params.id);
    const { status } = req.body;
    const task = taskTable.find((task: Task) => task.id === id);
    if (!task) {
        console.error("[TASK] Task not found for ID:", id);
        res.status(404).json({ error: "Task not found" });
        return;
    }
    if (status !== "pending" && status !== "done") {
        console.error("[TASK] Invalid status:", status);
        res.status(400).json({ error: "Invalid status" });
        return;
    }
    task.status = status;
    console.log("[TASK] Task status updated:", task);
    res.status(200).json(task);
};