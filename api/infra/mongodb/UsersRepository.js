
const repository = (db) => {
  // const UsersDb = db.collection('users')

  return {
    findOne: ({ username }) => db.collection('users').findOne({ username }),
    insertOne: (user) => db.collection('users').insertOne(user),
    deleteOne: (id) => db.collection('users').deleteOne({ _id: id })
    // update: (user) => db.collection('users').update({ _id: user.id }, user)
  }
}

module.exports = repository
