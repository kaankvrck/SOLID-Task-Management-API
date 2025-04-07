import Task from '../models/task';
import Task_repository_interface from '../repositories/task_repository_interface';

class Task_service {
    constructor(private task_repo: Task_repository_interface) { }

    create_task(title: string, description: string, assigned_user_id: number): Task {
        const new_task: Task = {
            id: 0, // ID, repository tarafından atanacaktır.
            title,
            description,
            assigned_user_id,
            completed: false
        };
        return this.task_repo.create_task(new_task);
    }

    get_all_tasks(): Task[] {
        return this.task_repo.list_tasks();
    }

    complete_task(task_id: number): Task {
        const task = this.task_repo.get_task_by_id(task_id);
        if (!task) {
            throw new Error('Task not found');
        }
        task.completed = true;
        return task;
    }
}

export default Task_service;
