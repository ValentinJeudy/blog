const usersEntity = require('../../domain/users')

module.exports = ({
  repository,
  encrypt,
  jwt,
  log
}) => {
  const find = async (id) => {
    const user = await repository.find({ _id: id })

    log.info(user)
    return user
  }

  const create = async ({ username, password }) => {
    const validation = usersEntity.validate({ username })

    if (validation.error) {
      return {
        success: false,
        errors: validation.error.details.map((error) => error.message)
      }
    }

    log.info(validation)

    const { hash, salt } = await encrypt.encryptPassword(password)

    const data = {
      username,
      hash,
      salt
    }

    const res = await repository.insertOne(data)

    return {
      success: !!res.result.ok
    }
  }

  const login = async ({ username, password }) => {
    const user = await repository.findOne({ username })

    if (!user) {
      return false
    }

    const isPasswordValid = await encrypt.comparePassword(password, user.hash, user.salt)

    if (isPasswordValid) {
      return jwt.signin(user._id)
    }

    return isPasswordValid
  }

  const verify = (token) => {
    const isTokenValid = jwt.verify(token)

    return !!isTokenValid
  }

  const remove = () => {
    // const user = await repository.deleteOne({})
  }

  return {
    find,
    create,
    login,
    verify,
    remove
  }
}
