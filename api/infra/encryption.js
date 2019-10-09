const crypto = require('crypto')

const encryptPassword = async (password) => {
  const salt = crypto.randomBytes(16).toString('hex')
  const hash = await crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')

  return {
    hash,
    salt
  }
}

const comparePassword = async (password, hash, salt) => {
  const hashPassword = await crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex')

  return hashPassword === hash
}

module.exports = {
  encryptPassword,
  comparePassword
}
