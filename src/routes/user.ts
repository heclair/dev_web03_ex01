import { Router } from "express";
import controller from "../controllers/UserController";

const routes = Router();

routes.put ("/", controller.update);
routes.delete ("/", controller.delete);
routes.get ("/", controller.list);
routes.post ("/", controller.create);

export default routes;