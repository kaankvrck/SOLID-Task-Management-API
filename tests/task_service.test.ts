// tests/task_service.test.ts
import Task_service from '../src/services/task_service';
import Fake_task_repository from './fake_task_repository';

describe('Task_service', () => {
    let service: Task_service;
    let fake_repo: Fake_task_repository;

    beforeEach(() => {
        fake_repo = new Fake_task_repository();
        service = new Task_service(fake_repo);
    });

    test('create_task should create a new task with completed false', () => {
        const task = service.create_task('Test Task', 'Test Description', 1);
        expect(task.id).toBeDefined();
        expect(task.title).toBe('Test Task');
        expect(task.completed).toBe(false);
        expect(fake_repo.list_tasks().length).toBe(1);
    });

    test('get_all_tasks should return all tasks', () => {
        service.create_task('Task 1', 'Description 1', 1);
        service.create_task('Task 2', 'Description 2', 2);
        const tasks = service.get_all_tasks();
        expect(tasks.length).toBe(2);
        expect(tasks[0].title).toBe('Task 1');
        expect(tasks[1].assigned_user_id).toBe(2);
    });

    test('complete_task should mark a task as completed', () => {
        const task = service.create_task('Complete Me', 'Description', 1);
        const updated_task = service.complete_task(task.id);
        expect(updated_task.completed).toBe(true);
        const all_tasks = service.get_all_tasks();
        const fetched_task = all_tasks.find(t => t.id === task.id);
        expect(fetched_task?.completed).toBe(true);
    });

    test('complete_task should throw error for non-existent task', () => {
        expect(() => service.complete_task(999)).toThrow('Task not found');
    });
});
