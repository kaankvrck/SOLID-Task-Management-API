import Task from '../models/task';

interface Task_repository_interface {
    create_task(task: Task): Task;
    list_tasks(): Task[];
    get_task_by_id(id: number): Task | undefined;
}

export default Task_repository_interface;
