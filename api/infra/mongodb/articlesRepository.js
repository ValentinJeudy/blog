
const repository = (db) => {
  // const UsersDb = db.collection('users')

  return {
    findOne: ({ id }) => db.collection('articles').findOne({ _id: id }),
    insertOne: (user) => db.collection('articles').insertOne(user),
    deleteOne: (id) => db.collection('articles').deleteOne({ _id: id }),
    update: (article) => db.collection('articles').update({ _id: article.id }, article)
  }
}

module.exports = repository
