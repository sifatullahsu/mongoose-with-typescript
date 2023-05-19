import express, { Application } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// internal imports
import userRouteV1 from './app/modules/user/v1/user.route';

// application routes
app.use('/api/v1/users', userRouteV1);

export default app;