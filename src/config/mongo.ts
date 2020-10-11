import dotenv from 'dotenv';
import { ConnectionOptions } from 'mongoose';

dotenv.config({ path: '.env' });

const mongoOpts: ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

const mongoConfig = {
    url: `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    configs: mongoOpts,
}

export default mongoConfig;