import { Router } from "express";
import * as EleicoesController from "../controller/EleicoesController.js";
import { AuthMiddleware } from "../middlewares/security/authorization/AuthMiddlewares.js";
import { EleicoesValidator} from "../middlewares/validators/EleicoesValidator.js";
import { idValidator,validateBody,validateId } from "../middlewares/validators/IdValidator.js";


const router = new Router();

router
    .get('/', EleicoesController.listarEleicoes)
    .get('/:id',validateId(idValidator), EleicoesController.obterEleicao)
    .get('/:id/resumo', EleicoesController.resumoEleicao)
    .post('/novo-candidato',AuthMiddleware, EleicoesController.adicionarCandidatoEleicao)
    .put('/remover-candidato',AuthMiddleware, EleicoesController.removerCandidatoEleicao)
    .post('/',AuthMiddleware, validateBody(EleicoesValidator),EleicoesController.criarEleicao)
    .put('/:id',AuthMiddleware, validateBody(EleicoesValidator), EleicoesController.atualizarEleicao)
    .delete('/:id',validateId(idValidator),AuthMiddleware, EleicoesController.deletarEleicao);

export default router;
