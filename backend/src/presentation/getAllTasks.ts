import { Request, Response } from 'express';
import { taskTable } from "../database/taskTable";

export const getAllTasks = async (_: Request, res: Response): Promise<void> => {
    console.log("[TASK] Fetching all tasks");
    res.status(200).json(taskTable);
}