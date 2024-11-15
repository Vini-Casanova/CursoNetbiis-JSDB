import { Router } from "express";
import * as EleitorController from "../controller/EleitorController.js";
import { EleitorValidator, ValidarLoginMiddleware, ValidarSenhaMiddleware } from "../middlewares/validators/EleitorValidator.js";
import { idValidator, validateBody, validateId } from "../middlewares/validators/IdValidator.js";
import { AuthMiddleware } from "../middlewares/security/authorization/AuthMiddlewares.js";
const router = Router();

router
    .get('/', AuthMiddleware, EleitorController.listarEleitores)
    .get('/:id',validateId(idValidator),AuthMiddleware,EleitorController.obterEleitor)
    .post('/',validateBody(EleitorValidator),EleitorController.criarEleitor)
    .post('/login', ValidarLoginMiddleware, EleitorController.login)
    .put('/:id',AuthMiddleware,validateBody(EleitorValidator),EleitorController.atualizarEleitor)
    .put('/:id/atualizar-senha',ValidarSenhaMiddleware,EleitorController.atualizarSenha)
    .delete('/:id',validateId(idValidator),AuthMiddleware,EleitorController.deletarEleitor);


export default router;
