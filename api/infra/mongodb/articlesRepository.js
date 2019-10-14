const { ObjectID } = require('mongodb')

const repository = (db) => {
  const UsersDb = db.collection('articles')

  return {
    find: () => UsersDb.find().toArray(),
    findOne: ({ id }) => UsersDb.findOne({ _id: id }),
    insertOne: (user) => UsersDb.insertOne(user),
    deleteOne: (id) => UsersDb.deleteOne({ _id: id }),
    update: (_id, article) => UsersDb.findOneAndUpdate(
      { _id: ObjectID(_id) },
      { $set: { ...article } },
      { returnNewDocument: true })
  }
}

module.exports = repository
