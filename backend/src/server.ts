import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', userRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
