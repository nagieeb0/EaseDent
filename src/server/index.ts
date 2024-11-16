import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db';
import { userRouter } from './routes/user.routes';
import { appointmentRouter } from './routes/appointment.routes';
import { productRouter } from './routes/product.routes';
import { orderRouter } from './routes/order.routes';
import { authRouter } from './routes/auth.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/appointments', appointmentRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});