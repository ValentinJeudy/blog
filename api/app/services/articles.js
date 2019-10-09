const articlesEntity = require('../../domain/articles')

module.exports = ({
  repository,
  jwt,
  log
}) => {
  const find = async () => {
    const article = await repository.find()

    log.info(article)
    return article
  }

  const findOne = async (id) => {
    const article = await repository.findOne({ _id: id })

    log.info(article)
    return article
  }

  const create = async (data) => {
    const validation = articlesEntity.validate(data)

    const article = await repository.insertOne(data)

    log.info(article)

    return article
  }

  const update = async (data) => {

  }

  const remove = () => {
    // const user = await repository.deleteOne({})
  }

  return {
    find,
    findOne,
    create,
    update,
    remove
  }
}
