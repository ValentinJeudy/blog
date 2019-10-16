import React, { useEffect, useContext } from 'react'
import ArticlesList from '../../Articles/ArticlesList'

import { get } from '../../../lib/network'
import { UserContext } from '../UserContext'

const Homepage = () => {
  const [user, setUser] = useContext(UserContext)

  const validUserToken = async () => {
    const res = await get('api/users/verify')

    if (res.status === 200) {
      setUser({
        logged: true,
        token: res.data.token
      })
    } else {
      setUser({
        logged: false,
        token: ''
      })
    }
  }

  useEffect(() => {
    validUserToken()
  }, [])

  return (
    <div className='container'>
      <ArticlesList />
    </div>
  )
}

export default Homepage
