// Dotenv
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });


// Cluster
import cluster from 'cluster';
import os from 'os';

// Express
import express from 'express';

// Mongoose
import mongoose from 'mongoose';
import mongoConfig from './config/mongo';
mongoose.connect(mongoConfig.url, mongoConfig.configs);


// Mids
import cors from 'cors';
import morgan from 'morgan';

// Routes
import routes from './routes';


// Express
const app = express();


// Mids
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(routes);


if (cluster.isMaster) {
    const numCPUs = os.cpus().length;
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
} else {
    app.listen(process.env.HTTP_PORT || 3333);
}