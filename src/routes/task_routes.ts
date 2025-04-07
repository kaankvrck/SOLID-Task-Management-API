import express from 'express';
import Task_repository from '../repositories/task_repository';
import Task_service from '../services/task_service';
import Task_controller from '../controllers/task_controller';
import auth_middleware from '../middlewares/auth_middleware';

const task_routes = express.Router();

// Bağımlılıkları oluşturup zincirleme
const task_repository = new Task_repository();
const task_service = new Task_service(task_repository);
const task_controller = new Task_controller(task_service);

// Artık controller metodlarını endpoint'lere bağlayabiliriz:
task_routes.get('/tasks', auth_middleware, (req, res) => task_controller.list_tasks(req, res));
task_routes.post('/tasks', auth_middleware, (req, res) => task_controller.create_task(req, res));
task_routes.put('/tasks/:id/complete', auth_middleware, (req, res) => task_controller.complete_task(req, res));

// (İsteğe bağlı diğer endpointler: tekil görev getirme, silme vs. eklenebilir)

export default task_routes;
