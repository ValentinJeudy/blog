import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
	Card,
	CardHeader,
	CardActions,
	Button } from '@material-ui/core'
import { post } from '../../../lib/network'


const AddArticle = (props) => {
	const history = useHistory()

	const createArticle = async () => {
		const data = {
			title: '',
			content: '',
			tags: []
		}
		const res = await post('articles', {article: data})

		if (res.data.success) {
			const article = res.data.article

			history.push({
				pathname: `/articles/${article._id}`,
				state: { article }
			})
		}
	}

	return(
		<li className={props.classes.li}>
			<Card>
				<CardHeader title="New article" />
				<CardActions>
					<Button onClick={createArticle}>Create</Button>
				</CardActions>
			</Card>
		</li>
	)
}

AddArticle.propTypes = {
	classes: PropTypes.object,
	history: PropTypes.object
}


export default AddArticle