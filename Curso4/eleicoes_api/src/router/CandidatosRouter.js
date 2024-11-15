import { Router } from "express";
import * as CandidatosController from "../controller/CandidatosController.js";
import { AuthMiddleware } from "../middlewares/security/authorization/AuthMiddlewares.js";
import { CandidatoValidator} from "../middlewares/validators/CadidatosValidador.js"
import { idValidator,validateBody,validateId } from "../middlewares/validators/IdValidator.js";

const router = Router();

router
    .get('/', CandidatosController.listarTodosCandidatos)
    .get('/:id',validateId(idValidator), CandidatosController.buscarCandidato)
    .get('/candidatos-da-eleicao/:id',validateId(idValidator),CandidatosController.buscarCandidatosPorEleicao)
    .post('/',AuthMiddleware,validateBody(CandidatoValidator),CandidatosController.criarCandidato)
    .put('/:id',AuthMiddleware,validateBody(CandidatoValidator),CandidatosController.atualizarCandidato)
    .delete('/:id',validateId(idValidator),AuthMiddleware,CandidatosController.deletarCandidato);

export default router;

