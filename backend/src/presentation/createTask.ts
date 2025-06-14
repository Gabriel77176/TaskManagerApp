import { Request, Response } from "express";
import {buildTask, Task} from "../models/task";
import { taskTable } from "../database/taskTable";

export const createTask = (req: Request, res: Response) => {
    console.log("[TASK] Creating task with body:", req.body);
    const { title, description, status } = req.body;
    if (!title || !description || status === undefined) {
        console.error("[TASK] Missing fields in request body");
        res.status(400).json({ error: "Missing fields" });
    }
    else {
        const newTask = buildTask(title, description, status);
        taskTable.push(newTask);
        console.log("[TASK] Task created:", newTask);
        res.status(201).json(newTask);
    }
};