const articlesEntity = require('../../domain/articles')

module.exports = ({
  repository,
  jwt,
  log
}) => {
  const find = async () => {
    const articles = await repository.find()

    if (articles && articles.length) {
      return {
        success: true,
        articles
      }
    }
    return {
      success: false,
      errors: ['No articles found']
    }
  }

  const findOne = async (id) => {
    const article = await repository.findOne({ _id: id })

    log.info(article)
    return article
  }

  const create = async (data) => {
    const validation = articlesEntity.validate(data)

    if (validation.error) {
      return {
        success: false,
        errors: validation.error.details.map((error) => error.message)
      }
    }

    const res = await repository.insertOne(data)

    if (res.result.ok) {
      return {
        success: true,
        article: {
          _id: res.insertedId,
          ...data
        }
      }
    } else {
      return {
        success: false,
        errors: res.errmsg
      }
    }
  }

  const update = async (article) => {
    const validation = articlesEntity.validate(article)

    if (validation.error) {
      return {
        success: false,
        errors: validation.error.details.map((error) => error.message)
      }
    }

    const _id = article._id

    delete article._id

    const res = await repository.update(_id, article)

    return res.value ? { success: true, article: res.value } : { success: false, errors: res.errmsg }
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
