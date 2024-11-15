import Joi from 'joi';
import AppError from '../../errors/AppError.js';

export const EleitorValidator = Joi.object({
    nome: Joi.string().required(),             
    cpf: Joi.string().length(11).required(),  
    senha: Joi.string()         
});

const loginSchema = Joi.object({
    cpf: Joi.string().required(),
    senha: Joi.string().required()
})

const senhaSchema = Joi.object({
    senhaAtual: Joi.string().required(),
    novaSenha: Joi.string().required()

})

export function ValidarLoginMiddleware (req, res, next){
    const {error} = loginSchema.validate(req.body)
    if (error){
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}

export function ValidarSenhaMiddleware (req, res, next){
    const {error} = senhaSchema.validate(req.body)
    if (error){
        next(new AppError(error.details[0].message, 400))
    }
    return next()
}