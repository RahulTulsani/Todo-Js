import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv';
import router from './routes/authRouter';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware example
app.use(express.json());

// Routes
app.get('/', (req: Request, res: Response) => {
    res.status(200).send({
        status:'success',
        message: "Hello Typescript World!"
    });
});

app.use('ap/v1/auth',router);

app.use('*', (req,res,next)=>{
    res.status(404).send({
        status: 'fail',
        message: 'Route not found',
    })
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});