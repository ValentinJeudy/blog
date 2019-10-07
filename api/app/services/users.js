const usersEntity = require('../../domain/users')

const users = ({
  repository,
  logger
}) => {
  const find = async (id) => {
    const user = await repository.find({ _id: id })

    logger.info(user)
    return user
  }

  return {
    find
  }
}

module.exports = users
