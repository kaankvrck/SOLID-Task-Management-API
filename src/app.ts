import express from 'express';
import task_routes from './routes/task_routes';

const app = express();
const PORT = process.env.PORT || 3000;

// JSON verileri parse etmek için middleware
app.use(express.json());

// Task API route'larını kullan
app.use('/api', task_routes);

// Sunucuyu başlat
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
