interface Task {
    id: number;
    title: string;
    description: string;
    assigned_user_id: number;
    completed: boolean;
}

export default Task;
