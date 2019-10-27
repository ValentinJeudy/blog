const { ObjectID } = require('mongodb')

const repository = (db) => {
  const ArticlesDb = db.collection('articles')

  return {
    find: () => ArticlesDb.find().toArray(),
    findOne: (id) => ArticlesDb.findOne({ _id: ObjectID(id) }),
    insertOne: (user) => ArticlesDb.insertOne(user),
    deleteOne: (id) => ArticlesDb.deleteOne({ _id: id }),
    update: (_id, article) => ArticlesDb.findOneAndUpdate(
      { _id: ObjectID(_id) },
      { $set: { ...article } },
      { returnOriginal: false })
  }
}

module.exports = repository
