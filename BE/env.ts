import * as Joi from 'joi';

export const validationSchema = Joi.object({
  POSTGRES_HOST: Joi.string().required(),
  POSTGRES_PORT: Joi.number().required(),
  POSTGRES_USER: Joi.string().required(),
  POSTGRES_PASSWORD: Joi.string().required(),
  POSTGRES_DB: Joi.string().required(),
  // PORT: Joi.number().required(),

  REDIS_CONNECT: Joi.string().required(),

})