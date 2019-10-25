const Joi = require('@hapi/joi')

const ArticleSchema = Joi.object({
  _id: Joi.string(),

  title: Joi.string()
    .allow('')
    .required(),

  imgName: Joi.string()
    .allow('')
    .required(),

  content: Joi.string()
    .allow('')
    .required(),

  tags: Joi.array()
    .required()
    .max(10)
})

module.exports = ArticleSchema
