import { Router } from 'express';

// Models
import userController from './controllers/user.controller';

const routes = Router();


// Users
routes.get("/users", userController.select);
routes.get("/users/:id", userController.select);
routes.post("/users", userController.create);

// Login
routes.post("/session", userController.login);


export default routes;