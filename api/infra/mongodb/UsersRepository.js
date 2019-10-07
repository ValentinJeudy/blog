
const repository = (db) => {
  // const UsersDb = db.collection('users')

  return {
    findOne: ({ token }) => db.collection('users').findOne({ _id: token }),
    insert: (user) => db.collection('users').insertOne(user),
    delete: (id) => db.collection('users').deleteOne({ _id: id }),
    update: (user) => db.collection('users').update({ _id: user.id }, user)
  }
}

module.exports = repository
