import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
// import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

import 'react-quill/dist/quill.snow.css'
import './EditArticle.scss'

// Quill Editor Options
const toolbarOptions = [
	[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
	['blockquote', 'code-block'],
	['bold', 'italic', 'underline', 'strike'],        // toggled buttons

	[{ 'list': 'ordered'}, { 'list': 'bullet' }],
	// [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
	[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
	// [{ 'direction': 'rtl' }],                         // text direction

	// [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown

	// [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
	[{ 'align': [] }],

	// ['clean']
]

const editorModules = {
	toolbar: toolbarOptions
}

const EditArticle = ({ article, setArticle, saveArticle, selectedFile, setSelectedFile, classes }) => {
	// const [selectedFile, setSelectedFile] = useState({})

	const setContent= (updatedContent, delta, source) => {
		if (source === 'user') {
			const data = {
				...article,
				content: updatedContent,
			}
			setArticle(data)
		}
	}

	const setTitle = (e) => {
		setArticle({
			...article,
			title: e.target.value,
		})
	}

	const fileUploadHandler = (e) => {
		if (e.target.files && e.target.files.length) {
			setSelectedFile(e.target.files[0])
		}
	}

	return(
		<div className={classes.block}>
			<TextField
				className={classes.title}
				label='Title'
				type='text'
				value={article.title}
				onChange={setTitle}
				fullWidth={true}
				variant='outlined'
			/>
			<div className={classes.buttonsContainer}>
				<div>
					<span>
						{ selectedFile && selectedFile.name }
					</span>
				</div>
				<div className={classes.buttons}>
					<input
						style={{display: 'none'}}
						accept='image/*'
						id='raised-button-file'
						type='file'
						onChange={fileUploadHandler}
					/>

					<label htmlFor='raised-button-file'>
						<Button
							variant='contained'
							color='secondary'
							component='span'>
          Upload
						</Button>
					</label>
					<Button
						className={classes.button}
						variant='contained'
						color='secondary'
						onClick={saveArticle}
					>
					Save
					</Button>
				</div>
			</div>
			<div>
				<ReactQuill
					modules={editorModules}
					value={article.content}
					onChange={setContent} />
			</div>
		</div>
	)
}

EditArticle.propTypes = {
	article: PropTypes.object,
	setArticle: PropTypes.func,
	saveArticle: PropTypes.func,
	selectedFile: PropTypes.object,
	setSelectedFile: PropTypes.func,
	classes: PropTypes.object,
}

export default EditArticle