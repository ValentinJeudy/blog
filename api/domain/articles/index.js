const Joi = require('@hapi/joi')

const ArticleSchema = Joi.object({
  title: Joi.string()
    .required(),

  content: Joi.string()
    .required(),

  tags: Joi.array()
    .required()
    .max(10)
})

module.exports = ArticleSchema
