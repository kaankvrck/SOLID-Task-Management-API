import { Request, Response } from 'express';
import Task_service from '../services/task_service';

class Task_controller {
    constructor(private task_service: Task_service) { }

    list_tasks(req: Request, res: Response): void {
        const tasks = this.task_service.get_all_tasks();
        res.json(tasks);
    }

    create_task(req: Request, res: Response): void {
        try {
            const { title, description, assigned_user_id } = req.body;
            const new_task = this.task_service.create_task(title, description, assigned_user_id);
            res.status(201).json(new_task);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    complete_task(req: Request, res: Response): void {
        try {
            const task_id = parseInt(req.params.id);
            const updated_task = this.task_service.complete_task(task_id);
            res.json(updated_task);
        } catch (error: any) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default Task_controller;
