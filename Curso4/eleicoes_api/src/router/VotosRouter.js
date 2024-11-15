import {Router} from "express";
import * as VotosController from "../controller/VotosController.js";
import { AuthMiddleware } from "../middlewares/security/authorization/AuthMiddlewares.js";
import { validateBody } from '../middlewares/validators/IdValidator.js';
import votoSchema from '../middlewares/validators/VotosValidator.js';

const router = Router();

router
    .post('/', AuthMiddleware,validateBody(votoSchema), VotosController.inserirVoto);

export default router;