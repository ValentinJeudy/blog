import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div style={headerStyle} className="header">
			<Link to="/">
				<h2 style={titleStyle}>Blog</h2>
			</Link>
			<ul style={menuStyle} className="menu">
				<li
					style={itemStyle}
					className="menu-item"
				>
					<Link style={{ color: '#fff'}} to='/contact'>
              Contact
					</Link>
				</li>
			</ul>
		</div>
	)
}

// Styles
const headerStyle = {
	position: 'relative',
	height: '2rem',
	lineHeight: '2rem',
	padding: '1rem .5rem',
	backgroundColor: '#000',
	color: '#fff'
}

const titleStyle = {
	display: 'inline',
	color: '#fff'
}

const menuStyle = {
	float: 'right',
	color: '#fff'
}

const itemStyle = {
	display: 'inline-block',
	margin: '0 1rem',
	cursor: 'pointer',
	color: '#fff'
}

export default Header