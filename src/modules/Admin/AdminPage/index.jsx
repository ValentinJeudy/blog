import React, { useState } from 'react'

import ArticlesList from '../../Articles/ArticlesList'

const AdminPage = (props) => {
	const [] = useState()

	return(
		<div className="container">
			<h3>My articles</h3>
			<ArticlesList />
		</div>
	)
}

export default AdminPage