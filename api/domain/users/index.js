const Joi = require('@hapi/joi')

const UserSchema = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .required()
})

module.exports = UserSchema
