import Task from '../models/task';
import Task_repository_interface from './task_repository_interface';

class Task_repository implements Task_repository_interface {
    private tasks: Task[] = [];
    private next_id: number = 1;

    create_task(task: Task): Task {
        task.id = this.next_id++;
        this.tasks.push(task);
        return task;
    }

    list_tasks(): Task[] {
        return this.tasks;
    }

    get_task_by_id(id: number): Task | undefined {
        return this.tasks.find(t => t.id === id);
    }
}

export default Task_repository;
